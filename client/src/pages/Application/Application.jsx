import { useState, useEffect } from 'react';
import Modal from '../../components/Global/Modal/Modal';
import logo from '../../assets/logo-clear.png'
import ApplicationsCard from '../../components/Applications/ApplicationsCard';

import ApplicationService from '../../services/applicationService';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

import { useToast } from '../../context/ToastContext';


const Application = () => {
    const navigate = useNavigate()
    const { addToast } = useToast();
    const { updateCsrfToken } = useAuth()

    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const [applications, setApplications] = useState();
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const [applicationName, setApplicationName] = useState();
    const [applicationNameError, setApplicationNameError] = useState(null)


    useEffect(() => {
        fetchApplications();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    const fetchApplications = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const data = await ApplicationService.getAllApplications();

            if (data.success && data.projects.length != 0) {
                setApplications(data.projects);
            } else {
                setError(`No application exist. Create new application`);
            }
        } catch (error) {
            setError('Failed to fetch applications. Please try again later.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleSubmitApplication = async (e) => {
        e.preventDefault()
        try {
            const applicationData = { project_name: applicationName };
            const response = await ApplicationService.createApplication(applicationData);
            // console.log('Application created:', response);

            // Updating CSRF token after success action
            if (response.csrfToken) updateCsrfToken(response.csrfToken);

            setApplicationName('');
            closeModal();
            addToast('Successfully created ', 'success');
            navigate(`/application/${response?.project_code}`)
        } catch (error) {
            setApplicationNameError(error.response?.data?.message)
        }
    }

    const handleChangeName = (e) => {
        setApplicationName(e.target.value)
    }


    return (
        <>
            <Modal isOpen={isModalOpen} onClose={closeModal} modalTitle={'Create new application'}>
                <form onSubmit={handleSubmitApplication}>
                    <div className='flex flex-col'>
                        <div>
                            <label htmlFor="appName" className="block mb-2 text-sm font-semibold">Application Name</label>
                            <input required onChange={handleChangeName} id="appName" type="text" className={`border border-gray-300 p-10 rounded w-full bg-elephant-600  ${applicationNameError != null ? ' border-red-600 ' : 'border-elephant-900'} input`} value={applicationName} name='project_name' placeholder='My Application' />
                        </div>
                        <div className='text-sm text-red-300'>
                            {applicationNameError}
                        </div>
                        <div className='w-full items-end flex justify-end'>
                            <button type="submit" className="mt-4 bg-elephant-400 py-1  px-4 rounded text-white hover:bg-elephant-500" > Create </button>
                        </div>

                    </div>
                </form>
            </Modal>
            <div className='lg:w-full container mx-auto'>
                <div className="flex mb-5">
                    <div className='w-full leading-8'>
                        <h1 className="title_page">Applications</h1>
                        <span className='text-gray-500'>Create new application for authentication</span>
                    </div>
                    <button className="w-[250px] bg-elephant-400  py-2 rounded hover:bg-elephant-500 h-fit flex items-center justify-center gap-2" onClick={openModal}>
                        <svg className="w-3 h-3 text-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                        </svg>
                        <p>Create application</p>
                    </button>
                </div>
                {isLoading ? (
                    <div>Loading...</div>
                ) : error ? (
                    <div className='text-center flex flex-col'>
                        {error}
                    </div>
                ) : (
                    <div className="flex flex-row gap-2 flex-wrap justify-start overflow-auto ">
                        {applications?.map((project) => (
                            <div key={project.project_code} className="justify-start rounded-lg border border-elephant-800 hover:border-elephant-300 w-full lg:max-w-[360px] bg-gradient-to-tl from-elephant-700 hover:bg-gradient-to-br hover:from-elephant-600 ">
                                <ApplicationsCard
                                    projectCode={project.project_code}
                                    projectLogo={logo}
                                    projectName={project.project_name}
                                    projectAuthKey={project.project_auth_key}
                                    projectAuthSecret={project.project_auth_secret} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    )
}

export default Application