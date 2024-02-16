'use client';
import CardComponent from '@/components/CardComponent';
import React, { useEffect } from 'react';
import type { SearchProps } from 'antd/es/input/Search';
import { Input, Space } from 'antd';
import SkeletonComponent from '@/components/SkeletonComponent';

const ListQuote = () => {
  const [quotes, setQuotes] = React.useState<any>([])
  const [search, setSearch] = React.useState<any>('')
  const { Search } = Input;
  const onSearch: SearchProps['onSearch'] = (value) => setSearch(value);

  const fetchData = async () => {
    try {
      if (!search) {
        const response = await fetch('https://animechan.xyz/api/quotes')
        const data = await response.json()
        if (response.status == 200) {
          setQuotes(data)
        }
      } else {
        const response = await fetch(`https://animechan.xyz/api/quotes/anime?title=${search}`)
        const data = await response.json()
        if (response.status == 200) {
          setQuotes(data)
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData()
  }, [search])

  return (
    <>
      <div className='flex justify-center pt-10'>
        <div className='flex flex-col'>
          <h1 className='text-center pb-5'>Search Quote by Anime Title</h1>
          <Space direction="vertical">
            <Search
              placeholder="Input Anime Title"
              allowClear
              enterButton="Search"
              size="large"
              onSearch={onSearch}
            />
          </Space>
        </div>
      </div>
      {quotes.length == 0 ?
        (
          Array.from({ length: 6 }).map((_, index) => (
            <div className='w-11/12 m-auto text-center justify-center pt-5 pr-2 pl-2' key={index}>
              <SkeletonComponent />
            </div>
          ))
        )
        :
        (
          quotes.map((quote: any, index: number) => (
            <div className='flex flex-col w-11/12 m-auto pt-5' key={index}>
              <CardComponent quote={quote} fetchData={fetchData} />
            </div>
          ))
        )}
    </>
  )
};

export default ListQuote;