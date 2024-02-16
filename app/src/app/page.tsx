"use client";
import React from 'react';
import { Card } from 'antd';
import { Button, Flex } from 'antd';
import Link from 'next/link';


const Home = () => (
  <>
    <div className='flex flex-col items-center justify-center pt-20'>
      <h1 className='font-bold sm:text-xl md:text-2xl lg:text-3xl'>Welcome to Random Anime Quotes</h1>
      <p className='hidden sm:block'>Where wisdom meets beauty in every word! Get inspired by captivating quotes from your favorite anime.</p>
      <p className='text-center font-semibold'>Start exploring now</p>
    </div>
    <div className='flex flex-col items-center justify-center md:flex-row lg:flex-row'>
      <Card
        hoverable
        style={{ width: 240, marginRight: '10px' }}
        cover={<img alt="example" src="https://i.pinimg.com/564x/0c/9b/89/0c9b89b62ba04b4b4740f4ce2da28b54.jpg" />}
      >
        <Flex vertical gap="small" style={{ width: '100%' }}>
          <Link href='/login'>
            <Button block>
              Login
            </Button>
          </Link>
        </Flex>
      </Card>
      <h1 className='lg:hidden md:hidden'>Dont have an account? Register here</h1>
      <Card
        hoverable
        style={{ width: 240, marginLeft: '10px' }}
        cover={<img alt="example" src="https://i.pinimg.com/564x/0c/9b/89/0c9b89b62ba04b4b4740f4ce2da28b54.jpg" />}
      >
        <Flex vertical gap="small" style={{ width: '100%' }}>
          <Link href='/register'>
            <Button block>
              Register
            </Button>
          </Link>
        </Flex>
      </Card>
    </div>
  </>
);

export default Home;