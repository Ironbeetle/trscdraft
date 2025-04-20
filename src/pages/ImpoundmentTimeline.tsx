import React from "react"
import { Link } from "react-router-dom"
import { buttonVariants } from "@/components/ui/button"
import { motion } from "framer-motion"

const Impound = React.lazy(() => import('@/components/carousellist').then(module => ({ default: module.Impound })));
export default function ImpoundmentTimeline() {

    return (
        <div className="w-screen h-screen pagebkg overflow-y-scroll">
            <div className="navbtn">
                <Link to="/pages/KeeyaskDam/#impoundimpact" className={buttonVariants({ variant: "secondary" })}>Back</Link>
            </div>
            <div className="impoundbkg border-b-4 border-yellow-700">
            <div className="h-full flex flex-col justify-center items-center">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="bg-opacity-50 bg-gray-200 p-4">
                            <div className="apptextlg">
                                2020 Impoundment Operations
                            </div>
                    </motion.div>
                </div>
            </div>
            <div className="spacer"/>  
            <div className="lg:mt-16">
                <div className="grid lg:grid-cols-5 flex justify-center">
                    <div className="lg:col-span-2 flex flex-col justify-center p-4">
                        <div className="apptextBold p-4">
                            Initial water-up procedure began in February of 2020.<br/>
                            Water-up is the process of flooding an enclosed work area behind the dam that 
                            was kept dry for construction.
                        </div>  
                    </div>
                    <div className="lg:col-span-3 flex justify-center lg:p-4">
                        <img src="/KeeyaskwinterWide.jpg" loading="lazy" className="scale-image"/>
                    </div>
                </div>
            </div>
            <div className="spacer"/>  
            <div className="lg:grid lg:grid-cols-3">
                <div className="flex flex-col justify-center items-center p-4">
                    <img src="/2020winimpimg1.jpg" loading="lazy" className="scale-image"/>
                </div>
                <div className="flex flex-col justify-center items-center p-4">
                    <img src="/2020winimpimg2.jpg" loading="lazy"  className="scale-image"/>
                </div>
                <div className="flex flex-col justify-center items-center p-4">
                    <img src="/2020winimpimg3.jpg" loading="lazy" className="scale-image"/>
                </div>
            </div>
            <div className="spacer"/>
            <div className="w-screen">
                <div className="grid lg:grid-cols-5 flex justify-center">
                    <div className="lg:col-span-3 flex justify-center lg:p-4">
                        <img src="/impound11.jpg" loading="lazy" className="scale-image"/>
                    </div>
                    <div className="lg:col-span-2 flex flex-col justify-center apptextBold">
                        Impoundment operations were conducted again 
                        in September of 2020, raising water levels by about 7 feet (2.17 meters) at the dam site.
                    </div>  
                </div>
            </div>
            <div className="spacer"/>  
            <div className="lg:grid lg:grid-cols-3">
                <div className="flex flex-col justify-center items-center p-4">
                    <img src="/2020impimgsep1.jpg" loading="lazy" className="scale-image"/>
                </div>
                <div className="flex flex-col justify-center items-center p-4">
                    <img src="/2020impimgsep2.jpg" loading="lazy" className="scale-image"/>
                </div>
                <div className="flex flex-col justify-center items-center p-4">
                    <img src="/2020impimgsep3.jpg" loading="lazy" className="scale-image"/>
                </div>
            </div>
            <div className="spacer"/>
            <div className="w-full flex justify-center items-center">
                <Impound/>
            </div>
            <div className="spacer"/>  
        </div>
    )
}