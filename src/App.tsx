import { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { CarouselItem } from "@/components/ui/carousel";
import { Imgcarousel } from "@/components/imgcarousel";
const Openerpage = () => {
    const scrollref = useRef<HTMLDivElement | null>(null);
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

    }, [])
    const Hamburgernav = () => {
        return(
            <div className="top-0 z-50 sticky" id="homenav">
                <div className="menuToggle">
                    <input type="checkbox"/>
                    <span></span>
                    <span></span>
                    <span></span>
                    <ul className="menu">
                        <li className="flex flex-col justify-center items-center">
                            <Link to="/pages/WorldViewHome" className="apptextw">
                                Our World View                           
                            </Link>
                        </li>
                        <li className="flex flex-col justify-center items-center">
                            <Link to="/pages/ChallengesHome" className="apptextw">
                                Our Environment                           
                            </Link>
                        </li>
                        <li className="flex flex-col justify-center items-center">
                            <Link to="/pages/ModernDevImpact" className="apptextw">
                                Water Quality     
                            </Link>
                        </li>
                        <li className="flex flex-col justify-center items-center">
                            <Link to="/pages/StewardshipHome" className="apptextw">
                                Land Stewardship                           
                            </Link>
                        </li>
                        <li className="flex flex-col justify-center items-center">
                            <Link to="/pages/TRSCPrograms" className="apptextw">
                                Adverse Effects Programs                           
                            </Link>
                        </li>
                    </ul>
                </div>
           </div>
        )
    }

    const LinkBar = () => {
        return(
            <div className="w-screen flex justify-evenly top-0 z-50 sticky navbkg h-20" id="homenav">
                <Link to="/pages/WorldViewHome" className="navlink flex flex-col justify-center textlink">Our World View</Link>
                <Link to="/pages/ChallengesHome" className="navlink flex flex-col justify-center textlink">Our Environment</Link>
                <Link to="/pages/ModernDevImpact" className="navlink flex flex-col justify-center textlink">Water Quality</Link>
                <Link to="/pages/StewardshipHome" className="navlink flex flex-col justify-center textlink">Land Stewardship</Link>
                <Link to="/pages/TRSCPrograms" className="navlink flex flex-col justify-center textlink">Adverse Effects Programs</Link>

            </div>
        )
    }

    const Navselector = () => {
        if (width < 480) {
            return <Hamburgernav/>
        }else if (width > 481 && width < 1024){
            return <LinkBar/>
        }else {
            return <LinkBar/>
        }
    }
    return (
        <div className="w-screen h-screen pagebkg overflow-y-scroll">
            <div className="Openerbkg border-b-4 border-yellow-700">
                <div className="h-full flex flex-col justify-center items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="bg-opacity-50 bg-gray-200 p-4">
                        <div className="apptextlg">
                            Tataskweyak Cree Nation
                        </div>
                        <div className="apptext">
                            Traditional Resource Stewardship Center
                        </div>
                    </motion.div>
                </div>
            </div>
            <Navselector/>
            <div className="spacer"/>
            <div className="grid lg:grid-cols-2 p-4" id="navtoptrsc">
                <motion.div 
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="flex flex-col p-4 h-full justify-center items-center"
                >
                    <div className="apptext justify-self-center p-4">
                    The 20th century, brought many developments that
                    forever changed the environment and an ancient way of life, in northern Manitoba.
                    </div>
                </motion.div>  
                <motion.div 
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="flex justify-center">
                    <img src="/historyimg4.jpg" loading="lazy"/>
                </motion.div>
            </div>
            <div className="spacer"/>
            <div className="grid lg:grid-cols-2 p-4">
                <motion.div 
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="flex justify-center lg:p-4 mb-4"
                >
                    <img src="/historyimg5.jpg" loading="lazy"/>
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="apptext flex flex-col justify-self-center items-self-center p-4 lg:w-9/12 h-full"
                >
                    Undoubtedly, the most profound of these has been the impact of hydroelectric projects.<br/><br/><br/> 
                    Massive changes to the natural water flow, threatened the cultural, social, 
                    and spiritual traditions of the<br/><span className="font-bold"> Tataskweyak Cree.</span>
                </motion.div>  
                
            </div>
            <div className="spacers"/>
            <div className="canmapbkg grid lg:grid-cols-2 p-4">
                <motion.div 
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="flex flex-col p-4 h-full justify-center items-center"
                >
                    <div className="apptextBold p-4">
                    Tataskweyak Cree Nation<br/><br/>
                    </div>
                    <div className="apptext p-4">
                    Our traditional territory boundary was established as part of resource management 
                    agreements between Tataskweyak Cree Nation and the Manitoba government.
                    </div>
                </motion.div>  
                <div className="flex flex-col justify-center h-full p-4">
                    <div className="flex justify-center">
                        <img src="/TCNresourceMapdetails.png" loading="lazy" className="scale-image"/>
                    </div>
                </div>
            </div>
            <div className="spacerl"/>
            {/* TRSC Begin */}
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1}}
                transition={{ duration: 1.3, ease: "easeInOut" }}
                className="w-full flex flex-col justify-evenly items-center p-4">
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="apptextBold">
                    Preserving Our Culture & Traditions
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}   
                    className="w-full flex justify-center items-center">
                    <img src="/ResourceLogo.png" loading="lazy" className="scale-image"/>
                </motion.div>
            </motion.div>
            <div className="spacer"/>
            <div className="trscbkg mt-0 lg:mt-16 border-b-4 border-yellow-700">
                <div className="h-full flex flex-col justify-center items-center">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="bg-opacity-50 bg-gray-200 p-4">
                            <div className="apptextlg">
                                Traditional Resource Stewardship Center
                            </div>
                    </motion.div>
                </div>
            </div>
            <div className="spacer"/>
            <div className="grid lg:grid-cols-2 gap-4 p-4 flex jusitify-center mb-16 h-screen">
                <motion.div 
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5,delay: 0.5 ,ease: "easeInOut" }}
                    className="flex flex-col justify-center">
                    <img src="/keeyaskCenterbtn.jpg" loading="lazy" className="justify-self-center"/>
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, delay: 0.8 ,ease: "easeInOut" }}
                    className="flex flex-col justify-center p-4"
                    ref={scrollref}    
                >
                    <div className="apptext justify-self-center p-4">
                    The Traditional Resource Stewardship Center<br/>
                    was constructed in 2007 to manage the<br/>
                    adverse effects programs initiated during the Keeyask hydro-dam 
                    negotiation with Manitoba Hydro & Tataskweyak Cree Nation.
                    </div>  
                </motion.div>
            </div>
            <motion.div 
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ staggerChildren: 1.5  ,duration: 1, ease: "easeInOut" }}
                className="grid lg:grid-cols-4 lg:gap-4 gap-4">
            
                    <motion.img 
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: "easeInOut" }}
                        src="/TRSCprogworkspace22.jpg"
                        loading="lazy"
                        className="flex justify-self-center item-self-center scale-image"
                        />
            
                    <motion.img 
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.2 ,ease: "easeInOut" }}
                        src="/TRSCprogworkspace.jpg"
                        loading="lazy"
                        className="flex justify-self-center item-self-center scale-image"
                        />
            
                    <motion.img 
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.4 ,ease: "easeInOut" }}
                        src="/TRSCkitchen.jpg"
                        loading="lazy"
                        className="flex justify-self-center item-self-center scale-image"
                        />
            
                    <motion.img 
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.6 ,ease: "easeInOut" }}
                        src="/TRSCprogintro.jpg"
                        loading="lazy"
                        className="flex justify-self-center item-self-center scale-image"
                        />
            
            </motion.div>
            <div className="spacer"/>
            <motion.div 
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="grid lg:grid-cols-2 lg:h-4/5 h-screen"
                id="navtrsc"
            >
                <div className="flex flex-col w-full h-full p-4">
                    <div className="flex flex-col justify-evenly items-center w-full h-full">
                        <Link to="/pages/TRSCnewupdates" className="w-5/6 lg:mb-4">
                            <div className="navlink w-full h-full apptextw">
                                News & Contact Info
                            </div>
                        </Link>
                    </div>   
                </div>
                <div className="flex flex-col justify-center items-center">
                    <img src="/TRSCinterior.jpg" loading="lazy"/>
                </div>
            </motion.div> 
            



            <div className="spacer"/>  
            <div className="lg:mt-16">
                <div className="grid lg:grid-cols-2 flex justify-center">
                    <div className="flex justify-center">
                        <img src="/TRSCexterior222.jpg" loading="lazy" className="scale-image"/>
                    </div>
                    <div className="flex flex-col justify-center">
                        <div className="apptext p-4">
                            The Traditional Resource Stewardship Center<br/>
                            facility serves as the headquarters for the<br/>
                            management and operations of the<br/> Adverse Effects Agreement programs
                        </div>  
                    </div>
                    
                </div>
            </div>
            <div className="spacer"/>
            <div className="lg:mt-16">
                <div className="grid lg:grid-cols-2 flex justify-center">
                    <div className="flex flex-col justify-evenly h-full">
                        <div className="apptext justify-center items-center p-4">
                            TRSC provides space for the processing and storage of 
                            traditional foods for the community.
                        </div>  
                    </div>
                    <div className="flex justify-center">
                        <img src="/TRSCkitchen333.jpg" loading="lazy" className="scale-image"/>
                    </div>
                </div>
            </div>
            <div className="spacer"/>  
            <div className="lg:mt-16">
                <div className="grid lg:grid-cols-2 flex justify-center">
                    <div className="flex justify-center">
                        <img src="/museuminterior1.jpg" loading="lazy" className="scale-image"/>
                    </div>
                    <div className="flex flex-col justify-center">
                        <div className="apptext justify-self-center p-4">
                            The facility has a museum, that is part of the work being done to 
                            preserve historical artifacts and educate <br/>TCN members 
                            on the local history.
                        </div>  
                    </div>
                </div>
            </div>
            <div className="spacer"/>
            <div className="lg:mt-16">
                <div className="grid lg:grid-cols-2 flex justify-center">
                    <div className="flex flex-col justify-evenly h-full">
                        <div className="apptext justify-center items-center">
                        The building provides storage space for equipment used for cultural and environmental programs.
                        </div> 
                    </div>
                    <div className="flex justify-center">
                        <img src="/TRSCinteriorstorage.jpg" loading="lazy" className="scale-image"/>
                    </div>
                </div>
            </div>
            <div className="spacer"/> 
            <div className="w-full flex justify-center">
                <div className="apptextlg">
                    Photo Gallery
                </div>
            </div>
            <div className="spacer"/>
            <Imgcarousel>
                <CarouselItem className="flex justify-center">
                    <img src="/trscint1.jpg" loading="lazy" className="scale-image"/>
                </CarouselItem>
                <CarouselItem className="flex justify-center">
                    <img src="/trscint2.jpg" loading="lazy" className="scale-image"/>
                </CarouselItem>
                <CarouselItem className="flex justify-center">
                    <img src="/trscint3.jpg" loading="lazy" className="scale-image"/>
                </CarouselItem>
                <CarouselItem className="flex justify-center">
                    <img src="/trscint4.jpg" loading="lazy" className="scale-image"/>
                </CarouselItem>
                <CarouselItem className="flex justify-center">
                    <img src="/trscint5.jpg" loading="lazy" className="scale-image"/>
                </CarouselItem>
                <CarouselItem className="flex justify-center">
                    <img src="/trscint6.jpg" loading="lazy" className="scale-image"/>
                </CarouselItem>
                <CarouselItem className="flex justify-center">
                    <img src="/trscint7.jpg" loading="lazy" className="scale-image"/>
                </CarouselItem>
                <CarouselItem className="flex justify-center">
                    <img src="/trscint8.jpg" loading="lazy" className="scale-image"/>
                </CarouselItem>
            </Imgcarousel> 
            <div className="spacer"/> 
        </div>
    )
}
export default Openerpage

