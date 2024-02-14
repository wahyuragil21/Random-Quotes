'use client';
import CardComponent from '@/components/CardComponent';
import React, { useEffect } from 'react';
import type { SearchProps } from 'antd/es/input/Search';
import { Input, Space } from 'antd';

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
      }else{
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
      <div className='flex justify-center p-10'>
        <div className='flex flex-col'>
          <h1 className='pb-5'>Search by Anime Title or Character Anime</h1>
          <Space direction="vertical">
            <Search
              placeholder="input search text"
              allowClear
              enterButton="Search"
              size="large"
              onSearch={onSearch}
            />
          </Space>
        </div>
      </div>
      <div className='flex flex-wrap m-auto w-11/12 pb-10'>
        <CardComponent quotes={quotes} />
      </div>
    </>
  )
};

export default ListQuote;