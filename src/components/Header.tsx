import { Cube, House, List, Phone, ShoppingBag, UserList, X } from "phosphor-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ContactMenuItems } from "./ContactMenuItems";
import { NavMenuItems } from "./NavMenuItems";

export function Header() {
    const path = window.location.pathname;

    const [menuActive, setMenuActive] = useState(false);
    const [contactMenuActive, setContactMenuActive] = useState(false);

    const showMenu = () => {
        setMenuActive(!menuActive);
    }

    const showContactMenu = () => {
        setContactMenuActive(!contactMenuActive);
    }

    return (
        <div className="p-3 bg-gray-700 border-b border-gray-600">
            <header className="max-w-[1110px] flex items-center justify-between pt-2 pb-1 mx-auto">
                <NavLink
                    to='/'
                    className={` text-white hover:text-gray-200 transition-colors duration-75`}
                >
                    <Cube size={40} className="text-green-500 hover:text-green-300 hover:animate-spin-slow" />
                </NavLink>

                <div>
                    {!menuActive ?
                        <div className="absolute right-6 z-20 top-5 cursor-pointer minLg:hidden">
                            <List size={40} onClick={showMenu} name="menu" />
                        </div>
                        :
                        <div className="absolute right-6 z-20 top-5 cursor-pointer minLg:hidden">
                            <X size={40} onClick={showMenu} name="close" />
                        </div>
                    }

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

                        <NavLink
                            to='/about'
                            className={` flex justify-center items-center bg-gray-100 text-gray-900 hover:bg-gray-900 hover:border hover:border-gray-100 hover:text-gray-100 h-[2.75rem] w-[2.75rem] rounded-lg  transition-colors duration-300`}
                            style={path === '/about' ? {
                                backgroundColor: '#121214',
                                borderColor: '#E1E1E6',
                                borderWidth: '1px',
                                color: '#E1E1E6'
                            } : {}}
                        >
                            <UserList size={24} />
                        </NavLink>

                        {!contactMenuActive ?
                            <div 
                            onClick={showContactMenu}
                            className="flex justify-center items-center bg-gray-100 text-gray-900 border border-gray-100 cursor-pointer
                            hover:bg-gray-900 hover:text-gray-100 h-[2.75rem] w-[2.75rem] rounded-lg  transition-colors duration-300"
                            >
                                <Phone size={24}  name="contact" />
                            </div>
                            :
                            <div 
                            className="flex justify-center items-center bg-gray-900 text-gray-100 border border-gray-100 cursor-pointer
                            hover:opacity-70 h-[2.75rem] w-[2.75rem] rounded-lg  transition-colors duration-300"
                            >
                                <Phone size={24} name="contact" />
                            </div>
                        }
                        <a
                            href='https://api.whatsapp.com/send?phone=5519992864222&text=Tenho%20interesse%20em%20seus%20servi%C3%A7os%20de%20Desenvolvimento. '
                            className={` flex justify-center items-center bg-gray-100 text-gray-900 border border-gray-100 
                            hover:bg-gray-900 hover:text-green-500  
                            h-[2.75rem] w-[5rem] rounded-lg  transition-colors duration-100
                            lg:w-[2.75rem]`}
                            target="_blank"
                        >
                            <ShoppingBag size={24} />
                        </a>
                    </ul>

                    <NavMenuItems menuActive={menuActive} onShowContactMenu={showContactMenu} contactMenuActive={contactMenuActive} />
                    <ContactMenuItems contactMenuActive={contactMenuActive} onShowContactMenu={showContactMenu} />
                </div>
            </header>
        </div>
    )
}