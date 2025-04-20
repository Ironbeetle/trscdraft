

const TRSCProg4 = () => {
    return (
     <div className="p-4 h-full">
        <div className="flex flex-col justify-evenly mb-4 p-4 border-2 bg-opacity-40 bg-gray-200 h-full">
            <div className="flex justify-center">
                <div className="apptext">
                    Traditional Foods
                </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
                <div className="flex justify-center items-center">
                    <img src="/tfprogimg1.jpg" loading="lazy" className="scale-image"/>
                </div>
                <div className="flex justify-center items-center">
                    <img src="/tfprogimg2.jpg" loading="lazy" className="scale-image"/>
                </div>
                <div className="flex justify-center items-center">
                    <img src="/tfprogimg3.jpg" loading="lazy" className="scale-image"/>
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="apptext">
                    The traditional foods program provides opportunities
                    for members to gather and share traditional foods.
                    <br/><br/>
                </div>
            </div>
        </div>
     </div>
    )
}

export default TRSCProg4