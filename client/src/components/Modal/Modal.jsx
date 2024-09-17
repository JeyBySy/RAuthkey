// eslint-disable-next-line react/prop-types
const Modal = ({ isOpen, onClose, children, modalTitle }) => {
    if (!isOpen) return null;

    const handleOutsideClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 text-black cursor-pointer " onClick={handleOutsideClick}>
            <div className="bg-white p-6 rounded shadow-lg max-w-[90%] sm:max-w-[900px] max-h-[80vh] relative overflow-hidden flex flex-col" onClick={(e) => e.stopPropagation()}>
                <div className="flex">
                    <h2 className="text-xl mb-4 font-semibold">{modalTitle}</h2>
                    <button className=" absolute right-8 w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center hover:bg-slate-200 text-sm transition" onClick={handleOutsideClick}>&#10005;</button>
                </div>
                <div className="flex-1 overflow-auto px-2">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal