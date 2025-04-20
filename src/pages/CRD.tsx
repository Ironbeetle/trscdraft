import React from "react";
import { Link } from "react-router-dom"
import { buttonVariants } from "@/components/ui/button";
import { motion } from "framer-motion";

const CRD1 = React.lazy(() => import('@/components/carousellist').then(module => ({ default: module.CRD1 })));
const CRD2 = React.lazy(() => import('@/components/carousellist').then(module => ({ default: module.CRD2 })));
export default function CRD() {
    return (
        <div className="w-screen h-screen pagebkg overflow-y-scroll">
            <div className="navbtn">
                <Link to="/pages/ChallengesHome" className={buttonVariants({ variant: "secondary" })}>Back</Link>
            </div>
            <div className="crdbkg border-b-4 border-yellow-700">
                <div className="h-full flex flex-col justify-center items-center">
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, delay: 0.5 ,ease: "easeInOut" }}
                        className="bg-opacity-50 bg-gray-200 p-4">
                            <div className="apptextlg">
                                Churchill River Diversion Project
                            </div>
                    </motion.div>
                </div>
            </div>
            <div className="spacer"/>  
            <div className="lg:mt-16">
                <div className="grid lg:grid-cols-2 flex justify-center">
                    <div className="flex flex-col justify-center p-4">
                        <div className="apptext p-4">
                            The Churchill River Diversion is a major hydroelectric project in 
                            northern Manitoba, that was constructed in the 1970s
                        </div>  
                    </div>
                    <div className="flex justify-center p-4">
                        <img src="/MissiFallsimg.jpg" loading="lazy" className="scale-image"/>
                    </div>
                </div>
            </div>
            <div className="spacer"/>
            <div className="lg:mt-16">
                <div className="grid lg:grid-cols-2 flex justify-center p-4">
                    <div className="flex justify-center p-4">
                      <CRD1/>
                    </div>
                    <div className="flex flex-col justify-evenly h-full p-4">
                        <div className="apptext p-4">
                            The project objective is to divert about 85% of the Churchill River's flow into the Nelson River
                            system to increase power generation capacity at Manitoba Hydro's generating stations.
                        </div>  
                        <div className="apptext">
                            The diverted water flows through<br/> Southern Indian Lake and then the 
                            <br/>Rat River/Burntwood River system.
                        </div>  
                       
                    </div>
                </div>
            </div>
            <div className="spacer"/>  
            <div className="lg:mt-16">
                <div className="grid lg:grid-cols-2 flex justify-center">
                    <div className="flex flex-col justify-center p-4">
                        <div className="apptext p-4">
                        Water flow increased dramatically as the system began carrying diverted Churchill River water.<br/>
                        The rivers were transformed from relatively small waterways into major water channels, thus dramatically increasing 
                        shoreline erosion.
                        </div>  
                    </div>
                    <div className="flex justify-center lg:p-4">
                        <img src="/Missifalls11.jpg" loading="lazy"/>
                    </div>
                </div>
            </div>
            <div className="spacer"/>  
            <div className="lg:mt-16">
                <div className="flex flex-col justify-center p-4">
                    <div className="apptextBold">
                        The Ecological Death of Split Lake
                    </div>  
                </div>
            </div>
            {/* water levels */}
            <div className="lg:mt-16 flex flex-col justify-center items-center">
                <div className="grid lg:grid-cols-2 flex justify-center h-full">
                    <div className="flex flex-col justify-center h-full">
                        <CRD2/>
                    </div>
                    <div className="flex flex-col justify-center items-center p-4">
                        <div className="apptext p-4 mt-12">
                            A sudden rise in water volume , carried vast amount of sediment from the 
                            newly eroded shores along the diversion path.
                        </div>  
                        <div className="apptext p-4 mt-12">
                            This heavy sediment and particle load choked Split Lake and decimated the ecosystem.
                        </div>  
                    </div>
                </div>
            </div>
            <div className="spacer"/>
            {/* water quality */}
            <div className="lg:mt-16 flex flex-col justify-center items-center">
                <div className="grid lg:grid-cols-2 flex justify-center">
                    <div className="flex flex-col justify-center p-4">
                        <div className="apptextBold">
                            Downstream<br/>
                            <span className="apptext">(Churchill River)</span>
                        </div>  
                        <div className="apptext mt-12">
                            The river's flow was drastically reduced to about 15% of its original volume.<br/>
                            Fish populations declined due to reduced habitat and changed water conditions.<br/>
                            Wildlife that depended on the original river ecosystem had to adapt or relocate
                        </div>  
                    </div>
                     <div className="flex flex-col justify-center h-full">
                        <img src="/LowerChurchill1.jpg" loading="lazy" className="scale-image"/>
                    </div>
                </div>
            </div>
            <div className="spacer"/>
            <div className="lg:mt-16 grid lg:grid-cols-2">
                <div className="flex flex-col justify-center items-center p-4">
                    <img src="/LastfishingSplitLake.jpg" loading="lazy"  className="scale-image"/>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <Link to="/pages/ModernDevImpact" className="lg:w-4/6">
                        <div className="apptextw navlink2">
                            Impact on Tataskweyak
                        </div>
                    </Link>
                </div>
            </div>
            <div className="spacer"/>
        </div>
    )
}