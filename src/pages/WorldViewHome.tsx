import { Link } from "react-router-dom"
import { buttonVariants } from "@/components/ui/button"
import { motion } from "framer-motion"
export default function WorldViewHome() {
    return (
        <div className="w-screen h-screen pagebkg overflow-y-scroll">
            <div className="navbtn">
                <Link to="/" className={buttonVariants({ variant: "secondary" })}>Back</Link>
            </div>
            <div className="ATKbkg sectionht">
                <motion.div 
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
                    className="grid lg:grid-cols-2 mt-8 mb-16 p-4">
                    <div className="apptextBold p-4 flex flex-col justify-evenly" style={{marginBottom:"10vh"}}>
                        Forefathers Of The Split Lake Cree<br/>
                        <span className="apptext">Their way of life
                        centred around the lakes and rivers
                        where wildlife and plant resources
                        could be harvested.<br/>
                        </span>
                    </div>
                    <div className="flex justify-center" style={{marginBottom:"10vh"}}>
                        <img src="/historyimg3.jpg"
                            className="scale-image"
                            loading="lazy"
                        />
                    </div>
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, delay: 0.8, ease: "easeInOut" }}
                    className="grid lg:grid-cols-2 mt-16 p-4">
                    <div className="flex justify-center">
                        <img src="/historyimg1.jpg"
                        className="scale-image"
                        loading="lazy"
                        />
                    </div>
                    <div className="apptextBold p-4 flex flex-col justify-evenly">
                        Our ancestors were a water people.<br/>
                        Living along the shores of the lakes
                        and rivers, they hunted and fished,
                        gathering herbs and berries
                        along the shoreline.                       
                    </div>
                </motion.div>
            </div>
            <div className="spacer"/>  
            <div className="mt-16" id="indknowledge">
                <div className="grid lg:grid-cols-2 flex justify-center">
                    <motion.div 
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="flex justify-center">
                        <img src="/traditionalhunters.png" loading="lazy" className="scale-image"/>
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
                        className="flex flex-col justify-center p-4">
                        <div className="apptext justify-self-center p-4">
                            Centuries of observation and experience has given our people, 
                            an invaluable intimate knowledge of our homeland ecosystem.
                        </div>  
                    </motion.div>
                </div>
            </div>
            <div className="spacer"/>
            <div className="w-full ancientbkg" id="indknowledge">
               
            </div>
            <div className="spacer"/>
            <div className="w-full">
                <div className="grid lg:grid-cols-2 flex justify-center">
                    <motion.div 
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="flex flex-col justify-center p-4">
                        <div className="apptext p-4">
                        This intimate knowledge, enabled the
                        identification and selection of the
                        most useful and fruitful areas for
                        residence and harvesting.
                        </div>
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
                        className="p-4 flex justify-center">
                            <img src="/ATKcirca.png" loading="lazy" className="scale-image"/>
                    </motion.div>
                </div>
            </div>
            <div className="spacer"/>            
            <div className="grid lg:grid-cols-5">
                <motion.div 
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="lg:col-span-2 flex justify-center">
                    <img src="/owl.png " loading="lazy" className="scale-image"/>
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
                    className="lg:col-span-3 flex flex-col justify-center">
                    <div className="apptext justify-self-center p-4">
                    Our world view is based on the understanding that<br/><br/>
                    <span className="font-semibold">All Things Are Related And Dependent On One Another.</span><br/><br/> 
                    We are but one component of the living natural world.
                    </div>  
                </motion.div>
            </div>
            <div className="spacer"/>
            <div className="grid lg:grid-cols-2">
                <motion.div 
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="flex flex-col justify-center p-4">
                    <div className="apptext justify-self-center p-4">
                        The understanding of the <br/>
                        <span><b> Inter-relatedness of Things</b> </span><br/> 
                        is the very foundation of our culture and traditions.
                    </div>  
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
                    className="flex justify-center p-4">
                    <img src="/ATKfront.jpg" loading="lazy" className="scale-image"/>
                </motion.div>
            </div>
            <div className="spacer"/>
            <div className="grid lg:grid-cols-2">
                <motion.div 
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="flex justify-center p-4">
                    <img src="/ATKcircanew.png" loading="lazy" className="scale-image"/>
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
                    className="flex flex-col justify-center p-4">
                    <div className="apptext justify-self-center p-4">
                    We teach the values, beliefs and priorities that govern our relationship 
                    with Mother Earth and all her beings.
                    </div>  
                </motion.div>
            </div>
            <div className="spacer"/>
            <div className="tcnvision flex flex-col justify-evenly items-center h-screen">
                <div className="w-9/12 flex flex-col justify-evenly items-center h-full">
                    <motion.span
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }} 
                        className="apptextlg">
                            Adapt & Prosper
                    </motion.span>
                    <motion.span 
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}    
                        className="apptextw">
                        As we modernize and evolve,
                        our traditional pursuits and respect for cultural practices and
                        customs are not forgotten.    
                    </motion.span>                  
                </div>
                <div className="flex justify-center">
                    <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1 ,staggerChildren: 1.5 }}
                    className="grid grid-cols-4"
                    >
                        <motion.img
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.5, delay: 1.5 ,ease: "easeInOut" }}
                            className="scale-image staggeritem"
                            loading="lazy"
                            src="/ATKimagewinter.jpg"
                        />
                        <motion.img
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.5, delay: 1.7 ,ease: "easeInOut" }}
                            className="scale-image staggeritem"
                            loading="lazy"
                            src="/tradlife2.jpg"
                        />
                        <motion.img
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.5, delay: 1.9 ,ease: "easeInOut" }}
                            className="scale-image staggeritem"
                            loading="lazy"
                            src="/pilotTCN.jpg"
                        />
                        <motion.img
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.5, delay: 2.1 ,ease: "easeInOut" }}
                            className="scale-image"
                            loading="lazy"
                            src="/watertest1A.png"
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
