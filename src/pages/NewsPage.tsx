import { useLocation } from "react-router-dom";
import {reel} from "../components/newsreel"
import { Link } from "react-router-dom";
import { buttonVariants } from "@/components/ui/button"

const NewsPage = () => {
    const location = useLocation();
    const keyword = new URLSearchParams(location.search).get("keyword");
    const item = reel.find((item) => item.id === parseInt(keyword || "0"));
    return (
        <>
            <div className="navbtn">
                <Link to="/pages/TRSCnewupdates" className={buttonVariants({ variant: "secondary" })}>Back</Link>
            </div>
        
            <div className="w-screen h-screen flex flex-col justify-center items-center pagebkg">
                <div className="cardvert w-4/5 h-4/5">
                    <div className="flex flex-col justify-center p-4">
                        <div className="flex flex-col justify-center items-center w-full p-4">
                            <img src={item?.src} loading="lazy" className="scale-image"/>
                        </div>
                        <div className="flex flex-col justify-center p-4">
                            {item?.content}
                        </div>
                    </div>
                </div>     
            </div>
        </>
    );
};
export default NewsPage;