import classNames from "classnames";
import { CaretCircleUp } from "phosphor-react";
import { useEffect, useState } from "react";

export function ButtonScroll(){
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if(window.pageYOffset > 150) {
            setIsVisible(true);
        }else {
            setIsVisible(false);
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility)

        return () => {
            window.removeEventListener('scroll', toggleVisibility)
        }
    }, [])

    return(
        <div
            className="fixed bottom-[2rem] right-[2rem]"
        >
            <button onClick={scrollToTop}
                className={classNames(
                    isVisible ? 'opacity-100' : 'opacity-0',
                    'transition-opacity'
                )}
            >
                <CaretCircleUp 
                    size={34}
                    className='animate-pulse text-green-500 hover:animate-none'
                />

            </button>
        </div>
    )
}