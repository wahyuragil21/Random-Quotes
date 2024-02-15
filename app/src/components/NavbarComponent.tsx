'use client';
import Link from 'next/link';
import { redirect, usePathname } from 'next/navigation';
import React from 'react';
import { useCookies } from 'next-client-cookies';

const NavbarComponent: React.FC = () => {
    const pathname = usePathname()
    const cookies = useCookies()

    const handleLogout = () => {
        cookies.remove('Authorization')
        redirect('/')
    }
    return (
        <div className='flex items-center justify-between bg-blue-500 px-5 sticky top-0 z-50'>
            <Link className='text-blue-200 px-3 hover:text-white' href='/list-quote'>Anime Quotes </Link>
            <div className='hidden md:flex items-center py-4'>
                <ul className='flex flex-row'>
                    <li><Link className={`link ${pathname === '/list-quote' ? 'text-white' : 'text-blue-200'} no-underline px-3 hover:text-white`} href='/list-quote'>Quotes </Link></li>
                    <li><Link className={`link ${pathname === '/random-quote' ? 'text-white' : 'text-blue-200'} no-underline px-3 hover:text-white`} href='/random-quote'>Random Quotes</Link></li>
                    <li><Link className={`link ${pathname === '/favourite' ? 'text-white' : 'text-blue-200'} no-underline px-3 hover:text-white`} href='/favourite'>Favourite</Link></li>
                </ul>
            </div>
            <div className='md:hidden'>
                <button className='text-blue-200 px-5 hover:text-white'>Menu</button>
            </div>
            <Link className='text-blue-200 px-5 hover:text-white hidden md:block' href='' onClick={handleLogout} >Logout</Link>
        </div>
    )
};

export default NavbarComponent;