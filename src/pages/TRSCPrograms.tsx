import React from "react"
import { Link } from "react-router-dom"
import { buttonVariants } from "@/components/ui/button"
import { CarouselItem } from '@/components/ui/carousel';
import { Imgcarousel } from '@/components/imgcarousel';

import { motion } from "framer-motion";
const ViewProg1 = React.lazy(() => import('@/components/TRSCProg1'));
const ViewProg2 = React.lazy(() => import('@/components/TRSCProg2'));
const ViewProg3 = React.lazy(() => import('@/components/TRSCProg3'));
const ViewProg4 = React.lazy(() => import('@/components/TRSCProg4'));
const ViewProg5 = React.lazy(() => import('@/components/TRSCProg5'));
const ViewProg6 = React.lazy(() => import('@/components/TRSCProg6'));
const ViewProg7 = React.lazy(() => import('@/components/TRSCProg7'));
const ViewProg8 = React.lazy(() => import('@/components/TRSCProg8'));

export default function TRSCPrograms() {
   
    return (
        <div className="w-screen h-screen pagebkg overflow-y-scroll">
            <div className="navbtn">
                <Link to="/" className={buttonVariants({ variant: "secondary" })}>Back</Link>
            </div>
            <div className="trscprogbkg border-b-4 border-yellow-700">
                <div className="h-full flex flex-col justify-center items-center">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="bg-opacity-50 bg-gray-200 p-4">
                            <div className="apptextlg">
                                Adverse Effects Agreement Programs
                            </div>
                    </motion.div>
                </div>
            </div>
            <div className="spacer"/>  
            <div className="lg:mt-16">
                <div className="grid lg:grid-cols-2 flex justify-center">
                    <div className="flex flex-col justify-center">
                        <div className="apptext p-4 w-full">
                            The adverse effects programs were created to offset
                            the impacts of the Keeyask dam construction on the traditional
                            practices and customs of <br/>
                            Tataskweyak Cree Nation members.
                        </div>
                    </div>
                    <div className="flex justify-center mt-4">
                        <img src="/tradknowledge2.jpg" loading="lazy" className="scale-image"/>
                    </div>
                </div>
            </div>
            <div className="spacer"/>
            <div className="flex flex-col justify-center items-center">
                <div className="lg:w-4/6 w-screen">
                   <Imgcarousel>
                        <CarouselItem className="flex justify-center">
                            <ViewProg1/>
                        </CarouselItem>
                        <CarouselItem className="flex justify-center">
                            <ViewProg2/>
                        </CarouselItem>
                        <CarouselItem className="flex justify-center">
                            <ViewProg3/>
                        </CarouselItem>
                        <CarouselItem className="flex justify-center">
                            <ViewProg4/>
                        </CarouselItem>
                        <CarouselItem className="flex justify-center">
                            <ViewProg5/>
                        </CarouselItem>
                        <CarouselItem className="flex justify-center">
                            <ViewProg6/>
                        </CarouselItem>
                        <CarouselItem className="flex justify-center">
                            <ViewProg7/>
                        </CarouselItem>
                        <CarouselItem className="flex justify-center">
                            <ViewProg8/>
                        </CarouselItem>
                    </Imgcarousel>
                </div>
            </div>
            <div className="spacer"/>
        </div>
    )
}