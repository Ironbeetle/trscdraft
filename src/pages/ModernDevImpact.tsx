import React from "react";
import { Link } from "react-router-dom"
import { buttonVariants } from "@/components/ui/button";
import { CarouselItem } from "@/components/ui/carousel";
import { Imgcarousel } from "@/components/imgcarousel";
import { motion } from "framer-motion";

const TCN = React.lazy(() => import('@/components/TCNmap'));
export default function ModernDevImpact() {
    return (
        <div className="w-screen h-screen pagebkg overflow-y-scroll">
            <div className="navbtn">
                <Link to="/" className={buttonVariants({ variant: "secondary" })}>Back</Link>
            </div>
            <div className="tcnwaterbkg border-b-4 border-yellow-700">
                <div className="h-full flex flex-col justify-end items-center">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="bg-opacity-50 bg-gray-200 p-4 mb-4"
                    >
                        <div className="apptextlg">
                            Tataskweyak Cree Nation
                        </div>
                    </motion.div>
                </div>
            </div>
            <div className="spacer"/>
            <div className="lg:mt-16">
                <div className="grid lg:grid-cols-2 p-4">
                    <div className="flex flex-col justify-center p-4 mb-6">
                        <div className="apptext p-4">
                            Tataskweyak Cree Nation is a community of about 2,300 people on the shore of
                            <br/> Split Lake, Manitoba.
                        </div>  
                    </div>
                    <div className="flex justify-center">
                        <div className="lg:mt-6 map-container">
                            <TCN/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="spacer"/>
            <div className="flex flex-col justify-center items-center">
                <div className="apptextlg">
                    Water
                </div>  
                <div className="apptext">
                    Giver of Life
                </div>  
            </div>
            <div className="spacer"/>  
            <div className="grid lg:grid-cols-2 flex justify-center">
                <div className="flex flex-col justify-center p-4">
                    <div className="apptext p-4">
                    Since time immemorial, water has been central to the lives of the Tataskweyak Cree.<br/>
                    It provides sustenance, and a means of travel.
                    </div>  
                </div>
                <div className="flex justify-center items-center lg:p-4">
                    <img src="/historyimg1.jpg" loading="lazy" className="scale-image"/>             
                </div>
            </div>
            <div className="spacer"/>
            <div className="lg:mt-16">
                <div className="grid lg:grid-cols-2 flex justify-center">
                    <div className="flex justify-center items-center lg:p-4">
                        <img src="/cleanWater.jpg" loading="lazy" className="scale-image"/>
                    </div>
                    <div className="flex flex-col justify-evenly h-full">
                        <div className="mt-8 apptext p-4">
                        Before the Churchill River Diversion Project, and the Lake Winnipeg Regulation,<br/> 
                        Split Lake had clean water and a healthy ecosystem.
                        </div>  
                    </div>
                </div>
            </div>
            <div className="spacer"/>
            <div className="flex flex-col justify-center">
                <div className="apptextBold">
                    Impact On Split Lake
                </div>  
            </div>
            <div className="spacer"/>
            <div className="grid lg:grid-cols-5" id="landimpact">
                <div className="col-span-2 flex">
                    <div className="flex flex-col justify-center items-center">
                        <div className="apptext p-4">
                            Split Lake water quality is determined by the Nelson River and the Burntwood River.<br/>
                            Each of these rivers bring thier own water quality issues to Split Lake.
                        </div>  
                    </div>
                </div>
                <div className="col-span-3 flex flex-col justify-center items-center">
                    <img src="/Burntwood_NelsonFacingTCN.jpg" loading="lazy"  className="scale-image"/>
                </div>
            </div>
            <div className="spacer"/>
            <div className="lg:mt-16 grid lg:grid-cols-2" id="landimpact">
                <Imgcarousel>
                    <CarouselItem className="flex justify-center items-center">
                        <img src="/NRfrmLKWPG1.jpg" loading="lazy" className="scale-image"/>
                    </CarouselItem>
                    <CarouselItem className="flex justify-center items-center">
                        <img src="/NRfrmLKWPG2.jpg" loading="lazy" className="scale-image"/>
                    </CarouselItem>
                    <CarouselItem className="flex justify-center items-center">
                        <img src="/NRfrmLKWPG3.jpg" loading="lazy" className="scale-image"/>
                    </CarouselItem>
                    <CarouselItem className="flex justify-center items-center">
                        <img src="/NRfrmLKWPG4.jpg" loading="lazy" className="scale-image"/>
                    </CarouselItem>
                    <CarouselItem className="flex justify-center items-center">
                        <img src="/NRfrmLKWPG5.jpg" loading="lazy" className="scale-image"/>
                    </CarouselItem>
                </Imgcarousel> 
                <div className="flex flex-col justify-evenly">
                    <div className="flex flex-col justify-center items-center p-4">
                        <div className="apptextBold mb-4">
                            Nelson River<br/>
                        </div>  
                        <div className="apptext mt-4 p-4">
                            <ul>
                                <li className="apptext py-4">High in nutrients</li>
                                <li className="apptext py-4">Sewage from City of Winnipeg</li>
                                <li className="apptext py-4">Lake Winnipeg Regulation</li>
                                <li className="apptext py-4">Agricultural chemicals</li>
                            </ul>
                        </div>  
                    </div>
                </div>
            </div>
            <div className="spacer"/>
            <div className="lg:mt-16 grid lg:grid-cols-2" id="landimpact">
                <div className="flex flex-col justify-evenly">
                    <div className="flex flex-col justify-center items-center p-4">
                        <div className="apptextBold mb-4">
                            Burntwood River/Odei River<br/>
                        </div>  
                        <div className="apptext mt-4 p-4">
                            <ul>
                                <li className="apptext py-4">High in sediment</li>
                                <li className="apptext py-4">Loss of Delta complex</li>
                                <li className="apptext py-4">Mine tailings</li>
                            </ul>
                        </div>  
                    </div>
                </div>
                <Imgcarousel>
                    <CarouselItem className="flex justify-center">
                        <img src="/BRfrmCRD1.jpg" loading="lazy" className="scale-image"/>
                    </CarouselItem>
                    <CarouselItem className="flex justify-center">
                        <img src="/BRfrmCRD2.jpg" loading="lazy" className="scale-image"/>
                    </CarouselItem>
                    <CarouselItem className="flex justify-center">
                        <img src="/BRfrmCRD3.jpg" loading="lazy" className="scale-image"/>
                    </CarouselItem>
                    <CarouselItem className="flex justify-center">
                        <img src="/BRfrmCRD4.jpg" loading="lazy" className="scale-image"/>
                    </CarouselItem>
                    <CarouselItem className="flex justify-center">
                        <img src="/BRfrmCRD5.jpg" loading="lazy" className="scale-image"/>
                    </CarouselItem>
                </Imgcarousel> 
            </div>
            <div className="spacer"/>
            {/* degraded water quality water quality impact on Split Lake */}
            <div className="flex flex-col justify-center">
                <div className="apptextBold">
                High Sediment Load Effects
                </div>  
            </div>
            <div className="spacer"/>
            <div className="sedimentbkg grid lg:grid-cols-6">
                <div className="col-span-3">
                    <ul className="flex flex-col justify-evenly apptext h-full mt-8">
                        <li className="h-1/4 p-4">
                            Reduced water clarity limits light penetration greatly
                            impacting aquatic plants.
                        </li>
                        <li className="h-1/4 p-4">
                            Spaces between rocks and gravel 
                            that are crucial habitat for aquatic insects and fish spawning are clogged.
                        </li>
                        <li className="h-1/4 p-4">
                            Clogs fish gills and smothers bottom dwelling organisms.
                        </li>
                    </ul>  
                </div>
                <div className="col-span-3"/>
            </div>
            <div className="spacer"/>
            <div className="grid lg:grid-cols-2">
                <Imgcarousel>
                    <CarouselItem className="flex justify-center">
                        <img src="/waterfoamshore.jpg" loading="lazy" className="scale-image75"/>
                    </CarouselItem>
                    <CarouselItem className="flex justify-center">
                        <img src="/waterdock.jpg" loading="lazy" className="scale-image75"/>
                    </CarouselItem>
                    <CarouselItem className="flex justify-center">
                        <img src="/sludgejar.jpg" loading="lazy" className="scale-image75"/>
                    </CarouselItem>
                    <CarouselItem className="flex justify-center">
                        <img src="/deadfish.jpg" loading="lazy" className="scale-image75"/>
                    </CarouselItem>
                    <CarouselItem className="flex justify-center">
                        <img src="/badffishskin.jpg" loading="lazy" className="scale-image75"/>
                    </CarouselItem>
                </Imgcarousel> 
                <div className="flex flex-col justify-evenly items-center h-full p-4">
                    <div className="apptextBold">
                        Degraded Water Quality
                    </div>  
                    <div className="apptext p-4">
                        The high nutrient load caused a nutrient imbalance to Split Lake. This encourages 
                        algae growth.
                    </div>  
                    <div className="apptext p-4">
                        In 2021 - 2022 low concentrations of Cylindrospermopsin was found in open water and under ice.
                    </div>  
                </div>
            </div>
            <div className="spacer"/>
            <div className="flex flex-col justify-center">
                <div className="apptextBold">
                    The End Of Commercial Fishing
                </div>  
            </div>
            <div className="spacer"/>
            <div className="grid lg:grid-cols-2">
                <div className="flex flex-col justify-center items-center p-4">
                    <div className="apptext p-4">
                        Commercial fishing on Split Lake, a once viable means of income has disapeared. 
                    </div>  
                </div>
                <div className="flex flex-col items-center p-4">
                    <img src="/lastfishSplitLake.jpg" loading="lazy"  className="scale-image"/>
                </div>
            </div>
    
            <div className="spacer"/>
            <div className="flex flex-col justify-center">
                <div className="apptextBold">
                    Associated Health Issues
                </div>  
            </div>
            <div className="spacer"/>
            <div className="grid lg:grid-cols-2">
                <div className="flex flex-col justify-center items-center">
                    <img src="/swimsignwide.jpg" loading="lazy" className="scale-image"/>
                </div>
                <div className="flex flex-col justify-center items-center p-4">
                    <div className="apptext p-4">
                        There has been a rise in illnesses related to water contamination.
                    </div>  
                    <div className="apptext p-4">
                        Swimming is no longer safe due to skin irritations from the water.
                    </div>  
                </div> 
            </div>
            <div className="spacer"/>


        </div>
    )
}