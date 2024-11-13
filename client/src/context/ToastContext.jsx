// ToastContext.js
import { createContext, useContext, useState } from 'react';

import { motion } from "framer-motion";

export const ToastContext = createContext();

// ToastProvider Component
// eslint-disable-next-line react/prop-types
export const ToastProvider = ({ children }) => {
    const [toasts, setToasts] = useState([]);

    const addToast = (message, type = 'info') => {
        const id = Date.now();
        setToasts((prevToasts) => [{ id, message, type }, ...prevToasts,]);

        // Automatically remove toast after a delay (e.g., 3 seconds)
        setTimeout(() => {
            setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
        }, 3500);
    };

    const removeToast = (id) => {
        setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
    };

    return (
        <ToastContext.Provider value={{ addToast, removeToast }}>
            {children}
            <div className="fixed z-10 top-2 right-2 ">
                {toasts.map((toast) => (
                    <Toast key={toast.id} {...toast} onClose={() => removeToast(toast.id)} />
                ))}
            </div>
        </ToastContext.Provider>
    );
};

// Custom hook to use the Toast context
// eslint-disable-next-line react-refresh/only-export-components
export const useToast = () => useContext(ToastContext);

// Individual Toast component
// eslint-disable-next-line react/prop-types, no-unused-vars
const Toast = ({ id, message, type, onClose }) => {
    const toastStyles = {
        info: 'bg-blue-500 text-white',
        success: 'bg-green-500 text-white',
        error: 'bg-red-500 text-white',
        warning: 'bg-yellow-500 text-white',
    };

    return (
        <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`${toastStyles[type]} px-4 py-2 mb-2 shadow-lg rounded-sm text-base`} onClick={onClose}>
            {message}
        </motion.div>
    );
};
