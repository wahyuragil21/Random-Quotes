'use client';
import React from 'react';
import { Card } from 'antd';
import { HeartFilled, ShareAltOutlined } from '@ant-design/icons';
import { useCookies } from 'next-client-cookies';
import { usePathname } from 'next/navigation';


const CardComponent = ({ quote }: { quote: any }) => {
  const [isFavourite, setIsFavourite] = React.useState(false);
  const cookies = useCookies()
  const pathname = usePathname()

  const handleFavourite = async (quote: object) => {
    const userId = cookies.get('Authorization');
    const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/api/favourite', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...quote, userId })
    })

    if (response.ok) {
      setIsFavourite(true)
    }
  }

  const handleDelete = async (id: string) => {
    const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + `/api/favourite`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id })
    })

    if (response.ok) {
      console.log("deleted");
      
    }
  }


  return (
    <>
      <div className='w-full text-center justify-center pr-2 pl-2'>
        <Card
          hoverable
          className='bg-blue-100' >
          <p>Anime</p>
          <p className='font-bold mb-5'>"{quote.anime}"</p>
          <p>Character</p>
          <p className='font-bold mb-5'>"{quote.character}"</p>
          <p>"{quote.quote}"</p>
          <div className='absolute bottom-1 right-2'>
            <HeartFilled className={isFavourite || pathname === '/favourite' ? 'text-red-500' : 'text-black'}
              onClick={pathname === '/favourite' ? () => handleDelete(quote._id) : () => handleFavourite(({
                quoteId: quote.id,
                anime: quote.anime,
                quote: quote.quote,
                character: quote.character
              }))} />
            <ShareAltOutlined className='ml-1' />
          </div>
        </Card>
      </div>
    </>
  )
};

export default CardComponent;