import { Cube, House, List, Phone, ShoppingBag, UserList, X } from "phosphor-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { NavMenuItems } from "./NavMenuItems";

export function Header() {
    const path = window.location.pathname;

    const [active, setActive] = useState(false);

    const showMenu = () => {
        setActive(!active);
    }

    return (
        <div className="p-3">
            <header className="max-w-[1110px] flex items-center justify-between pt-2 pb-4 mx-auto">
                <NavLink
                    to='/'
                    className={` text-white hover:text-gray-200 transition-colors duration-75`}
                >
                    <Cube size={48} className="text-green-500 hover:text-green-300 hover:animate-spin-slow" />
                </NavLink>

                <div>
                    {!active ?
                        <div className="absolute right-6 z-20 top-5 cursor-pointer minLg:hidden ">
                            <List size={40} onClick={showMenu} />
                        </div>    
                        :
                        <div className="absolute right-6 z-20 top-5 cursor-pointer minLg:hidden ">
                            <X size={40} onClick={showMenu} />
                        </div>
                    }

                    <ul className="hidden minLg:flex minLg:gap-3 group">
                        <NavLink
                            to='/'
                            className={` flex justify-center items-center bg-gray-100 text-gray-900 hover:bg-gray-900 hover:border hover:border-gray-100 hover:text-gray-100 h-[3rem] w-[3rem] rounded-lg  transition-colors duration-300`}
                            style={path === '/' ? {
                                backgroundColor: '#09090A',
                                borderColor: '#E1E1E6',
                                borderWidth: '1px',
                                color: '#E1E1E6'
                            } : {}}
                        >
                            <House size={24} />
                        </NavLink>

                        <NavLink
                            to='/about'
                            className={` flex justify-center items-center bg-gray-100 text-gray-900 hover:bg-gray-900 hover:border hover:border-gray-100 hover:text-gray-100 h-[3rem] w-[3rem] rounded-lg  transition-colors duration-300`}
                            style={path === '/about' ? {
                                backgroundColor: '#09090A',
                                borderColor: '#E1E1E6',
                                borderWidth: '1px',
                                color: '#E1E1E6'
                            } : {}}
                        >
                            <UserList size={24} />
                        </NavLink>

                        <NavLink
                            to='/contact'
                            className={` flex justify-center items-center bg-gray-100 text-gray-900 hover:bg-gray-900 hover:border hover:border-gray-100 hover:text-gray-100 h-[3rem] w-[3rem] rounded-lg  transition-colors duration-300`}
                            style={path === '/contact' ? {
                                backgroundColor: '#09090A',
                                borderColor: '#E1E1E6',
                                borderWidth: '1px',
                                color: '#E1E1E6',
                            } : {}}
                        >
                            <Phone size={24} />
                        </NavLink>

                        <a
                            href='https://api.whatsapp.com/send?phone=5519992864222&text=Tenho%20interesse%20em%20seus%20servi%C3%A7os%20de%20Desenvolvimento. '
                            className={` flex justify-center items-center bg-gray-100 text-gray-900 border border-gray-100 
                            hover:bg-gray-900 hover:text-green-500  
                            h-[3rem] w-[5rem] rounded-lg  transition-colors duration-100
                            lg:w-[3rem]`}
                            target="_blank"
                        >
                            <ShoppingBag size={24} />
                        </a>
                    </ul>

                    <NavMenuItems showMenu={showMenu} active={active} />
                </div>
            </header>
        </div>
    )
}