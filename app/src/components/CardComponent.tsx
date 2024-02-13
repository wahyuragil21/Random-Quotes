"use client";
import React, { useEffect } from 'react';
import { Card } from 'antd';
import { HeartFilled, ShareAltOutlined } from '@ant-design/icons';
import SkeletonComponent from './SkeletonComponent';

const CardComponent = () => {
  const [quotes, setQuotes] = React.useState<any>([])
  const fetchData = async () => {
    try {
      const response = await fetch('https://animechan.xyz/api/quotes')
      const data = await response.json()
      if (response.status == 200) {
        setQuotes(data)
      }
    } catch (error) {
      console.log(error);

    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  // console.log(quotes);


  return (
    <>
      {quotes.length == 0 ?
        (
          Array.from({ length: 6 }).map((_, index) => (
            <div className='w-1/2 text-center justify-center pt-10 pb-10 pr-2 pl-2' key={index}>
              <SkeletonComponent />
            </div>
          ))
        )
        :
        (
          quotes.map((quote: any, index: number) => (
            <div className='w-1/2 text-center justify-center pt-5 pr-2 pl-2' key={index}>
              <Card
                hoverable
                className='bg-slate-100' >
                <p>Anime</p>
                <p className='font-bold mb-5'>"{quote.anime}"</p>
                <p>"{quote.quote}"</p>
                <div className='absolute bottom-1 right-2'>
                  <HeartFilled className='text-red-500 mr-2' />
                  <ShareAltOutlined />
                </div>
              </Card>
            </div>
          ))
        )}
    </>
  )
};

export default CardComponent;