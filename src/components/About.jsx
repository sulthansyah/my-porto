import React from 'react';
import AboutImage from '../assets/HeroImage.jpg'

const About = () => {
    return ( 
        <div className='bg-black text-white py-20' id='about'>
            <div className='container mx-auto px-10 md:px-16 lg:px-20'>
                <h2 className='text-5xl font-bold text-center mb-12'>About Me</h2>
                <div className='flex flex-col md:flex-row items-center md:space-x-12'>
                    {/* Gambar About */}
                    <img src={AboutImage} alt="" 
                    className='w-96 rounded object-cover mb-10 md:mb-0'/>
                    <div className='flex-col'>
                        {/* Teks About */}
                        <p>
                            Hi, I'm Sulthan Ahmad Ferdiansyah, a passionate Frontend Website Developer with a strong focus on creating modern, responsive, and user-friendly web experiences. I specialize in crafting clean and efficient code using technologies like React, Vue.js, and Tailwind CSS. With a keen eye for design and performance, I strive to build websites that not only look great but also provide seamless user interactions. Let's work together to bring ideas to life through the power of the web!
                        </p>
                        {/* Keahlian */}
                        <div className='space-y-5 py-10'>
                            <div className='flex items-center'>
                                <label htmlFor="htmlcss" className='w-2/12'>HTML & CSS</label>
                                <div className='grow bg-gray-800 rounded-full h-2.5'>
                                    <div className='bg-gradient-to-r from-green-500 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-90/100'>
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center'>
                                <label htmlFor="reactjs" className='w-2/12'>ReactJS</label>
                                <div className='grow bg-gray-800 rounded-full h-2.5'>
                                    <div className='bg-gradient-to-r from-green-500 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-85/100'>
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center'>
                                <label htmlFor="laravel" className='w-2/12'>Laravel</label>
                                <div className='grow bg-gray-800 rounded-full h-2.5'>
                                    <div className='bg-gradient-to-r from-green-500 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-75/100'>
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center'>
                                <label htmlFor="python" className='w-2/12'>Python</label>
                                <div className='grow bg-gray-800 rounded-full h-2.5'>
                                    <div className='bg-gradient-to-r from-green-500 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-65/100'>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Pengalaman */}
                        <div className='mt-12 flex justify-between text-center'>
                            <div>
                                <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500'>Ongoing</h3>
                                <p>Web Development Learning</p>
                            </div>
                            <div>
                                <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500'>50+</h3>
                                <p>Hours Self-Study</p>
                            </div>
                            <div>
                                <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500'>2+</h3>
                                <p>Personal Projects</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default About;