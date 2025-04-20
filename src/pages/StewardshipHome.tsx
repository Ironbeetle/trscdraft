import  {Link} from "react-router-dom"
import { buttonVariants } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function StewardshipHome() {
    return (
        <div className="w-screen h-screen pagebkg overflow-y-scroll">
            <div className="navbtn">
            <Link to="/#homenav" className={buttonVariants({ variant: "secondary" })}>
                <span>Back</span>
            </Link>
            </div>
            <div className="Stewardsbkg">
                <div className="h-full flex flex-col justify-center items-center">
                    <motion.div 
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="bg-opacity-50 bg-gray-200 p-4">
                            <div className="apptextlg">
                                Stewards of the Land
                            </div> 
                    </motion.div>
                </div>
            </div>
            <div className="spacer"/>
            <div className="grid lg:grid-cols-2">
                <div className="p-4">
                    <div className="flex flex-col justify-center" style={{height:"100%"}}>
                        <motion.div 
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                            className="apptext justify-self-center items-center p-4">
                            We have a deep connection to our Homeland.<br/> 
                            It's only natural that we assume<span className="font-bold"> Responsibility</span>
                            <br/>for it's well being.
                        </motion.div>  
                    </div>
                </div>
                <div className="p-4"> 
                    <motion.img
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1,delay: 0.5 ,ease: "easeInOut" }} 
                        src="/stewardsroleimg.jpg" 
                        className="scaleElement"/>
                </div>
            </div>
            <div className="spacer"/>
            <div className="stewardaerialbkg">
                <div className="flex flex-col justify-center items-center h-full">
                    <motion.div 
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.25,delay: 0.25 ,ease: "easeInOut" }}
                        className="flex justify-self-center apptextlgw">
                    Protecting Our Home
                    </motion.div>
                </div>
            </div>
            <div className="spacer"/>
            <div className="grid lg:grid-cols-2">
                <div className="w-full flex flex-col justify-center items-center p-4">
                    <motion.div 
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.25, ease: "easeInOut" }}
                        className="apptext justify-self-center p-4 w-10/12">
                        Together with modern technology and the knowledge we accumulated 
                        over millennia,<br/> we are working to protect our land and waters 
                        for all it's inhabitants.
                    </motion.div>  
                </div>
                <div className="flex justify-center items-center p-4">
                    <motion.img
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.25,delay: 0.5 ,ease: "easeInOut" }} 
                        src="/watersampler.jpg"
                        loading="lazy" 
                        className="scale-image"/>
                </div>
            </div>
            <div className="spacer"/>
            <motion.div 
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ staggerChildren: 1.25 ,duration: 1.5, ease: "easeInOut" }}
                className="grid lg:grid-cols-4 gap-4">
                <motion.img 
                    initial={{ opacity: 0}}
                    whileInView={{ opacity: 1}}
                    transition={{ duration: 1.25,ease: "easeInOut" }}
                    src="/stewardshiplab.jpg" 
                    loading="lazy"
                    className="scaleElement"/>
                <motion.img 
                    initial={{ opacity: 0}}
                    whileInView={{ opacity: 1}}
                    transition={{ duration: 1.25,ease: "easeInOut" }}
                    src="/stewardshipfishsample.jpg"
                    loading="lazy" 
                    className="scaleElement"/>
                <motion.img 
                    initial={{ opacity: 0}}
                    whileInView={{ opacity: 1}}
                    transition={{ duration: 1.25,ease: "easeInOut" }}
                    src="/stewardshipzebracollect.jpg" 
                    className="scaleElement"/>
                <motion.img 
                    initial={{ opacity: 0}}
                    whileInView={{ opacity: 1}}
                    transition={{ duration: 1.25,ease: "easeInOut" }}
                    src="/stewardshipwinter.jpg" 
                    loading="lazy"
                className="scaleElement"/>
            </motion.div>
            <div className="spacer"/>
            <div className="grid lg:grid-cols-2 gap-4 p-4">
                <div className="apptext p-6">
                    Environmental monitoring involves planned and systematic 
                    monitoring, collection and processing of environmental data.
                    <br/><br/>
                    By collaborating with like minded people, we are learning how to apply 
                    environmental monitoring to develop an effective strategy to maintain 
                    and repair, our local ecosystem.
                  
                </div>
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1}}
                    transition={{ staggerChildren: 1.25 ,duration: 1, ease: "easeInOut" }}
                    className="grid lg:grid-cols-2 gap-4">
                    <motion.img 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1}}
                        transition={{ duration: 1.25,ease: "easeInOut" }}
                        src="/stewardshipclassrm.jpg"
                        loading="lazy" 
                        className="scaleElement"/>
                    <motion.img 
                        initial={{ opacity: 0}}
                        whileInView={{ opacity: 1}}
                        transition={{ duration: 1.25, delay: 0.5,ease: "easeInOut" }}
                        src="/stewardshipwater222.jpg"
                        loading="lazy" 
                        className="scaleElement"
                    />
                    <motion.img 
                        initial={{ opacity: 0}}
                        whileInView={{ opacity: 1}}
                        transition={{ duration: 1.25, delay: 0.8,ease: "easeInOut" }}
                        src="/landrepairstewardship.jpg"
                        loading="lazy" 
                        className="scaleElement"/>
                    <motion.img 
                        initial={{ opacity: 0}}
                        whileInView={{ opacity: 1}}
                        transition={{ duration: 1.25, delay: 1.1,ease: "easeInOut" }}
                        src="/watertest2B.png"
                        loading="lazy" 
                        className="scaleElement"/>
                </motion.div>
            </div>
            <div className="w-full flex justify-center">
                <img src="/LandWaterimpact999.jpg" loading="lazy" className="mt-12"/>
            </div>
        </div>
    )
}