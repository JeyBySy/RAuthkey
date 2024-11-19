import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import logo from '../../../assets/logo-clear.png'
import ApplicationService from '../../../services/applicationService';
import { Copy, Pencil, KeySquare, SquareAsterisk, Ban, CircleCheck, ArrowLeft, Eye } from "lucide-react"

const AppDetails = () => {
    const navigate = useNavigate()
    const { appId } = useParams()
    const [application, setApplication] = useState()
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleBack = () => {
        navigate('/application')
    }


    useEffect(() => {
        singleApplications();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    const singleApplications = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const data = await ApplicationService.getAllApplications(appId);

            if (data.success) {
                setApplication(data.projects);
            } else {
                setError(`No application with id: ${appId} exist.`);
            }
        } catch (error) {
            setError('Failed to fetch applications. Please try again later.');
        } finally {
            setIsLoading(false);
        }
    };

    const mutedStyle = 'text-gray-300'
    const authStyles = 'bg-elephant-600 px-3 py-1 lg:w-[750px] w-full rounded flex text-end items-center'
    const actionButtonStyles = 'w-full rounded p-3 capitalize flex items-center justify-center gap-2'
    const actionIconStyles = "w-[15%] flex justify-center"
    const actionTitleStyle = 'w-[85%] justify-center flex'


    return (
        <div className='lg:w-full container mx-auto'>
            {isLoading ? (
                <div>Loading...</div>
            ) : error ? (
                <div className='text-center flex flex-col'>
                    {error}
                </div>
            ) : (
                <>
                    <button onClick={handleBack} className="flex text-lg font-bold items-center pb-3 w-fit gap-2 text-slate-400 hover:text-slate-100">
                        <ArrowLeft />Back
                    </button>
                    <div className="flex flex-col gap-2 text-sm">
                        {/* <div>{application?.project_code}</div> */}
                        {/* <div>{application?.project_owner_user_id}</div> */}
                        <div className="w-full bg-elephant-800 py-4">
                            <div className="flex item-center">
                                <div className="w-full px-4">
                                    <div className="flex items-center">
                                        <img src={logo} alt="icon" className='flex items-center justify-center h-[80px] w-[80px] object-contain' />
                                        <div className="text-2xl">
                                            {application?.project_name}
                                            <p className={`${mutedStyle} text-xs`}>{application?.project_associate}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full flex flex-col gap-2">
                                    <div className="flex flex-row  w-full gap-2 items-center justify-end">
                                        <div className="bg-[#22aa22] right-0 top-0 rounded-l-full">
                                            <p className="text-xs text-white px-2 w-[120px] text-center py-1 capitalize">
                                                Active
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col w-full gap-2 items-end justify-end px-4">
                                        <div className="flex gap-2 text-white font-bold">
                                            <p className={`${mutedStyle}`}>Created At:</p>
                                            {application?.createdAt}
                                        </div>
                                        <div className="flex gap-2 text-white  font-bold">
                                            <p className={`${mutedStyle}`}> Last Update: </p>
                                            {application?.updatedAt}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-2 flex-col lg:flex-row items-start mt-2 px-4">
                                <div className={authStyles}>
                                    <p className={`${mutedStyle}`}>AuthKey:</p>
                                    <p className="text-center w-full">
                                        {application?.project_auth_key}
                                    </p>
                                    <div className="flex flex-row">
                                        <button className="p-4">
                                            <Eye color="white" width={17} height={17} />
                                        </button>
                                        <button className="p-4">
                                            <Copy color="white" width={17} height={17} />
                                        </button>
                                    </div>
                                </div>
                                <div className={authStyles}>
                                    <p className={`${mutedStyle}`}>AuthSecret:</p>
                                    <p className="text-center w-full">
                                        {application?.project_auth_secret}
                                    </p>
                                    <div className="flex flex-row">
                                        <button className="p-4">
                                            <Eye color="white" width={17} height={17} />
                                        </button>
                                        <button className="p-4">
                                            <Copy color="white" width={17} height={17} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <section className="flex">
                            {/* Users Table */}
                            <div className="p-2 w-5/6 h-fit">
                                <div className="flex flex-col gap-2">
                                    <p className="text-lg bg-elephant-800 p-2 ">Users</p>
                                    <section className="flex flex-col gap-2 text-justify">
                                        <table className="">
                                            <th>Username</th>
                                            <th>Email</th>
                                            <th>FullName</th>
                                            <th>Associate</th>
                                            <th>CreatedAt</th>
                                            <tr>
                                                <td>sample</td>
                                                <td>sample</td>
                                                <td>sample</td>
                                                <td>sample</td>
                                                <td>sample</td>
                                            </tr>
                                            <tr>
                                                <td>sample</td>
                                                <td>sample</td>
                                                <td>sample</td>
                                                <td>sample</td>
                                                <td>sample</td>
                                            </tr>
                                            <tr>
                                                <td>sample</td>
                                                <td>sample</td>
                                                <td>sample</td>
                                                <td>sample</td>
                                                <td>sample</td>
                                            </tr>
                                            <tr>
                                                <td>sample</td>
                                                <td>sample</td>
                                                <td>sample</td>
                                                <td>sample</td>
                                                <td>sample</td>
                                            </tr>
                                        </table>
                                        {/* <p className="w-full flex text-center justify-center capitalize">No registered users</p> */}
                                    </section>
                                </div>
                            </div>
                            {/* Actions */}
                            <div className="p-2 w-1/6 h-fit flex flex-col gap-5">
                                <div className="flex flex-col gap-2">
                                    <p className=" w-full text-lg bg-elephant-800 p-2 ">Actions</p>
                                    <section className="flex flex-col gap-2 items-start">
                                        <button className={`${actionButtonStyles} bg-blue-400 hover:bg-blue-500`}>
                                            <p className={actionIconStyles}><Pencil width={18} height={18} /></p>
                                            <p className={actionTitleStyle}>Edit Application</p>
                                        </button>
                                        <button className={`${actionButtonStyles}actionButtonStyles bg-elephant-400 hover:bg-elephant-500`}>
                                            <p className={actionIconStyles}><KeySquare width={18} height={18} /></p>
                                            <p className={actionTitleStyle}>Generate New Authkeys </p>
                                        </button>
                                        <button className={`${actionButtonStyles} bg-elephant-400 hover:bg-elephant-500 `}>
                                            <p className={actionIconStyles}><SquareAsterisk width={18} height={18} /></p>
                                            <p className={actionTitleStyle}>Generate New AuthSecret</p>
                                        </button>
                                        <button className={`${actionButtonStyles} bg-red-400 hover:bg-red-500`}>
                                            <p className={actionIconStyles}><Ban width={18} height={18} /></p>
                                            <p className={actionTitleStyle}>Disable Application</p>
                                        </button>
                                        <button className={`${actionButtonStyles}actionButtonStyles bg-green-500 hover:bg-green-600 text-white`}>
                                            <p className={actionIconStyles}><CircleCheck width={18} height={18} /></p>
                                            <p className={actionTitleStyle}>Enable Application</p>
                                        </button>
                                    </section>
                                </div>
                                {/* <div className="flex flex-col gap-2">
                                <div className="w-full">
                                    <p className="text-lg bg-elephant-800 p-2">Users</p>
                                </div>
                                <section className="flex flex-col gap-2 text-justify">
                                    <div>Invite</div>
                                </section>
                            </div> */}

                            </div>

                        </section>
                    </div>
                </>
            )
            }
        </div >

    )
}

export default AppDetails