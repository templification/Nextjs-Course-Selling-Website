import React, { useRef } from 'react';
import Link from 'next/link';

const Navbar = () => {
    const toogle = () => {
        if (ref.current.classList.contains("-translate-x-full")) {
            ref.current.classList.remove("-translate-x-full");
        } else{
            ref.current.classList.add("-translate-x-full");
        }
    }
    const ref = useRef();
    return (
        <div className='md:flex top-0 justify-between bg-pink-600 h-20 fixed w-full z-50'>
            <div className="logo m-5 md:ml-20 text-3xl font-bold text-white">
                <Link href={'/'}><a>Your Logo</a></Link>
            </div>
            <ul ref={ref} className='md:m-4 transition-all md:flex mr-24 md:bg-transparent bg-pink-500 top-20 absolute md:static md:w-auto w-full text-center items-center md:translate-x-0 -translate-x-full'>
                <li className='md:m-2 m-14 text-white hover:text-red-200 font-medium text-xl md:mr-5'><Link href={'/'}><a>Item1</a></Link></li>
                <li className='md:m-2 m-14 text-white hover:text-red-200 font-medium text-xl md:mr-5'><Link href={'/'}><a>Item2</a></Link></li>
                <li className='md:m-2 m-14 text-white hover:text-red-200 font-medium text-xl md:mr-5'><Link href={'/'}><a>Item2</a></Link></li>
                <li className='md:m-2 m-14 text-white hover:text-red-200 font-medium text-xl md:mr-5'><Link href={'/'}><a>Item4</a></Link></li>
                <li className='md:m-2 m-14 text-white hover:text-red-200 font-medium text-xl md:mr-5'><Link href={'/'}><a>Item5</a></Link></li>
            </ul>
            <div onClick={toogle} className="toogle absolute top-7 right-5 md:hidden block">
                <div className='col bg-white h-1 m-1 w-8'></div>
                <div className='col bg-white h-1 m-1 w-8'></div>
                <div className='col bg-white h-1 m-1 w-8'></div>
            </div>
        </div >
    )
}

export default Navbar
