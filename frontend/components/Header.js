import React from 'react';
import controller from '../images/controller.png';
import Image from 'next/image'
import Link from 'next/link';

const Header = () => {
    return (
        <div>
            <div className='w-full h-[100vh] bg-gradient-to-r from-gray-500 to-pink-500'>
                <section className='container mx-auto flex px-5 md:px-10 md:py-48 py-24 md:flex-row flex-col items-center'>
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-8 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-white">Best Course Selling
                            <br className="hidden lg:inline-block" />Website, Learn Anything!
                        </h1>
                        <p className="mb-8 leading-relaxed text-gray-100 font-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis eligendi ab obcaecati deleniti hic dolor vero impedit, totam vel voluptatem eveniet quia nulla sequi odio nam iusto praesentium blanditiis neque.</p>
                        <div className="items-center text-center justify-center">
                            <Link href={'/'}>
                                <button className="inline-flex text-black font-bold bg-white border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 hover:text-white transition-all rounded text-lg">Explore</button>
                            </Link>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-3/4">
                        <Image className="object-cover object-center rounded" alt="hero" src={controller} />
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Header
