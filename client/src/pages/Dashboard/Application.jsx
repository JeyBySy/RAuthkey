import { useState } from 'react';
import Modal from '../../components/Modal/Modal';
import logo from '../../assets/logo-clear.png'


const Application = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            <Modal isOpen={isModalOpen} onClose={closeModal} modalTitle={'Create New Applicationdasd dasd qwdasdaswqd asasdwq dasdwqasd qwdasd wqdasd dwqafasdasd qwdasfasdasdwd asd qwf asdsaadqwd asd qwdasdqw dasdqwda sdwqasdasdwqfasdqwdasd'}>
                <form className=''>
                    <label htmlFor="appName" className="block mb-2">Application Name</label>
                    <input id="appName" type="text" className="border border-gray-300 p-2 rounded w-full input" name='project_name' />
                    <label htmlFor="appName" className="block mb-2">Application Name</label>
                    <input id="appName" type="text" className="border border-gray-300 p-2 rounded w-full input" name='project_name' />
                    <label htmlFor="appName" className="block mb-2">Application Name</label>
                    <input id="appName" type="text" className="border border-gray-300 p-2 rounded w-full input" name='project_name' />
                    <label htmlFor="appName" className="block mb-2">Application Name</label>
                    <input id="appName" type="text" className="border border-gray-300 p-2 rounded w-full input" name='project_name' />
                    <label htmlFor="appName" className="block mb-2">Application Name</label>
                    <input id="appName" type="text" className="border border-gray-300 p-2 rounded w-full input" name='project_name' />
                    <label htmlFor="appName" className="block mb-2">Application Name</label>
                    <input id="appName" type="text" className="border border-gray-300 p-2 rounded w-full input" name='project_name' />
                    <label htmlFor="appName" className="block mb-2">Application Name</label>
                    <input id="appName" type="text" className="border border-gray-300 p-2 rounded w-full input" name='project_name' />
                    <label htmlFor="appName" className="block mb-2">Application Name</label>
                    <input id="appName" type="text" className="border border-gray-300 p-2 rounded w-full input" name='project_name' />
                    <label htmlFor="appName" className="block mb-2">Application Name</label>
                    <input id="appName" type="text" className="border border-gray-300 p-2 rounded w-full input" name='project_name' />
                    <button type="submit" className="mt-4 bg-elephant-400 py-1 px-4 rounded text-white hover:bg-elephant-500" > Create </button>
                </form>
            </Modal>
            <div className='w-full'>
                <div className="flex mb-5">
                    <div className='w-full leading-8'>
                        <h1 className="text-4xl">Applications</h1>
                        <span className='text-gray-500'>Create new application for authentication</span>
                    </div>
                    <button className="w-[250px] bg-elephant-400  py-2 rounded hover:bg-elephant-500 h-fit" onClick={openModal}>
                        + Create application
                    </button>
                </div>
                <div className="flex flex-col px-5 overflow-auto h-[77vh] transition-all ease-in">
                    {/* Applications */}
                    <div className='border-b-[1px] cursor-pointer border-elephant-800 p-2 flex gap-5 hover:bg-elephant-800'>
                        <div className="w-fit">
                            <img src={logo} alt="icon" className='flex items-center justify-center h-[50px] w-[60px] object-contain' />
                        </div>

                        {/* Name section */}
                        <div className="flex w-1/2 items-center ">
                            <span className='overflow-hidden text-ellipsis whitespace-nowrap font-semibold'>
                                TEST-APP-NAME
                            </span>
                        </div>

                        {/* Client ID section */}
                        <div className="flex items-center w-full  text-gray-400 overflow-hidden text-ellipsis whitespace-nowrap">
                            Client ID: <span className='text-white text-sm rounded px-1 ml-1 overflow-hidden text-ellipsis whitespace-nowrap'>
                                test-client-id
                            </span>
                        </div>

                        {/* Icon section */}
                        <div className="flex w-fit items-center justify-center">
                            <div className='cursor-pointer'>
                                <p className='tracking-widest text-lg px-5 flex'>...</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Application