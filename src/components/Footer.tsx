import { Cube, Envelope, FacebookLogo, House, InstagramLogo, Phone } from 'phosphor-react';
import React from 'react';

import logoImage from '../assets/logo.png';

export function Footer() {
    return (
        <footer className='text-center text-base bg-gray-900'>
            <section className='flex justify-center p-4 border-b gap-2'>
                <div className='me-5 d-none d-lg-block'>
                    <span>Nos encontre nas redes sociais:</span>
                </div>

                <div className="flex gap-1">
                    <a href='' className='me-4 text-reset'>
                        <FacebookLogo size={24} className='text-gray-500 hover:text-gray-300' />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <InstagramLogo size={24} className='text-gray-500 hover:text-gray-300' />
                    </a>
                </div>
            </section>

            <section className='flex'>
                <div className='container text-left mt-5'>
                    <div className='flex mt-3'>
                        <div className='flex flex-col mx-auto mb-4 w-1/3'>
                            <div className="flex items-center mb-4 gap-2">
                                <Cube size={35} className="text-green-500 hover:text-green-300 hover:animate-spin-slow" />
                                <img className="w-[12rem]"  src={logoImage} alt="logo image" />
                            </div>
                            <p className="md:text-sm">
                                Nós da Demolidora Baltazar estamos aqui dispostos a fazer o melhor pelo nossos clientes.
                                A Demolidora Baltazar está no mercado a 19 anos a fim de fazer seus trabalhos com rapidez segurança e qualidade.
                            </p>
                        </div>


                        <div className='flex flex-col mx-auto mb-4 text-left gap-1'>
                            <h6 className='uppercase font-bold mb-4'>Contact</h6>
                            <a href="" className="flex items-center no-underline md:text-sm">
                                <House size={24} /> New York, NY 10012, US
                            </a>
                            <a href="" className="flex items-center no-underline md:text-sm">
                                <Envelope size={24} />
                                info@example.com
                            </a>
                            <a href="" className="flex items-center no-underline md:text-sm">
                                <Phone size={24} /> + 01 234 567 88
                            </a>
                            <a href="" className="flex items-center md:text-sm">
                                <Phone size={24} /> + 01 234 567 89
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="flex justify-center text-center p-4 bg-black text-gray-200 gap-1 md:text-xs md:flex-col">
                <p>© 2022 Demolidora Baltazar. Todos os direitos reservados. </p>
                <p>
                    Desenvolvido por <a href="https://github.com/rafaalmeida1" target="_blank" rel="noreferrer" className="hover:text-gray-400 transition-all">Rafael Almeida</a>
                </p>
            </div>
        </footer>
    );
}