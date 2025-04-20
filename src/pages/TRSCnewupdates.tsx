import React from "react"
import { ReactNode } from "react"
import { Link } from "react-router-dom"
import { buttonVariants } from "@/components/ui/button"
import { motion } from "framer-motion"
import { reel } from "../components/newsreel"

const Contact = React.lazy(() => import('../components/Contact').then(module => ({ default: module.Contact })));
export default function TRSCnewupdates() {
    const Callto = ({ phone, children }: { phone: string; children: ReactNode }) => {
        return <a href={`tel:${phone}`}>{children}</a>;
    };
    
    return (
        // Remove w-screen since it can cause horizontal scrolling
        <div className="min-h-screen pagebkg smooth-scroll">
            <div className="navbtn">
                <Link to="/" className={buttonVariants({ variant: "secondary" })}>Back</Link>
            </div>
            
            {/* Header Section - full width */}
            <div className="w-full flex flex-col justify-center items-center h-[20vh] mb-8">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="bg-opacity-50 bg-gray-200 p-6 rounded-lg">
                    <div className="apptextlg">
                        TRSC News & Contact Info
                    </div>
                </motion.div>
            </div>

            {/* Main Content Grid - adjusted container */}
            <div className="w-full max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-8">
                    {/* News Section */}
                    <div className="space-y-6 w-full">
                        {reel.map((item) => (
                            <Link 
                                key={item.id}
                                to={`/pages/NewsPage?keyword=${item.id}`} 
                                className="block w-full hover:transform hover:scale-[1.02] transition-transform duration-200"
                            >
                                <div className="cardvert bg-white/5 backdrop-blur-sm w-full">
                                    <div className="lg:grid lg:grid-cols-7 p-4 w-full gap-4">
                                        <div className="col-span-2 flex items-center justify-center">
                                            <img 
                                                src={item.src} 
                                                alt={item.title}
                                                loading="lazy" 
                                                className="scale-image rounded-lg shadow-lg w-full h-auto object-cover"
                                            />
                                        </div>
                                        <div className="col-span-5 flex items-center p-4">
                                            <h2 className="apptext">{item.title}</h2>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Contact Section */}
                    <div className="lg:sticky lg:top-8 w-full">
                        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 space-y-6 w-full">
                            <h2 className="apptext text-center mb-8">Contact Us</h2>
                            
                            <div className="space-y-4 text-center mb-8">
                                <div className="apptextminib">Phone:</div>
                                <div className="apptext">
                                    <Callto phone="(204)342-2814">
                                        (204) 342-2814
                                    </Callto>
                                </div>
                            </div>

                            <div className="apptextminib text-center mb-6">
                                Any comments or questions?
                            </div>
                            
                            <Contact/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="h-20"/> {/* Bottom spacing */}
        </div>
    )
}
