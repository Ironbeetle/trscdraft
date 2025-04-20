import { Link } from "react-router-dom"
import { buttonVariants } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function NRDrainageBasin() {
    return (
        <div className="w-screen h-screen pagebkg overflow-y-scroll">
            <div className="navbtn">
                <Link to="/pages/ChallengesHome" className={buttonVariants({ variant: "secondary" })}>Back</Link>
            </div>
            <div className="nrdbkg border-b-4 border-yellow-700">
                <div className="h-full flex flex-col justify-start items-center">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="bg-opacity-50 bg-gray-200 lg:p-4 mt-24">
                            <div className="apptextlg">
                                Sediment and Nutrient Pollution
                            </div>
                    </motion.div>
                </div>
            </div>
            <div className="spacer"/>  
            <div className="lg:lg:mt-16">
                <div className="grid lg:grid-cols-2 flex justify-center">
                    <div className="flex flex-col justify-center">
                        <div className="apptext lg:p-4">
                            The Nelson River Drainage Basin is one of North America's largest watersheds, 
                            covering approximately 1.1 million square kilometers.<br/><br/> 
                            It encompasses parts of four Canadian provinces 
                            and four U.S. states.
                        </div>  
                    </div>
                    <div className="lg:mt-16 flex flex-col justify-center items-center lg:p-4">
                        <img src="/NRDB.png" loading="lazy" className="scale-image"/>
                    </div>
                </div>
            </div>
            <div className="spacer"/>
            <div className="lg:mt-16">
                <div className="grid lg:grid-cols-2 flex justify-center">
                    <div className="lg:mt-16 flex flex-col justify-center items-center lg:p-4">
                        <img src="/NRDBClosePath.png" loading="lazy" className="scale-image"/>
                    </div>
                    <div className="flex flex-col justify-evenly h-full lg:p-4">
                        <div className="apptext lg:p-4">
                            <span className="apptextBold">Tataskweyak Cree Nation</span>(Split Lake)<br/>
                            is located in the lower part of 
                            the<br/> Nelson River Drainage Basin
                        </div>  
                       
                    </div>
                </div>
            </div>
            <div className="spacer"/>
            <div className="lg:mt-16">
                <div className="flex flex-col justify-center lg:p-4">
                    <div className="apptextBold lg:p-4">
                        Sediment Transport
                    </div>  
                </div>
            </div>  
            <div className="grid lg:grid-cols-2" id="landimpact">
                <div className="flex flex-col justify-evenly">
                    <div className="flex flex-col justify-center items-center lg:p-4">
                        <div className="apptext lg:p-4">
                            Agricultural practices in the Prairie provinces contribute substantial amounts of topsoil erosion,
                            the Red River, in particular, carries high sediment loads due to the rich soils of the 
                            former Lake Agassiz basin
                        </div>  
                    </div>
                </div>
                <div className="lg:mt-16 flex flex-col justify-center items-center lg:p-4">
                    <img src="/agriculture.jpg" loading="lazy" className="scale-image"/>
                </div>
            </div>
            <div className="spacer"/>
            <div className="lg:mt-16">
                <div className="flex flex-col justify-center lg:p-4">
                    <div className="apptextBold lg:p-4">
                        Nutrient Pollution
                    </div>  
                </div>
            </div>  
            <div className="grid lg:grid-cols-2" id="landimpact">
                <div className="lg:mt-16 flex flex-col justify-center items-center lg:p-4">
                    <img src="/RedRiver.jpg" loading="lazy" className="scale-image"/>
                </div>
                <div className="flex flex-col justify-evenly">
                    <div className="flex flex-col justify-center items-center lg:p-4">
                        <div className="apptext lg:p-4">
                            Urban wastewater from cities like Winnipeg contributes significant nutrient loads.
                            This excess nutrient load enters Lake Winnipeg, via the Red River.<br/>
                        </div>  
                    </div>
                </div>
            </div>
            <div className="spacer"/>
            <div className="grid lg:grid-cols-2" id="landimpact">
                <div className="flex flex-col justify-evenly">
                    <div className="flex flex-col justify-center items-center lg:p-4">
                        <div className="apptext lg:p-4">
                            From Lake Winnipeg these nutrients and sediment flow into the Nelson River, 
                            eventually flowing past <br/><span className="apptextBold">Tataskweyak Cree Nation,</span> <br/> 
                            ultimately making it's way to Hudson's Bay.
                        </div>  
                    </div>
                </div>
                <div className="lg:mt-16 flex flex-col justify-center items-center lg:p-4">
                    <video loop autoPlay muted className="scale-image">
                        <source src="/NRDBCloseFlow.webm" type="video/webm"/>
                    </video>
                </div>
            </div>
            <div className="spacer"/>
            <div className="grid lg:grid-cols-2">
                <div className="flex flex-col justify-center items-center lg:p-4 mb-4">
                    <img src="/LastfishingSplitLake.jpg" loading="lazy"  className="scale-image"/>
                </div>
                <div className="flex flex-col justify-center items-center h-full">
                    <Link to="/pages/ModernDevImpact" className="pl-4 pr-4 w-full flex flex-col justify-center">
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