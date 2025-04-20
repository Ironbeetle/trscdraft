

const TRSCProg3 = () => {
    return (
     <div className="p-4 h-full">
        <div className="flex flex-col justify-evenly mb-4 p-4 border-2 bg-opacity-40 bg-gray-200 h-full">
            <div className="flex justify-center">
                <div className="apptext">
                    Food Fish Program
                </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
                <div className="flex justify-center items-center">
                    <img src="/ffprogimg1.jpg" loading="lazy" className="scale-image"/>
                </div>
                <div className="flex justify-center items-center">
                    <img src="/ffprogimg2.jpg" loading="lazy" className="scale-image"/>
                </div>
                <div className="flex justify-center items-center">
                    <img src="/ffprogimg3.jpg" loading="lazy" className="scale-image"/>
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="apptext p-4 w-full">
                    The program allows members to continue to fish and
                    provide a wholesome supply of food fish.
                    <br/>It replaces fish no longer available due to increased
                    mercury levels.
                </div>
            </div>
        </div>
     </div>
    )
}

export default TRSCProg3