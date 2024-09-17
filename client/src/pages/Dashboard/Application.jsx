import { useState } from 'react';
import Modal from '../../components/Modal/Modal';


const Application = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="flex flex-col items-center">
            <div className="flex w-[70%] ">
                <h1 className="w-full text-2xl">Applications</h1>
                <button className="w-[250px] bg-elephant-400  py-1 rounded hover:bg-elephant-500" onClick={openModal}>
                    + Create application
                </button>
            </div>
            <Modal isOpen={isModalOpen} onClose={closeModal} modalTitle={'Create New Application'}>
                <form>
                    <label htmlFor="appName" className="block mb-2">Application Name</label>
                    <input id="appName" type="text" className="border border-gray-300 p-2 rounded w-full" />
                    <button type="submit" className="mt-4 bg-elephant-400 py-1 px-4 rounded text-white hover:bg-elephant-500" > Create </button>

                </form>
            </Modal>
        </div>
    )
}

export default Application