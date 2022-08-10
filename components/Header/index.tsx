import Link from "next/link";
import { useState } from "react";

export const Navbar = () => {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };

    return (
        <>
            <nav className=" flex flex-wrap items-center p-2 bg-gradient-to-l from-blue-400 via-teal-400 to-emerald-400">
                <Link href="/">
                    <a className="inline-flex items-center p-2 mr-4 ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="white" stroke-width="2.5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="text-xl font-bold tracking-wide text-white uppercase">
                            Photofolio
                        </span>
                    </a>
                </Link>
                <button
                    className="inline-flex p-3 ml-auto text-white rounded outline-none hover:bg-green-600 lg:hidden hover:text-white"
                    onClick={handleClick}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>

                <div
                    className={`${active ? "" : "hidden"
                        }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
                >
                    <div className="flex flex-col items-start w-full mt-2 mb-2 lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto lg:items-center lg:h-auto">
                        <Link href="/">
                            <a className="items-center justify-center w-full px-3 py-2 font-bold text-white rounded lg:inline-flex lg:w-auto hover:underline underline-offset-8 hover:text-white">
                                Home
                            </a>
                        </Link>
                        <Link href="/gallery">
                            <a className="items-center justify-center w-full px-3 py-2 font-bold text-white rounded lg:inline-flex lg:w-auto hover:underline underline-offset-8 hover:text-white">
                                Gallery
                            </a>
                        </Link>
                        <Link href="/about">
                            <a className="items-center justify-center w-full px-3 py-2 font-bold text-white rounded lg:inline-flex lg:w-auto hover:underline underline-offset-8 hover:text-white">
                                About us
                            </a>
                        </Link>
                        <Link href="/contact">
                            <a className="items-center justify-center w-full px-3 py-2 font-bold text-white rounded lg:inline-flex lg:w-auto hover:underline underline-offset-8 hover:text-white">
                                Contact
                            </a>
                        </Link>
                    </div>
                    <div className="flex flex-col items-center w-full mt-2 mb-2 lg:inline-flex lg:flex-row lg:ml-3 lg:w-auto lg:items-center lg:h-auto">
                        <Link href="/login">
                            <button className="items-center justify-center w-full px-3 py-2 font-bold text-green-600 rounded lg:inline-flex lg:w-auto bg-gradient-to-b from-gray-100 to-gray-300 hover:opacity-75">Login
                            </button>
                        </Link>
                    </div>
                    <div className="flex flex-col items-center w-full mt-2 mb-2 lg:inline-flex lg:flex-row lg:ml-3 lg:w-auto lg:items-center lg:h-auto">
                        <Link href="/register">
                            <button className="items-center justify-center w-full px-3 py-2 font-bold text-white rounded lg:inline-flex lg:w-auto bg-gradient-to-b from-green-400 to-green-600 hover:opacity-75">Register
                            </button>
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    );
};