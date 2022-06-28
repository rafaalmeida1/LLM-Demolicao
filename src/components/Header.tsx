import { House, Phone, ShoppingBag, UserList } from "phosphor-react";
import { NavLink, useParams } from "react-router-dom";

export function Header() {
    return (
        <div className="p-3">
            <header className="max-w-[1110px] flex items-center justify-between pt-2 pb-4 mx-auto">
                <NavLink
                    to='/'
                    className={` text-white hover:text-gray-200 transition-colors duration-75`}
                >
                    <h2 className="text-4xl">Header</h2>
                </NavLink>

                <div className="flex gap-3 group">
                    <NavLink
                        to='/'
                        className={` flex justify-center items-center bg-gray-50 text-gray-900 hover:bg-gray-900 hover:border hover:border-gray-50 hover:text-gray-50 h-[3rem] w-[3rem] rounded-lg  transition-colors duration-300`}
                    >
                        <House size={24} />
                    </NavLink>

                    <NavLink
                        to='/about'
                        className={` flex justify-center items-center bg-gray-50 text-gray-900 hover:bg-gray-900 hover:border hover:border-gray-50 hover:text-gray-50 h-[3rem] w-[3rem] rounded-lg  transition-colors duration-300`}
                    >
                        <UserList size={24} />
                    </NavLink>

                    <NavLink
                        to='/contact'
                        className={` flex justify-center items-center bg-gray-50 text-gray-900 hover:bg-gray-900 hover:border hover:border-gray-50 hover:text-gray-50 h-[3rem] w-[3rem] rounded-lg  transition-colors duration-300`}
                    >
                        <Phone size={24} />
                    </NavLink>

                    <a
                        href='https://api.whatsapp.com/send?phone=5519992864222&text=Tenho%20interesse%20em%20seus%20servi%C3%A7os%20de%20Desenvolvimento. '
                        className={` flex justify-center items-center bg-gray-90 text-gray-50 border border-gray-50 hover:bg-gray-50 hover:border hover:text-gray-900 h-[3rem] w-[5rem] rounded-lg  transition-colors duration-300`}
                        target="_blank"
                    >
                        <ShoppingBag size={24} />
                    </a>
                </div>
            </header>
        </div>
    )
}
