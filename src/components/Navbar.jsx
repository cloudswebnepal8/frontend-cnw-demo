import React, { useState } from 'react'
import { Navlinks } from '../constants/Navlinks'
import { Link, NavLink } from 'react-router-dom'
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi'
function Navbar() {

    const [open, setOpen] = useState(false)
    return (
        <nav className='bg-green-400 text-white fixed w-full z-1 top-0'>
            <div className='flex justify-between items-center p-2 font-bold'>

                <NavLink className="flex sm:flex-row flex-col justify-center sm:gap-2 items-center" to="/">
                    <img src="/bpic.jpg" alt="" className='sm:h-12 sm:w-12 w-10 h-10' />
                    <h1 className='text-sm'>Ajay Kumar Shrestha</h1>
                </NavLink>

                <button className='sm:hidden bg-white text-black p-2 hover:scale-105 transition duration-300 ease-in-out' onClick={() => setOpen(!open)}>{open ? <HiOutlineX /> : <HiOutlineMenu />}</button>

                <ul className='gap-4 hidden sm:flex '>


                    {
                        Navlinks.map((link, index) => (
                            <li key={index}>
                                <Link to={link.path}>{link.name}</Link>
                            </li>

                        ))
                    }

                </ul>


            </div>

            {
                open &&
                <ul className='sm:hidden absolute text-black space-y-6 px-4 bg-gray-100 w-full'>


                    {
                        Navlinks.map((link, index) => (
                            <li key={index} className='m-6'>
                                <Link to={link.path} onClick={() => setOpen(false)} >{link.name}</Link>
                            </li>

                        ))
                    }

                </ul>

            }
        </nav>
    )
}

export default Navbar