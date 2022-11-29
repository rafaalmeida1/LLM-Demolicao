import {motion, useTransform, useViewportScroll} from 'framer-motion'
import {useRef, useEffect, useState} from 'react';
import imagesSlider from '../assets/images';

export function ImageSlider(){
    const [ width, setWidth] = useState(0);
    const carousel = useRef<any>(null);
    

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }, [])

    const { scrollYProgress } = useViewportScroll();

    const titleImageSectionOpacity = useTransform(scrollYProgress, [0.327, 0.388], [0, 1]);
    const titleImageSectionX = useTransform(scrollYProgress, [0.327, 0.388], [-40, 0]);

    const hrImageSectionOpacity = useTransform(scrollYProgress, [0.327, 0.388], [0, 1]);

    const imageScrollOpacity = useTransform(scrollYProgress, [0.327, 0.408], [0, 1]);


    return(
        <div>
            <div className="flex justify-center">
                <motion.h1 
                    style={{
                        opacity: titleImageSectionOpacity,
                        x: titleImageSectionX
                    }}
                    className="text-gray-900 font-bold mt-[2rem] text-[2rem] md:mt-[2rem]"
                >
                        Trabalhos Realizados
                </motion.h1>
            </div>
            <div className="mx-auto">
                <motion.hr style={{opacity: hrImageSectionOpacity}} className="w-[10vw] mt-[2rem] mx-auto mb-0 border border-green-500" />
            </div>
            <motion.div ref={carousel}
                className="cursor-grab overflow-hidden"
                whileTap={{cursor:"grabbing"}}>
                <motion.div 
                    drag="x" 
                    dragConstraints={{ right: 0, left: -width }} 
                    className="flex"
                >
                    {imagesSlider.map(image => {
                        return (
                            <motion.div
                                style={{
                                    opacity: imageScrollOpacity,
                                }}
                                className="min-h-fit min-w-[30rem] p-10 md:min-w-[20rem] md:p-5" 
                                key={image}>
                                <img className="w-full h-full rounded-[2rem] pointer-events-none" src={image} alt=""/>
                            </motion.div>
                        );
                    })}
                </motion.div> 
            </motion.div>
        </div>
    )
}