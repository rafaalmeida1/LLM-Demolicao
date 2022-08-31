import { CaretCircleDoubleDown, Cube } from "phosphor-react";
import { ButtonScroll } from "../components/ButtonScroll";
import { Header } from "../components/Header";

import { motion, useTransform, useViewportScroll } from 'framer-motion';

import staticImage from '../assets/staticImage.png'
import { Footer } from "../components/Footer";
import { ImageSlider } from "../components/ImageSlider";
import { useRef } from "react";
import { LocaleMaps } from "../components/LocaleMap";

export function Home() {

    function changeTextBLeftSide() {
        let text: HTMLElement = document.querySelector('#h2-service') as HTMLElement
        let buttonAccept: HTMLElement = document.querySelector('#button-accept-service') as HTMLElement
        let buttonReject: HTMLButtonElement = document.querySelector('#button-reject-service') as HTMLButtonElement

        setTimeout(() => {
            text.innerText = 'É uma pena, mas espero que encontre o que procura!'
            buttonAccept.innerText = 'Mudei de idéia';
            buttonAccept.id = 'button-service-active';
            buttonReject.id = 'button-service-disabled'
        }, 300);
    }

    const constraintsRef = useRef<any>(null);

    const { scrollYProgress } = useViewportScroll();

    const imageSectionContactOpacity = useTransform(scrollYProgress, [0.186, 0.236], [0, 1]);
    const textSectionContactOpacity = useTransform(scrollYProgress, [0.186, 0.236], [0, 1]);

    const buttonAcceptContactX = useTransform(scrollYProgress, [0.186, 0.236], [-40, 0]);
    const buttonAcceptContactOpacity = useTransform(scrollYProgress, [0.186, 0.236], [0, 1]);
    const buttonRejectContactX = useTransform(scrollYProgress, [0.186, 0.236], [40, 0]);
    const buttonRejectContactOpacity = useTransform(scrollYProgress, [0.186, 0.236], [0, 1]);

    const titleHomePageOpacity = useTransform(scrollYProgress, [0, 0.230], [1, 0]);

    const pHomePageOpacity = useTransform(scrollYProgress, [0, 0.240], [1, 0]);

    const buttonHomePageOpacity = useTransform(scrollYProgress, [0, 0.236], [1, 0]);

    const textSectionMapsOpacity = useTransform(scrollYProgress, [0.186, 0.236], [0, 1]);
    const pSectionMapsOpacity = useTransform(scrollYProgress, [0.186, 0.236], [0, 1]);
    const buttonSectionMapsOpacity = useTransform(scrollYProgress, [0.186, 0.236], [0, 1]);


    return (
        <>
            <Header />
            {/* Section 1 Presentation */}
            <div className="bg-blur min-h-screen bg-cover bg-center bg-no-repeat bg-fixed md:pb-3">
                <div className="flex flex-col items-center justify-items-center md:pt-[10rem] pt-[15rem] p-3">
                    <motion.div ref={constraintsRef}>
                        <motion.div drag dragConstraints={constraintsRef} whileTap={{ cursor: "grabbing" }} className="cursor-grab">
                            <Cube weight="duotone" size={90} className="text-green-500 animate-spin-slow" />
                        </motion.div>
                    </motion.div>

                    <motion.strong
                        style={{
                            opacity: titleHomePageOpacity,
                        }}
                        initial={{ x: 300, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -300, opacity: 0 }}
                        transition={{ duration: 1 }}
                        className="text-3xl md:text-2xl text-center">
                        Comprometimento, Eficiência e Segurança
                    </motion.strong>
                    <motion.p
                        style={{
                            opacity: pHomePageOpacity,
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        className="text-gray-100 text-center mt-5 text contrast-200">Venha adquirir um serviço de demolição de qualidade e segurança.
                    </motion.p>

                    <motion.a
                        style={{
                            opacity: buttonHomePageOpacity,
                        }}
                        href="https://api.whatsapp.com/send?phone=5519989656856&text=Ol%C3%A1%2C%20quero%20saber%20mais%20a%20respeito%20dos%20seus%20servi%C3%A7os%20de%20demoli%C3%A7%C3%A3o!"
                        className="
                        flex justify-center border border-green-500 items-center mt-7 h-[4rem] w-[10rem] rounded-tl-3xl rounded-br-3xl bg-gradient-to-r from-green-300 to-green-700 transition-all duration-300    
                        hover:rounded-tr-3xl hover:rounded-bl-3xl 
                        hover:bg-gradient-to-r hover:from-gray-900 hover:to-gray-500  
                        hover:border hover:border-white hover:text-white
                        hover:rounded-tl-none hover:rounded-br-none
                        "
                        target="_blank"
                    >
                        SAIBA MAIS
                    </motion.a>
                </div>
            </div>

            <div className="mt-[-7rem] flex justify-center">
                <CaretCircleDoubleDown size={34} className="animate-bounce" />
            </div>


            {/* Section 2 Second Contact */}
            <div className="min-h-screen md:min-h-fit md:pb-6 mt-[5rem]">
                <motion.div className="flex items-center justify-center w-auto gap-5">
                    <motion.div className="flex flex-col items-center gap-5">
                        <motion.h2
                            style={{
                                opacity: textSectionContactOpacity
                            }}
                            id="h2-service" className="md:text-xl text-3xl font-bold text-gray-900 md:mt-0 mt-10 text-center">Você gostaria de um serviço de demolição<br />de segurança e qualidade</motion.h2>

                        <div className="flex gap-3">
                            <motion.a
                                style={{
                                    x: buttonAcceptContactX,
                                    opacity: buttonAcceptContactOpacity
                                }}
                                id="button-accept-service"
                                className="flex justify-center items-center bg-gray-900 border text-gray-100 hover:bg-transparent hover:border border-gray-900 hover:text-gray-900 h-[2.75rem] w-[2.75rem] rounded-lg transition-colors duration-300"
                                href="https://api.whatsapp.com/send?phone=5519992864222&text=Ol%C3%A1%2C%20Eu%20tenho%20interesse%20em%20seus%20servi%C3%A7os%20de%20demoli%C3%A7%C3%A3o"
                                target="_blank"
                            >
                                Sim
                            </motion.a>
                            <motion.button
                                style={{
                                    x: buttonRejectContactX,
                                    opacity: buttonRejectContactOpacity
                                }}
                                onClick={changeTextBLeftSide}
                                id="button-reject-service"
                                className="flex justify-center items-center bg-gray-900 border text-gray-100 hover:bg-transparent hover:border border-gray-900 hover:text-gray-900 h-[2.75rem] w-[2.75rem] rounded-lg transition-colors duration-300">
                                Não
                            </motion.button>
                        </div>
                    </motion.div>

                    <motion.img style={{ opacity: imageSectionContactOpacity }} src={staticImage} className="w-[40vw] h-[80vh] md:w-[50%] md:h-auto md:mt-10 mt-20" />
                </motion.div>
            </div>

            {/* Section 3 ScrollImages */}
            <div className="min-h-screen md:min-h-fit md:pb-6 bg-gray-200">
                <ImageSlider />
            </div>

            {/* Section 4 Maps */}
            <div className="w-full min-h-screen md:min-h-fit p-6 bg-gray-700"> 
                <div className="flex justify-center items-center flex-col">
                    <motion.h2
                        style={{
                            opacity: textSectionMapsOpacity
                        }}
                        id="h2-maps" className="md:text-2xl text-3xl font-bold text-green-500 md:mt-0 mt-10 text-center">
                        Localização
                    </motion.h2>
                    <motion.p
                        style={{
                            opacity: pSectionMapsOpacity
                        }}
                        id="p-maps" className="text-gray-100 text-center mt-5 text contrast-200 flex gap-2 md:flex-col">
                        <motion.span className="text-gray-100">
                        Rua Lincoln Claudino Gomes Júnior, nº 141,
                        </motion.span>
                        <motion.span className="text-gray-100">
                            Bairro: Parque da Figueira,
                        </motion.span>
                        <motion.span className="text-gray-100">
                            Cidade: Campinas,
                        </motion.span>
                        <motion.span className="text-gray-100">
                            Estado: SP,
                        </motion.span>
                        <motion.span className="text-gray-100">
                            CEP: 13040-230
                        </motion.span>
                    </motion.p>

                    <motion.a
                        style={{
                            opacity: buttonSectionMapsOpacity
                        }}
                        href="https://www.google.com.br/maps/place/Rua+Lincoln+Claudino+Gomes+Júnior,+141+-+Parque+da+Figueira,+Campinas+-+SP,+13040-230/@-22.9502667,-47.0643316,17z/data=!3m1!4b1!4m5!3m4!1s0x94c8c94b1c32ee01:0x117181a3d4d01cb1!8m2!3d-22.9502717!4d-47.0598416"
                        id="button-maps"
                        className="flex justify-center items-center bg-gray-100 border border-gray-900 text p-3 my-2 text-gray-900
                        hover:bg-transparent hover:border hover:border-gray-100 hover:text-gray-100 rounded-lg transition-colors duration-300"
                        target="_blank"
                    >
                        Abrir no Google Maps
                    </motion.a>
                </div>
                <LocaleMaps />
            </div>


            <ButtonScroll />
            <Footer />
        </>
    )
}