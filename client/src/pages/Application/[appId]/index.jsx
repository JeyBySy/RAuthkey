import { useParams } from "react-router-dom"

const AppDetails = () => {
    const { appId } = useParams()
    return (
        <div>{appId}</div>
    )
}

export default AppDetails