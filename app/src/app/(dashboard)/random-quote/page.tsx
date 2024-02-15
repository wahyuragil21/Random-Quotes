'use client'
import React, { useEffect } from 'react';
import type { SearchProps } from 'antd/es/input/Search';
import { Card, Input, Space } from 'antd';
import { useCookies } from 'next-client-cookies';
import CardComponent from '@/components/CardComponent';
import SkeletonComponent from '@/components/SkeletonComponent';


const RandomQuote = () => {
    const [search, setSearch] = React.useState<any>('')    
    const [quote, setQuotes] = React.useState<any>([])
    const onSearch: SearchProps['onSearch'] = (value) => setSearch(value);
    const { Search } = Input;

    const fetchData = async () => {
        try {
            let result
            const characterResponse = await fetch(`https://animechan.xyz/api/random/character?name=${search}`, { cache: 'no-store' })
            if (characterResponse.status == 200) {
                result = await characterResponse.json()
                console.log(characterResponse);
                
            }

            if (!result || Object.keys(result).length === 0) {
                const animeResponse = await fetch(`https://animechan.xyz/api/random/anime?title=${search}`, { cache: 'no-store' })
                if (animeResponse.status == 200) {
                    result = await animeResponse.json()
                }
            }

            setQuotes(result)

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData()
    }, [search])

    return (
        <>
            <div className='flex justify-center p-5'>
                <div className='flex flex-col'>
                    <h1 className='text-center font-bold'>Random Quote</h1>
                    <h1 className='text-center pb-5'>Lets find 1 random quote from your favorite anime or character.</h1>
                    <Space direction="vertical">
                        <Search
                            placeholder="Input Title or Character Anime"
                            allowClear
                            enterButton="Find Random Quote"
                            size="large"
                            onSearch={onSearch}
                        />
                    </Space>
                </div>
            </div>
            {!quote ? (
                <div className='w-11/12 m-auto text-center justify-center pt-5 pr-2 pl-2'>
                    <Card
                        hoverable
                        className='bg-blue-100 h-44' >
                        <p className='text-center py-14'>Your random quote will appear here</p>
                    </Card>
                </div>
            ) : (
                quote.length == 0 ? (
                    <div className='w-11/12 m-auto text-center justify-center pt-5 pr-2 pl-2'>
                        <SkeletonComponent />
                    </div>
                ) : (
                    <CardComponent quote={quote} />
                )
            )}
        </>
    )
};

export default RandomQuote;