import { Copy, User } from "lucide-react"
import { NavLink } from "react-router-dom"

// eslint-disable-next-line react/prop-types
const ApplicationsCard = ({ projectCode, projectLogo, projectName, projectAuthKey, projectAuthSecret }) => {
    return (
        <NavLink to={projectCode}>
            <div className=' p-4 flex flex-col mx-auto w-full lg:w-full lg:max-w-[800px] relative'>
                <div className="absolute bg-[#22aa22] right-0 top-2 rounded-l-full">
                    <p className="text-xs text-white font-black px-2 w-[90px] text-center  py-1 capitalize">
                        Active
                    </p>
                </div>
                {/* <div className="absolute bg-[#b6b7b5] right-0 top-2 rounded-l-full">
                    <p className="text-xs text-zinc-700 px-2 w-[90px] text-center  py-1 capitalize">
                        Disabled
                    </p>
                </div> */}

                <div className="flex items-center flex-row max-w-[600px] ">
                    <div className="w-fit">
                        <img src={projectLogo} alt="icon" className='flex items-center justify-center h-[50px] w-[60px] object-contain' />
                    </div>
                    <div className="flex max-w-[80%] items-center">
                        <div className='overflow-hidden text-ellipsis whitespace-nowrap font-black text-xl '>
                            {projectName}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-2 w-full">
                    {/* Auth Key */}
                    <div className="flex px-2  text-xs  rounded items-center w-full text-gray-300 overflow-hidden text-ellipsis whitespace-nowrap bg-elephant-600">
                        <p className="min-w-[70px]"> AuthKey:</p>
                        <div className='text-white text-sm w-full px-1 overflow-hidden text-ellipsis whitespace-nowrap'>
                            {projectAuthKey}
                        </div>
                        <button className="p-4">
                            <Copy color="white" width={17} height={17} />
                        </button>
                    </div>
                    {/* Auth Secret */}
                    <div className="flex px-2 text-xs  rounded items-center w-full text-gray-300 overflow-hidden text-ellipsis whitespace-nowrap bg-elephant-600">
                        <p className="min-w-[70px]"> AuthSecret:</p>
                        <div className='text-white text-sm w-full px-1 overflow-hidden text-ellipsis whitespace-nowrap'>
                            {projectAuthSecret}
                        </div>
                        <button className="p-4">
                            <Copy color="white" width={17} height={17} />
                        </button>
                    </div>
                </div>
                <div className="flex items-center mt-2 justify-start w-fit">
                    <User width={20} height={20} /><span className="font-black"> 100</span>
                </div>


            </div>
        </NavLink>
    )
}

export default ApplicationsCard