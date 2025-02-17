import React from 'react';

const Navbar = () => {
    return ( 
        <nav className='bg-black text-white px-16 md:px-20 lg:px-24'>
            <div className='container py-4 flex md:justify-between items-center'>
                <div className='text-2xl font-bold hidden md:inline'>Sulthan Ahmad</div>
                <div className='space-x-7'>
                    <a href="#home" className='hover:text-gray-400'>Home</a>
                    <a href="#projects" className='hover:text-gray-400'>Projects</a>
                    <a href="#about" className='hover:text-gray-400'>About Me</a>
                    <a href="#contact" className='hover:text-gray-400'>Contact</a>
                </div>
                <button className='bg-gradient-to-r from-green-400 to-blue-500 thext-white md:inline transform fransition-transform duration-400 hover:scale-110 px-5 py-2 rounded-3xl'>Hire Me!</button>
            </div>
        </nav>
     );
}
 
export default Navbar;