import React from "react";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";





const Navbar = () => {


    return (
        <nav class="bg-[#070624]">
            <div className='flex gap-4 justify-center items-center mx-8 pt-10'>
               <Link to='/'> <img src={logo} alt='logo' /></Link>


                <ul className='flex m-auto gap-20'>
                    <li className='hidden md:inline-block text-white '><Link to='/'>Home</Link></li>
                    <li className='hidden md:inline-block  text-white'><Link to='/about-us'>About us</Link></li>

                </ul>

            </div>

            <hr />

        </nav>
    );
};

export default Navbar;