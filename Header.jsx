import React from 'react';
import { NavLink, Link } from 'react-router-dom';

function Header() {
    return (
        <header className='bg-gray-800 p-4 text-white shadow-md fixed w-full top-0 z-50'>
            <nav className='bg-gray-900 border-gray-700 px-4 lg:px-6 py-2.5'>
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="Home" className="flex items-center">
                        <img
                            src="logo.webp"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <Link
                            to="Login"
                            className="text-gray-300 hover:bg-gray-700 focus:ring-4 focus:ring-gray-600 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log in
                        </Link>
                        <Link
                            to="signup"
                            className="text-white bg-orange-600 hover:bg-orange-700 focus:ring-4 focus:ring-orange-400 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Get started
                        </Link>
                    </div>

                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    to="/Home"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-700 hover:bg-gray-700 lg:hover:bg-transparent lg:border-0 hover:text-orange-500 lg:p-0 ${isActive ? "text-orange-500" : "text-gray-300"}`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/Search"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-700 hover:bg-gray-700 lg:hover:bg-transparent lg:border-0 hover:text-orange-500 lg:p-0 ${isActive ? "text-orange-500" : "text-gray-300"}`
                                    }
                                >
                                    Search
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/recipe-list"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-700 hover:bg-gray-700 lg:hover:bg-transparent lg:border-0 hover:text-orange-500 lg:p-0 ${isActive ? "text-orange-500" : "text-gray-300"}`
                                    }
                                >
                                    Recipe List
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
