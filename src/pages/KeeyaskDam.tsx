import React from "react"
import { Link } from "react-router-dom"
import { buttonVariants } from "@/components/ui/button";
import { motion } from "framer-motion";

const NelsonRiver = React.lazy(() => import('@/components/KeeyaskMap'));
const Keeyask1 = React.lazy(() => import('@/components/carousellist').then(module => ({ default: module.Keeyask1 })));
const Keeyask2 = React.lazy(() => import('@/components/carousellist').then(module => ({ default: module.Keeyask2 })));
const Keeyask3 = React.lazy(() => import('@/components/carousellist').then(module => ({ default: module.Keeyask3 })));
const Keeyask4 = React.lazy(() => import('@/components/carousellist').then(module => ({ default: module.Keeyask4 })));
export default function KeeyaskDam() {
    return (
        <div className="w-screen h-screen pagebkg overflow-y-scroll">
            <div className="navbtn">
                <Link to="/pages/ChallengesHome" className={buttonVariants({ variant: "secondary" })}>Back</Link>
            </div>
            <div className="keeyaskbkg border-b-4 border-yellow-700">
                <div className="h-full flex flex-col justify-center items-center">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="bg-opacity-50 bg-gray-200 p-4">
                            <div className="apptextlg">
                                Keeyask Dam
                            </div>
                    </motion.div>
                </div>
            </div>
            <div className="spacer"/>
            <div className="lg:mt-16">
                <div className="grid lg:grid-cols-2">
                    <div className="flex flex-col justify-evenly h-full p-4">
                        <div className="apptext p-4">
                            The Keeyask Dam Project officially began construction in 2014 and became fully operational in 2022. 
                            It was designed to provide electricity for both Manitoba's domestic use and for export to other markets.
                        </div>  
                    </div>
                    <div className="flex justify-center">
                        <div className="map-container">
                            <NelsonRiver/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="spacer"/>
            <div className="lg:mt-16">
                <div className="flex flex-col justify-center items-center">
                    <div className="lg:w-9/12">
                        <div className="apptext text-center p-4">
                         Hydro Electricity Introduction
                        </div>  
                    </div>
                </div>
            </div>
            <div className="spacer"/>  
            <div className="lg:mt-16">
                <div className="grid lg:grid-cols-2">
                    <div className="flex justify-center p-8">
                        <img src="/Animateddam.gif" loading="lazy" className="scale-image"/>             
                    </div>
                    <div className="flex flex-col justify-center p-4">
                        <div className="apptext text-center p-4">
                        Hydroelectric power is generated when, water is collected 
                        or stored at a higher elevation.<br/><br/>
                        The water is led downward through large tunnels
                        to a lower elevation, that 
                        causes turbines to rotate. 
                        This rotational energy drives the generators to produce 
                        the electricity.
                        </div>  
                    </div>
                </div>
            </div>
            <div className="spacer"/>
            <div className="lg:mt-16">
                <div className="grid lg:grid-cols-2 flex justify-center">
                    <div className="flex flex-col justify-evenly h-full">
                        <div className="apptext p-4">
                            The water is elevated by building a dam, that impounds a river, 
                            at a point where the elevation drops. <br/> The water level behind 
                            the dam is called the Impoundment Reservoir.
                        </div>  
                    </div>
                    <div className="flex justify-center p-4">
                        <img src="/impoundReservior.jpg" loading="lazy" className="scale-image"/>
                    </div>
                </div>
            </div>
            <div className="lg:mt-16">
                <div className="flex flex-col justify-center items-center">
                    <div className="lg:w-9/12">
                        <div className="apptext p-4">
                        The Keeyask reservoir impoundment in 2020 was a significant phase of the project.<br/><br/> 
                        The impoundment process involved flooding the area upstream of the dam to create 
                        the reservoir needed for power generation.
                        </div>  
                        <div className="apptext p-4">
                         It was this flooding that caused the most significant environmental impact.
                        </div>  
                    </div>
                    <div className="flex justify-center lg:mt-16">
                        <Link to="/pages/ImpoundmentTimeline" className="flex flex-col justify-center items-center p-4">
                            <div className="apptextw navlink p-4">
                                Impoundment Timeline
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="spacer"/>  
            <div className="flex flex-col justify-center p-4" id="impoundimpact">
                <div className="apptextBold p-4">
                    What Impoundment Did To The Land And Water
                </div>  
            </div>
            <div className="lg:mt-4">
                <div className="flex flex-col justify-center p-4">
                    <div className="apptextBold">
                        Land
                    </div>  
                </div>
            </div>
            <div className="lg:mt-16 grid lg:grid-cols-2" id="landimpact">
                <div className="flex flex-col justify-center p-4">
                    <div className="flex flex-col justify-center items-center p-4">
                        <div className="apptext p-4">
                            Trees and brush in the expected flood zone is cleared , 
                            destroying the local animal habitat.
                        </div>  
                    </div>
                </div>
                <Keeyask1/>
            </div>
            <div className="spacer"/>
            <div className="lg:mt-4">
                <div className="flex flex-col justify-center p-4">
                    <div className="apptextBold">
                        Water
                    </div>  
                </div>
            </div>
            <div className="lg:mt-16 grid lg:grid-cols-2" id="waterimpact">
                <Keeyask2/>
                <div className="flex flex-col justify-evenly">
                    <div className="flex flex-col justify-center items-center p-4">
                        <div className="apptext p-4">
                            Sudden flooding stirs up the top soil and debris.<br/><br/> 
                            The “muddied” water spoils the spawning area for 
                            various fish species. 
                        </div>  
                    </div>
                </div>
            </div>
            <div className="spacer"/>
            <div className="lg:mt-4">
                <div className="flex flex-col justify-center p-4">
                    <div className="apptextBold">
                        Travel Hazards
                    </div>  
                </div>
            </div>
            <div className="grid lg:grid-cols-2" id="icesnowimpact">
                <div className="flex flex-col justify-center p-4">
                    <div className="flex flex-col justify-center p-4">
                        <div className="apptext p-4">
                            Frequent water level fluctuation during the winter months, 
                            creates dangerous conditions for snowmobile travel in the 
                            affected area.
                        </div> 
                      
                    </div>
                </div>
                <Keeyask3/>
            </div>
            <div className="spacer"/>
            <div className="grid lg:grid-cols-2" id="icesnowimpact">
                <Keeyask4/>
                <div className="flex flex-col justify-center p-4">
                    <div className="flex flex-col justify-center p-4">
                       
                        <div className="apptext mt-16">
                            During open water floating debris can damage boats and motors.
                        </div>   
                    </div>
                </div>
            </div>
            <div className="spacer"/>
        </div>
    )
}