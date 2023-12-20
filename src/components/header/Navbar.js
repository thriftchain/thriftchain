import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import { Link, NavLink } from "react-router-dom";
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react';
import menu from "../../assets/menu.svg";
import { AiOutlineClose } from 'react-icons/ai';






const Navbar = () => {

    const [showMobileNav, setShowMobileNav] = useState(false);

    const handleMobileMenu = () => {
        setShowMobileNav((o) => !o);
    };

    return (
        <nav class="bg-[#070624]">
            <div className='fixed top-0 right-0 left-0 bg-gradient z-50'>
                <div className='flex gap-4 justify-center items-center mx-8 pt-10'>
                    <Link to='/'> <img src={logo} alt='logo' class='w-40' /></Link>


                    <ul className='flex m-auto gap-20'>
                        <li className='hidden md:inline-block text-white '><Link to='/'>Home</Link></li>
                        <li className='hidden md:inline-block  text-white'><Link to='/about-us'>About us</Link></li>

                    </ul>
                    <Menu as="div" className="relative inline-block text-left">
                        <div>
                            <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-[#DBE1D4] px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">


                            </Menu.Button>
                        </div>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-[#DBE1D4] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="py-1">
                                    <ul>

                                        <Menu.Item>
                                            <li>
                                                <Link
                                                    to='/'

                                                >
                                                    Home
                                                </Link>
                                            </li>
                                        </Menu.Item>
                                        <Menu.Item>
                                            <l1>
                                                <Link
                                                    to='/about-us'

                                                >
                                                    About us
                                                </Link>
                                            </l1>
                                        </Menu.Item>

                                    </ul>
                                </div>

                            </Menu.Items>
                        </Transition>
                    </Menu>
                    {/* Mobile Hamburger Menu */}
                    <div className='tab:hidden'>
                        <button onClick={handleMobileMenu}>
                            <img src={menu} alt='menu' />
                        </button>
                    </div>
                </div>


            </div>
            {/* Mobile Menu */}
            {showMobileNav && (
                <div className='py-9 px-11 tab:hidden fixed bg-[#150E28] w-full min-h-screen top-0 z-50'>
                    <div
                        className='flex justify-end mb-14'
                        onClick={() => setShowMobileNav(false)}
                    >
                        <AiOutlineClose
                            size={23}
                            className='border rounded-full border-purple-50 px-1'
                        />
                    </div>
                    <nav>
                        <ul className='flex flex-col gap-6 sm:gap-8 text-lg'>
                            <li>
                                <NavLink
                                    href='/'
                                    onClick={handleMobileMenu}
                                    className='cursor-pointer text-white'
                                >
                                    Home
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    href='/about-us'
                                    onClick={handleMobileMenu}
                                    className='cursor-pointer text-white'
                                >
                                    About us
                                </NavLink>
                            </li>


                        </ul>
                    </nav>

                </div>
            )}



        </nav>
    );
};

export default Navbar;