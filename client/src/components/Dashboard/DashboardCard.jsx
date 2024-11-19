// eslint-disable-next-line react/prop-types
const DashboardCard = ({ children, cardTitle, className }) => {
    return (
        <div className={`flex flex-col shadow-elephant-700 shadow-md rounded-md p-4 w-fit ${className}`}>
            <h3 className="text-lg font-semibold mb-2">{cardTitle}</h3>
            <div>{children}</div>
        </div>
    );
};


export default DashboardCard