import Sidemenu from "../../components/SideMenu/Sidemenu"
import Main from './Main';


const Dashboard = () => {
    return (
        <div className="h-screen flex flex-col overflow-hidden">
            <div className="flex flex-grow overflow-hidden">
                <div className="flex-shrink-0">
                    <Sidemenu />
                </div>
                <div className="flex-grow overflow-y-auto">
                    <Main />
                </div>
            </div>
        </div>

    )
}

export default Dashboard