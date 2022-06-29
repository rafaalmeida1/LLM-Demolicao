import { WhatsappLogo } from "phosphor-react";

export function ContactButton(){
    return(
        <a href="https://api.whatsapp.com/send?phone=5519992864222&text=Tenho%20interesse%20em%20seus%20servi%C3%A7os%20de%20Desenvolvimento. " 
            className="fixed bottom-[2rem] left-[2rem] md:hidden"
            target="_blank"
        >
            <WhatsappLogo 
                size={50}
                className="text-green-500" 
                weight="thin"
            />
        </a>
    )
}