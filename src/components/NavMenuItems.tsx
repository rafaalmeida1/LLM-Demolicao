import { House, Phone, ShoppingBag, UserList, X } from 'phosphor-react';
import { NavLink } from 'react-router-dom';

//Menu responsivo

interface NavMenuItemsProps {
    showMenu: () => void;
    active: boolean;
}

export const NavMenuItems = ({ showMenu, active }: NavMenuItemsProps) => {
    const path = window.location.pathname;

    return (
        <ul className={active ? 'p-3 rounded-lg border flex-col justify-between flex fixed z-10 right-5 top-[4.5rem] uppercase bg-gray-900 gap-5 minLg:hidden' : 'hidden'}>
            <div className="flex gap-3">
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
            </div>

            <div className="flex justify-center">
                <a
                    href='https://api.whatsapp.com/send?phone=5519992864222&text=Tenho%20interesse%20em%20seus%20servi%C3%A7os%20de%20Desenvolvimento. '
                    className={` flex justify-center items-center bg-gray-100 text-gray-900 border border-gray-100 
                    hover:bg-gray-900 hover:text-green-500  
                    h-[3rem] w-[7rem] rounded-lg  transition-colors duration-100`}
                    target="_blank"
                >
                    <ShoppingBag size={24} />
                </a>
            </div>
        </ul>
    );
}