import React from 'react';
import HeroImage from '../assets/HeroImage.jpg'

const Hero = () => {
    return ( 
        <div className='bg-black text-white text-center py-20'>
            <img src={HeroImage} alt="HeroImage" 
            className='mx-auto mb-8 w-48 rounded-full object-cover transform transition-transform duration-500 hover:scale-100'
            />
            <h1 className='text-5xl font-bold'>
                I'm
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'> Sulthan Ahmad Ferdiansyah</span>, Frontend Website Developer
            </h1>
            <p className='mt-6 text-lg text-gray-200'>
                I specialize in building modern, responsive, and high-performance websites. Let's create something amazing together!
            </p>
            <div className='mt-3 space-x-10'>
                <button className='bg-gradient-to-r from-green-400 to-blue-500 thext-white md:inline transform fransition-transform duration-400 hover:scale-125 px-5 py-2 rounded-3xl w-32 h-10'>Contact Me</button>
                <button className='bg-gradient-to-r from-green-400 to-blue-500 thext-white md:inline transform fransition-transform duration-400 hover:scale-125 px-5 py-2 rounded-3xl size-32 h-10'>Resume</button>
            </div>
        </div>
     );
}
 
export default Hero;