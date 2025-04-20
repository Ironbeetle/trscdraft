
const TRSCProg1 = () => {
    return (
     <div className="p-4 h-full">
        <div className="flex flex-col justify-evenly p-4 border-2 bg-opacity-40 bg-gray-200 h-full">
            <div className="flex justify-center">
                <div className="apptext">
                    Access Program
                </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
                <div className="flex justify-center items-center">
                    <img src="/approgimg1.jpg" loading="lazy" className="scale-image"/>
                </div>
                <div className="flex justify-center items-center">
                    <img src="/approgimg2.jpg" loading="lazy" className="scale-image"/>
                </div>
                <div className="flex justify-center items-center">
                    <img src="/approgimg3.jpg" loading="lazy" className="scale-image"/>
                </div>
            </div>
            <div className="apptext p-4 w-full">
                The access program addresses the
                loss of opportunities to maintain traditional practices
                to hunt, fish and trap for food in the TCN Resource Management Area.
            </div>
        </div>
     </div>
    )
}

export default TRSCProg1