import { Copy } from "lucide-react"
import { NavLink } from "react-router-dom"

// eslint-disable-next-line react/prop-types
const ApplicationsCard = ({ projectCode, projectLogo, projectName }) => {
    return (
        <NavLink to={projectCode}>
            <div className='border-b-[1px] cursor-pointer border-elephant-800 p-4 rounded flex flex-col  mx-auto border w-full lg:w-fit lg;max-w-[800px] shadow-md'>
                {/* Icon and name Section */}
                <div className="flex items-center flex-row max-w-[600px]">
                    <div className="w-fit">
                        <img src={projectLogo} alt="icon" className='flex items-center justify-center h-[50px] w-[60px] object-contain' />
                    </div>
                    <div className="flex max-w-[80%] items-center">
                        <div className='overflow-hidden text-ellipsis whitespace-nowrap font-black text-xl '>
                            {projectName}
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-2 w-full ">
                    {/* Auth Key */}
                    <div className="flex gap-2 px-2 rounded items-center w-full text-gray-300 overflow-hidden text-ellipsis whitespace-nowrap bg-elephant-800">
                        AuthKey:
                        <div className='text-white text-sm w-full rounded px-1 ml-1 overflow-hidden text-ellipsis whitespace-nowrap'>
                            asdqjkwhd*********************************************idjqwiodjklasjdlaskidjasldilwdj
                        </div>
                        <button className="p-4 rounded">
                            <Copy color="white" width={17} height={17} />
                        </button>
                    </div>
                    {/* Auth Secret */}
                    <div className="flex gap-2 px-2 rounded items-center w-full text-gray-300 overflow-hidden text-ellipsis whitespace-nowrap bg-elephant-800">
                        AuthSecret:
                        <div className='text-white text-sm w-full rounded px-1 ml-1 overflow-hidden text-ellipsis whitespace-nowrap'>
                            asdqjkwhd*********************************************idjqwiodjklasjdlaskidjasldilwdj
                        </div>
                        <button className="p-4 rounded">
                            <Copy color="white" width={17} height={17} />
                        </button>
                    </div>
                </div>

                {/* Icon section */}
                {/* <div className="flex w-fit items-center justify-center">
                    <div className='cursor-pointer'>
                        <p className='tracking-widest text-lg px-5 flex'>...</p>
                    </div>
                </div> */}
            </div>
        </NavLink>
    )
}

export default ApplicationsCard