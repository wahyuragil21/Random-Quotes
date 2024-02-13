"use client";
import React from 'react';

const NavbarComponent: React.FC = () => (

    <div className='flex items-center justify-between bg-blue-500 px-5'>
        <div>
            <h1 className='text-blue-200 px-3 hover:text-white'>Random Quotes</h1>
        </div>
        <div className='flex items-center py-4'>
            <a className='text-blue-200 px-3 hover:text-white' href=''>Quotes</a>
            <a className='text-blue-200 px-3 hover:text-white' href=''>Random Quotes</a>
            <a className='text-blue-200 px-3 hover:text-white' href=''>Favourite</a>
        </div>
        <div>
            <a className='text-blue-200 px-3 hover:text-white' href=''>Login</a>
        </div>
    </div>
);

export default NavbarComponent;