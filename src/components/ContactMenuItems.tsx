import { RocketLaunch, X } from "phosphor-react";
import { useNavigate } from "react-router-dom";

interface ContactMenuProps {
    contactMenuActive: boolean;
    onShowContactMenu: () => void;
}

export const ContactMenuItems = ({ contactMenuActive, onShowContactMenu }: ContactMenuProps) => {
    const navigate = useNavigate();

    function handleSubmitContact(){
        onShowContactMenu();

        navigate('/');

        const name = document.getElementById('name') as HTMLInputElement;
        const email = document.getElementById('email') as HTMLInputElement;
        const subject = document.getElementById('message') as HTMLInputElement;
        const telephone = document.getElementById('telephone') as HTMLInputElement;
        const message = document.getElementById('message') as HTMLInputElement;

        name.value = '';
        email.value = '';
        subject.value = '';
        telephone.value = '';
        message.value = '';
    }

    return (
        <form onSubmit={handleSubmitContact} action="https://app.us18.list-manage.com/subscribe/post?u=77607056527c427bdce6ecf42&amp;id=bff1a8cb0b"
            method="post"
            id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank" noValidate
            className={
                contactMenuActive
                    ? 'opacity-100 z-20 fixed right-0 top-0 p-3 pl-7 pr-7 transition-all duration-300 bg-gray-700 border-l-4 border-gray-500 rounded-lg h-screen'
                    : 'opacity-0 z-[-1] fixed right-[-5rem] top-0 p-3 transition-all duration-300 h-screen'
            }>
            <div className="flex flex-col relative">
                <div className="flex flex-col gap-3 relative">
                    <X
                        onClick={onShowContactMenu}
                        size={30}
                        className="absolute right-0 text-gray-100 cursor-pointer"
                    />
                    <div className="absolute left-[-5000px] z-[-1]" aria-hidden="true"><input type="text" name="b_77607056527c427bdce6ecf42_bff1a8cb0b" value=""/></div>
                    <input id="name" type="text" name="NAME" className="flex-1 text-gray-900 border-2 border-gray-100 rounded-lg p-2 mt-[7rem]" placeholder="Nome" required />
                    <input id="email" type="email" name="EMAIL" className="flex-1 text-gray-900 border-2 border-gray-100 rounded-lg p-2" placeholder="Email" required />
                    <input id="subject" type="text" name="SUBJECT" className="flex-1 text-gray-900 border-2 border-gray-100 rounded-lg p-2" placeholder="Assunto" />
                    <input id="telephone" type="number" name="TELEPHONE" className="flex-1 text-gray-900 border-2 border-gray-100 rounded-lg p-2" placeholder="Telefone" />
                    <textarea id="message" name="MESSAGE" className="flex-1 text-gray-900 border-2 border-gray-100 rounded-lg p-2 resize-none" placeholder="Mensagem" required />
                    <RocketLaunch size={60} className="absolute top-[26.5rem] right-[4.5rem] animate-pulse text-green-600" weight="duotone" />
                </div>


                <button
                    name="subscribe"
                    className="mt-[7rem] bg-gradient-to-r from-green-600 to-green-700 p-3 rounded-lg
                    hover:bg-gradient-to-r hover:from-green-700 hover:to-green-600 transition-colors duration-300
                ">
                    Envie
                </button>
            </div>
        </form>
    )
}