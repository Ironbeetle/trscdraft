
const TRSCProg8 = () => {
    return (
     <div className="p-4 h-full">
        <div className="flex flex-col justify-evenly mb-4 p-4 border-2 bg-opacity-40 bg-gray-200 h-full">
            <div className="flex justify-center">
                <div className="apptext">
                    Museum & Oral History
                </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
                <div className="flex justify-center items-center">
                    <img src="/mhprogimg1.jpg" loading="lazy" className="scale-image"/>
                </div>
                <div className="flex justify-center items-center">
                    <img src="/mhprogimg2.jpg" loading="lazy" className="scale-image"/>
                </div>
                <div className="flex justify-center items-center">
                    <img src="/mhprogimg3.jpg" loading="lazy" className="scale-image"/>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="apptext">
                    The program is to provide a substitute opportunity
                    for TCN and members to maintain the historical connection
                    to the land, that will be destroyed when the keeyask dam
                    is built.
                </div>
            </div>
        </div>
     </div>
    )
}
export default TRSCProg8