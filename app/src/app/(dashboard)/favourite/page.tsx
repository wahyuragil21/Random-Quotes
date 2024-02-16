'use client'
import React, { useEffect } from 'react';
import { useCookies } from 'next-client-cookies';
import CardComponent from '@/components/CardComponent';
import { Card } from 'antd';

const Favourite = () => {
    const [quotes, setQuotes] = React.useState<any>([])
    const cookies = useCookies()
    const userId = cookies.get('Authorization');
    const fetchData = async () => {
        try {
            const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + `/api/favourite?userId=${userId}`, {
                cache: 'no-store',
                method: 'GET'
            })
            const { data } = await response.json()

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
    return (
        <>
            <h1 className='text-center font-bold text-xl m-5'>My Favourite Quotes</h1>
            {quotes.length == 0 ? (
                <div className='w-11/12 m-auto text-center justify-center pt-5 pr-2 pl-2'>
                    <Card
                        hoverable
                        className='bg-blue-100 h-44' >
                        <p className='text-center py-14'>You dont have a favorite quote yet, lets find your favorite quote.</p>
                    </Card>
                </div>
            ) : (
                quotes.map((quote: any, index: number) => (
                    <div className='flex flex-col w-11/12 m-auto pt-5' key={index}>
                        <CardComponent quote={quote} fetchData={fetchData} />
                    </div>
                ))
            )}
        </>
    )
};

export default Favourite;