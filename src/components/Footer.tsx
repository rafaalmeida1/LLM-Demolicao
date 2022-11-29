import { Cube, Envelope, FacebookLogo, House, InstagramLogo, Phone } from 'phosphor-react';
import React from 'react';

import logoImage from '../assets/logo.png';

export function Footer() {
    return (
        <footer className='text-center text-base bg-gray-900'>

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
                                A Demolidora Baltazar está a fim de fazer seus trabalhos com comprometimento, eficiência e segurança.
                            </p>
                        </div>


                        <div className='flex flex-col mx-auto mb-4 text-left gap-1'>
                            <h6 className='uppercase font-bold mb-4'>Contato</h6>
                            <a 
                                href="https://www.google.com.br/maps/place/Rua+Lincoln+Claudino+Gomes+Júnior,+141+-+Parque+da+Figueira,+Campinas+-+SP,+13040-230/@-22.9502667,-47.0643316,17z/data=!3m1!4b1!4m5!3m4!1s0x94c8c94b1c32ee01:0x117181a3d4d01cb1!8m2!3d-22.9502717!4d-47.0598416" 
                                className="flex items-center no-underline md:text-sm">
                                <House size={24} /> Pq da Figueira, Campinas, BR
                            </a>
                            <a 
                                href="mailto:llm.baltazar@gmail.com" 
                                className="flex items-center no-underline md:text-sm">
                                <Envelope size={24} />
                                llm.baltazar@gmail.com
                            </a>
                            <a href="tel:+5519989656856" className="flex items-center no-underline md:text-sm">
                                <Phone size={24} /> +55 19 98965-6856
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="flex flex-col justify-center text-center p-4 bg-black text-gray-200 gap-1 md:text-xs md:flex-col">
                <p>© 2022 Demolidora Baltazar. Todos os direitos reservados. </p>
                <p>
                    Desenvolvido por <a href="https://github.com/rafaalmeida1" target="_blank" rel="noreferrer" className="hover:text-gray-400 transition-all">Rafael Almeida</a>
                </p>
                <p>CNPJ: 07.613.744/0001-20</p>
            </div>
        </footer>
    );
}