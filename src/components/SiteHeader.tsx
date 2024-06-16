import React, { useEffect, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { IoMenu, IoClose } from 'react-icons/io5';
import logo from '../assets/icon.png';

const SiteHeader = () => {
    const [sticky, setSticky] = useState(false);
    const [open, setOpen] = useState(false);
    const menuLinks = [
        { name: 'Home', to: 'home' },
        { name: 'About', to: 'about' },
        { name: 'Vision', to: 'vision' },
        { name: 'Applications', to: 'applications' },
        { name: 'Contact', to: 'contact' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            window.scrollY > 0 ? setSticky(true) : setSticky(false);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header>
            <nav className={`fixed w-full left-0 top-0 z-[999] ${sticky ? 'border-b border-gray-400 bg-background backdrop-filter backdrop-blur-lg bg-opacity-20' : ''}`}>
                <div className='flex items-center justify-between'>
                    <div className="ml-24 flex items-center">
                        <img src={logo} alt="CVERSE Logo" className="h-10 mr-2" />
                        <h4 className="font-bold text-4xl">
                            <span className="font-STKaiti">C-VERSE</span>
                        </h4>
                    </div>
                    <div className={`${sticky ? 'text-highlight' : ''} lg:block hidden pr-20 py-2 font-medium`}>
                        <ul className="flex items-center gap-1 py-3 text-lg">
                            {menuLinks.map((menu, i) => (
                                <li key={i} className={`hover:text-highlight font-semibold cursor-pointer px-7`}>
                                    <ScrollLink
                                        to={menu.to}
                                        smooth={true}
                                        duration={500}
                                        offset={-70}
                                        activeClass="text-highlight"
                                        className="text-white"
                                    >
                                        {menu.name}
                                    </ScrollLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div onClick={() => setOpen(!open)} className={`z-[999] text-4xl ${open ? 'text-highlight' : ''} lg:hidden m-5`}>
                        {open ? <IoClose /> : <IoMenu />}
                    </div>
                    <div className={`lg:hidden rounded-l-xl ${open ? 'duration-300 text-highlight right-0' : '-right-[100%]'} absolute backdrop-blur-xl border-l border-gray-300 w-1/3 px-7 bg-background py-20 font-medium top-3`}>
                        <ul className='flex flex-col gap-9 justify-center text-lg py-2'>
                            {menuLinks.map((menu, i) => (
                                <li key={i} onClick={() => setOpen(false)} className='px-6 hover:text-highlight'>
                                    <ScrollLink
                                        to={menu.to}
                                        smooth={true}
                                        duration={500}
                                        offset={-70}
                                        activeClass="text-highlight"
                                        className="text-white"
                                    >
                                        {menu.name}
                                    </ScrollLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default SiteHeader;
