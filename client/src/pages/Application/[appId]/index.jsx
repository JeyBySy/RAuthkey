import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import logo from '../../../assets/logo-clear.png'
import ApplicationService from '../../../services/applicationService';
import { Copy } from "lucide-react"

const AppDetails = () => {
    const { appId } = useParams()
    const [application, setApplication] = useState()
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

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

    return (
        <div className='lg:w-full container mx-auto'>
            {isLoading ? (
                <div>Loading...</div>
            ) : error ? (
                <div className='text-center flex flex-col'>
                    {error}
                </div>
            ) : (
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
                                <button className="p-4">
                                    <Copy color="white" width={17} height={17} />
                                </button>
                            </div>
                            <div className={authStyles}>
                                <p className={`${mutedStyle}`}>AuthSecret:</p>
                                <p className="text-center w-full">
                                    {application?.project_auth_secret}
                                </p>
                                <button className="p-4">
                                    <Copy color="white" width={17} height={17} />
                                </button>
                            </div>
                        </div>
                    </div>
                    <section className="flex">
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
                        <div className="p-2 w-1/6 h-fit flex flex-col gap-5">
                            <div className="flex flex-col gap-2">
                                <p className=" w-full text-lg bg-elephant-800 p-2 ">Actions</p>
                                <section className="flex flex-col gap-2 items-start">
                                    <button className="w-full rounded p-2 capitalize bg-elephant-400 hover:bg-elephant-500">Generate New Authkeys</button>
                                    <button className="w-full rounded p-2 capitalize bg-elephant-400 hover:bg-elephant-500">Generate New AuthSecret</button>
                                    <button className="w-full rounded p-2 capitalize bg-red-400 hover:bg-red-500">Disable Application </button>
                                    <button className="w-full rounded p-2 capitalize bg-green-400 hover:bg-green-500 text-gray-700">Enable Application </button>
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
            )}
        </div>

    )
}

export default AppDetails