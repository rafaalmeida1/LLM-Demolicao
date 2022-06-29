import { CaretCircleDoubleDown, Cube } from "phosphor-react";
import { ButtonScroll } from "../components/ButtonScroll";
import { ContactButton } from "../components/ContactButton";
import { Header } from "../components/Header";

export function Home() {
    return (
        <>
            <div className="bg-blur min-h-screen bg-cover bg-no-repeat bg-fixed">
                <Header />
                
                <div className="flex flex-col items-center justify-items-center pt-40 p-3">
                    <Cube weight="duotone" size={90} className="text-green-500 animate-spin-slow" />
                      
                    <strong className="text-3xl md:text-2xl">Comprometimento e Eficiência</strong>
                    <p className="text-gray-100 text-center mt-5 text contrast-200">Encaixe seu negócio no mundo digital de forma inteligente e conquiste cada vez mais clientes</p>

                    <a
                        href="https://api.whatsapp.com/send?phone=5519992864222&text=Tenho%20interesse%20em%20seus%20servi%C3%A7os%20de%20Desenvolvimento. "
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
                    </a>
                </div>
            </div>
            
            <div className="mt-[-1rem] flex justify-center">
                <CaretCircleDoubleDown size={34} className="animate-bounce" />
            </div>

            <div className="min-h-screen">
                Placeholder
            </div>
            
            <ButtonScroll />
            <ContactButton />
        </>
    )
}