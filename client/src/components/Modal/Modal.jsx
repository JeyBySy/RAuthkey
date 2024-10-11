// eslint-disable-next-line react/prop-types
const Modal = ({ isOpen, onClose, children, modalTitle }) => {
    if (!isOpen) return null;

    const handleOutsideClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 text-white cursor-pointer " onClick={handleOutsideClick}>
            <div className=" bg-elephant-900 p-6 rounded shadow-lg w-[95%] sm:max-w-[900px] lg:w-[90%] max-h-[80vh] relative overflow-hidden flex flex-col" onClick={(e) => e.stopPropagation()}>
                <div className="flex">
                    <h2 className="text-xl mb-4 font-semibold w-[96%]">{modalTitle}</h2>
                    <button className=" absolute right-5 w-6 h-6 bg-gray-500 rounded-full flex items-center justify-center hover:bg-slate-400 text-sm transition text-gray-100" onClick={handleOutsideClick}>&#10005;</button>
                </div>
                <div className="flex-1 overflow-auto px-2">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal