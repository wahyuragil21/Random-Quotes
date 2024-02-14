"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavbarComponent: React.FC = () => {
    const pathname = usePathname()
    return (
        <div className='flex items-center justify-between bg-blue-500 px-5 sticky top-0 z-50'>
            <Link className='text-blue-200 px-3 hover:text-white' href='/list-quote'>Random Quotes </Link>
            <div className='items-center py-4'>
                <ul className='flex flex-row'>
                    <li><Link className={`link ${pathname === '/list-quote' ? 'text-white' : 'text-blue-200'} no-underline px-3 hover:text-white`} href='/list-quote'>Quotes </Link></li>
                    <li><Link className={`link ${pathname === '/random-quote' ? 'text-white' : 'text-blue-200'} no-underline px-3 hover:text-white`} href='/random-quote'>Random Quotes</Link></li>
                    <li><Link className={`link ${pathname === '/favourite' ? 'text-white' : 'text-blue-200'} no-underline px-3 hover:text-white`} href='/favourite'>Favourite</Link></li>
                </ul>
            </div>
            <Link className='text-blue-200 px-3 hover:text-white' href=''>Logout</Link>
        </div>
    )
};

export default NavbarComponent;