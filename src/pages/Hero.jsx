import React from 'react'

function Hero() {
    return (
        <div className='flex min-h-screen sm:flex-row flex-col-reverse gap-4 items-center justify-between m-4'>

            {/* left content s  */}
            <div className=' sm:max-w-4xl flex flex-col gap-4 sm:px-20 px-4'>


                {/* text contents  */}
                <div className='flex flex-col gap-4 text-center'>

                    <h1 className='text-green-400 uppercase font-bold sm:text-2xl'>Ajay Kumar Shrestha</h1>
                    <h2 className='text-xl text-green-300 font-semibold'>Full Stack Developer</h2>
                    <p className='text-gray-600 leading-8 text-justify text-sm sm:text-xl'>I build intelligent, secure, and scalable web and mobile applications by combining modern software engineering, AI integration and efficient system design. I specialize in transforming complex ideas into user-friendly, high-performance digital solutions using modern web and app technologies. My focus is on developing innovative, reliable, and future-ready applications that deliver seamless user experiences and strong security.</p>

                </div>

                {/* buttons  */}
                <div className='flex gap-4 justify-center'>
                    <button className='bg-green-400 text-white py-2 px-4 rounded hover:bg-green-500 transition duration-300 ease-in-out'>Download CV</button>
                    <button className='bg-white text-green-400 py-2 px-4 rounded border border-green-400 hover:bg-green-100 transition duration-300 ease-in-out'>Contact Me</button>
                </div>



            </div>

            {/* right content  */}
            <div>
                <img src="/bpic.jpg" alt="" className='sm:h-90 rounded-full sm:w-90 h-60 w-60 mt-25 sm:mt-0' />
            </div>

        </div>
    )
}

export default Hero