

const TRSCProg5 = () => {
    return (
     <div className="p-4 h-full">
        <div className="flex flex-col justify-evenly mb-4 p-4 border-2 bg-opacity-40 bg-gray-200 h-full">
            <div className="flex justify-center">
                <div className="apptext">
                    Traditional Knowledge
                </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
                <div className="flex justify-center items-center">
                    <img src="/tkprogimg1.jpg" loading="lazy" className="scale-image"/>
                </div>
                <div className="flex justify-center items-center">
                    <img src="/tkprogimg2.jpg" loading="lazy" className="scale-image"/>
                </div>
                <div className="flex justify-center items-center">
                    <img src="/tkprogimg3.jpg" loading="lazy" className="scale-image"/>
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="apptext">
                    The program was created to replace opportunities for
                    hunting and trapping members for traditional learning that will be lost due
                    to the development and construction of the Keeyask project.
                </div>
            </div>
        </div>
     </div>
    )
}

export default TRSCProg5