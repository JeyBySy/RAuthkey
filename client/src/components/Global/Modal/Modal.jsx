import { motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
const Modal = ({ isOpen, onClose, children, modalTitle }) => {
    if (!isOpen) return null;

    const handleOutsideClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };
    return (
        <div className="backdrop-blur-sm fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 text-white cursor-pointer z-20" onClick={handleOutsideClick}>
            <motion.div
                initial={{ scale: 0.92 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="drop-shadow-2xl z-2 bg-elephant-900 rounded-lg shadow-lg w-[95%] sm:max-w-[500px] lg:w-[40%]  lg:absolute lg:top-[10%] overflow-hidden flex flex-col" onClick={(e) => e.stopPropagation()}>
                <div className="flex p-6">
                    <h2 className="text-xl font-semibold w-[96%]">{modalTitle}</h2>
                    <button className=" absolute right-5 w-6 h-6 bg-gray-500 rounded-full flex items-center justify-center hover:bg-slate-400 text-sm transition text-gray-100" onClick={handleOutsideClick}>&#10005;</button>
                </div>
                <div className="flex-1 overflow-auto p-5 bg-elephant-800 rounded-tl-lg rounded-tr-lg border-y-[1px] border-gray-600">
                    {children}
                </div>
            </motion.div>
        </div>
    );
};

export default Modal