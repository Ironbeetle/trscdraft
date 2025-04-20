
const TRSCProg2 = () => {
    return (
     <div className="p-4 h-full">
        <div className="flex flex-col justify-evenly p-4 border-2 bg-opacity-40 bg-gray-200 h-full">
            <div className="flex justify-center">
                <div className="apptext">
                    Land Stewardship
                </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
                <div className="flex justify-center items-center">
                    <img src="/ldprogimg1.jpg" loading="lazy" className="scale-image"/>
                </div>
                <div className="flex justify-center items-center">
                    <img src="/ldprogimg2.jpg" loading="lazy" className="scale-image"/>
                </div>
                <div className="flex justify-center items-center">
                    <img src="/ldprogimg3.jpg" loading="lazy" className="scale-image"/>
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="apptext">
                    The land stewardship program allows members to
                    assist TCN in land stewardship within the Tataskweyak Resource
                    Management Area.
                    <br/><br/>
                </div>
            </div>
        </div>
     </div>
    )
}
export default TRSCProg2