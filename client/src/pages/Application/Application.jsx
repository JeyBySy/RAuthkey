import { useState, useEffect } from 'react';
import Modal from '../../components/Global/Modal/Modal';
import logo from '../../assets/logo-clear.png'
import ApplicationsCard from '../../components/Applications/ApplicationsCard';

import ApplicationService from '../../services/applicationService';


const Application = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const [applications, setApplications] = useState();


    useEffect(() => {
        fetchApplications();
    }, []);


    const fetchApplications = async () => {
        try {
            const data = await ApplicationService.getAllApplications();
            setApplications(data);
        } catch (error) {
            console.error('Error fetching applications:', error);
        }
    };

    return (
        <>
            <Modal isOpen={isModalOpen} onClose={closeModal} modalTitle={'Create new application'}>
                <form className=''>
                    <div className='flex flex-col'>
                        <div>
                            <label htmlFor="appName" className="block mb-2 font-semibold">Application Name</label>
                            <input id="appName" type="text" className="border border-gray-300 p-2 rounded w-full input" name='project_name' placeholder='My Application' />
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
                        <h1 className="text-4xl">Applications</h1>
                        <span className='text-gray-500'>Create new application for authentication</span>
                    </div>
                    <button className="w-[250px] bg-elephant-400  py-2 rounded hover:bg-elephant-500 h-fit flex items-center justify-center gap-2" onClick={openModal}>
                        <svg className="w-3 h-3 text-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                        </svg>
                        <p>Create application</p>
                    </button>
                </div>
                <div className="flex flex-col px-5 gap-2 overflow-auto transition-all ease-in">
                    {applications?.projects.map((project) => (
                        <div key={project.project_code} className='lg:w-fit w-full mx-auto'>
                            <ApplicationsCard projectCode={project.project_code} projectLogo={logo} projectName={project.project_name} />
                        </div>
                        //     <h2>{project.project_name}</h2>
                        //     <p>Code: {project.project_code}</p>
                        //     <p>Associate: {project.project_associate}</p>
                        //     <p>Auth Key: {project.project_auth_key}</p>
                        //     <p>Auth Secret: {project.project_auth_secret}</p>
                        //     <p>Owner User ID: {project.project_owner_user_id}</p>
                        //     <p>Created At: {new Date(project.createdAt).toLocaleString()}</p>
                        //     <p>Updated At: {new Date(project.updatedAt).toLocaleString()}</p>
                        // </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Application