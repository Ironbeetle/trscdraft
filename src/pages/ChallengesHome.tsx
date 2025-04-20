import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import { buttonVariants } from "@/components/ui/button"
import { motion } from "framer-motion";

export default function ChallengesHome() {
    const navigate = useNavigate();
    const navigateToDiv = () => {
        navigate('/#homenav');
    };
    const [width, setWidth] = useState(0);
    useEffect(() => {
        setWidth(window.innerWidth);
        const handleResize = () => {
            setWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };

    }, []);

    const Sec1M = () => {
        return(
            <div className="lg:mt-16">
                <div className="grid lg:grid-cols-2 flex justify-center">
                    <div className="flex justify-center mb-4">
                        <img src="/TCNimpactintro.jpg" className="scale-image"/>
                    </div>
                    <div className="flex flex-col justify-center p-4">
                        <div className="apptext items-self-center p-4 mb-4">
                            Modern development has altered our home forever <br/> 
                            As stewards of the land we will heal and maintain the land<br/>
                            for our future generations.
                        </div>  
                    </div>
                </div>
            </div>
        )
    }

    const Sec2M = () => {
        return(
            <div className="lg:mt-16">
                <div className="grid lg:grid-cols-2 flex justify-center">
                    <div className="flex justify-center">
                        <img src="/MissiFallswinter.jpg" loading="lazy" className="scale-image"/>
                    </div>
                    <div className="flex flex-col justify-evenly items-center p-4">
                        <div className="apptext">
                        83% of the Churchill River flow was 
                            diverted into the Nelson River System, causing 
                            devastating environmental impacts.
                        </div>
                        <Link to="/pages/CRD" className="lg:w-5/6 w-full flex flex-col justify-center">
                            <div className="apptextw navlink2">
                                Altered Water Flow
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }

    const Sec1D = () => {
        return(
            <div className="lg:mt-16">
                <div className="grid lg:grid-cols-2 flex justify-center">
                    <div className="flex flex-col justify-center">
                        <div className="apptext items-self-center p-4 mb-4">
                            Modern development has altered our home forever <br/> 
                            As stewards of the land we will heal and maintain the land<br/>
                            for our future generations.
                        </div>  
                    </div>
                    <div className="flex justify-center">
                        <img src="/TCNimpactintro.jpg" loading="lazy" className="scale-image"/>
                    </div>
                </div>
            </div>
        )
    }

    const Sec2D = () => {
        return(
            <div className="lg:mt-16">
                <div className="grid lg:grid-cols-2 flex justify-center">
                    <div className="flex flex-col justify-evenly items-center p-4">
                        <div className="apptext">
                            83% of the Churchill River flow was 
                            diverted into the Nelson River System, causing 
                            devastating environmental impacts.
                        </div>
                        <Link to="/pages/CRD" className="lg:w-5/6 w-full flex flex-col justify-center">
                            <div className="apptextw navlink2">
                                Altered Water Flow
                            </div>
                        </Link>
                    </div>
                    <div className="flex justify-center">
                        <img src="/MissiFallswinter.jpg" loading="lazy" className="scale-image"/>
                    </div>
                </div>
            </div>
        )
    }

    const Sec1Select = () => {
        if (width < 479) {
            return <Sec1M />
          }else if(width > 481 && width < 1024){
            return <Sec1D />
          }else {
            return <Sec1D />
          }
    }

    const Sec2Select = () => {
        if (width < 479) {
            return <Sec2M />
          }else if(width > 481 && width < 1024){
            return <Sec2D />
          }else {
            return <Sec2D />
          }
    }

    return (
        <div className="w-screen h-screen pagebkg overflow-y-scroll">
            <div className="navbtn">
                <button onClick={navigateToDiv} className={buttonVariants({ variant: "secondary" })}>Back</button>
            </div>
            <div className="challengesbkg border-b-4 border-yellow-700">
                <div className="h-full flex flex-col justify-center items-center">
                    <motion.div 
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, delay: 0.5 ,ease: "easeInOut" }}
                        className="bg-opacity-50 bg-gray-200 p-4">
                        <div className="apptextlg">
                            Environmental Challenges
                        </div>
                    </motion.div>
                </div>
            </div>
            <div className="spacer"/>  
            <Sec1Select />
            <div className="spacer"/>
            <div className="lg:mt-16">
                <div className="grid lg:grid-cols-2 flex justify-center">
                    <div className="flex justify-center">
                        <img src="/keeyaskdamIntro.jpg" loading="lazy" className="scale-image"/>
                    </div>
                    <div className="flex flex-col justify-evenly items-center p-4">
                        <div className="apptext">
                            Hydroelectric dam construction in northern Manitoba began in the 1950s, 
                            leveraging the region's vast water resources.<br/>
                            The latest hydro dam project is the<br/> Keeyask Dam.
                        </div>
                        <Link to="/pages/KeeyaskDam" className="lg:w-5/6 w-full flex flex-col justify-center">
                            <div className="apptextw navlink2">
                                Hydro Electric Dams
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="spacer"/>  
            <div className="lg:mt-16">
                <Sec2Select />
            </div>
            <div className="spacer"/>
            <div className="lg:mt-16">
                <div className="grid lg:grid-cols-2 flex justify-center">
                    <div className="flex justify-center">
                        <img src="/BurntwppdNelsonJNX.png" loading="lazy" className="scale-image"/>
                    </div>
                    <div className="flex flex-col justify-evenly items-center p-4">
                        <div className="apptext">
                        The transport of sediments and nutrients into the Hudson Bay via the<br/>
                        Nelson River Drainage Basin<br/> is of significant environmental concern.
                        </div>
                        <Link to="/pages/NRDrainageBasin" className="lg:w-5/6 sm:w-full flex flex-col justify-center">
                            <div className="apptextw navlink2">
                                Sediment and Nutrient Pollution
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="spacer"/>
        </div>
    )
}