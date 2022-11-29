import { Cube, House, Image, List, Phone, ShoppingBag, X } from "phosphor-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { NavMenuItems } from "./NavMenuItems";

import logoImage from '../assets/logo.png';
import { MenuHamburguer } from "./MenuHamburguer";

export function Header() {
    const path = window.location.pathname;

    const [menuActive, setMenuActive] = useState(false);

    const showMenu = () => {
        setMenuActive(!menuActive);
    }

    return (
        <div className="p-3 bg-gray-700 border-b border-gray-600">
            <header className="max-w-[1110px] flex items-center justify-between pt-2 pb-1 mx-auto">
                <NavLink
                    to='/'
                    className={` flex gap-3 text-white hover:text-gray-200 transition-colors duration-75`}
                >
                    <Cube size={40} className="text-green-500 hover:text-green-300 hover:animate-spin-slow" />
                    <img className="w-[12rem] hover:opacity-80" src={logoImage} alt="logo image" />
                </NavLink>

                <div>
                    <div className="absolute right-6 z-20 top-7 cursor-pointer minLg:hidden">
                        <MenuHamburguer showMenu={showMenu} menuActive={menuActive} />
                    </div>

                    <ul className="hidden minLg:flex minLg:gap-3 group">
                        <NavLink
                            to='/'
                            className={` flex justify-center items-center bg-gray-100 text-gray-900 hover:bg-gray-900 hover:border hover:border-gray-100 hover:text-gray-100 h-[2.75rem] w-[2.75rem] rounded-lg  transition-colors duration-300`}
                            style={path === '/' ? {
                                backgroundColor: '#121214',
                                borderColor: '#E1E1E6',
                                borderWidth: '1px',
                                color: '#E1E1E6'
                            } : {}}
                        >
                            <House size={24} />
                        </NavLink>

                        <a href="tel:+5519992864222"
                            className="flex justify-center items-center bg-gray-100 text-gray-900 border border-gray-100 cursor-pointer
                            hover:bg-gray-900 hover:text-gray-100 h-[2.75rem] w-[2.75rem] rounded-lg  transition-colors duration-300"
                        >
                            <Phone size={24} name="contact" />
                        </a>
                        {/* <a href="tel:+5519989656856"
                            className="flex justify-center items-center bg-gray-100 text-gray-900 border border-gray-100 cursor-pointer
                            hover:bg-gray-900 hover:text-gray-100 h-[2.75rem] w-[2.75rem] rounded-lg  transition-colors duration-300"
                        >
                            <Phone size={24} name="contact" />
                        </a> */}



                        <a
                            href='https://api.whatsapp.com/send?phone=5519989656856&text=Ol%C3%A1%2C%20Fiquei%20interessado%20em%20seus%20servi%C3%A7os%20de%20demoli%C3%A7%C3%A3o%2C%20e%20queria%20fazer%20um%20or%C3%A7amento%20sem%20compromisso.'
                            className={` flex justify-center items-center bg-gray-100 text-gray-900 border border-gray-100 
                            hover:bg-gray-900 hover:text-green-500  
                            h-[2.75rem] w-[5rem] rounded-lg  transition-colors duration-100
                            lg:w-[2.75rem]`}
                            target="_blank"
                        >
                            <ShoppingBag size={24} />
                        </a>
                    </ul>

                    <NavMenuItems menuActive={menuActive} />
                </div>
            </header>
        </div>
    )
}