/* eslint-disable react/prop-types */
import DashboardCard from './DashboardCard';

const StatisticsCard = ({ title, value, children }) => {
    return (
        <DashboardCard cardTitle={title} className="">
            <div className="flex items-center">
                <div className="text-4xl font-bold">{value}</div>
                {children ?? <div className='w-full'>
                    {children}
                </div>}
            </div>

        </DashboardCard>
    );
}

export default StatisticsCard