import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import App from "../App";
import Housing from "../components/Housing";
import HomePage from "../components/HomePage";
import Vehicle from "../components/vehicle";


export default function MainLayout(){
    const [page,setPage] = useState(window.location.pathname);

    useEffect(() => {
        const handlePopState = () => setPage(window.location.pathname);
        window.addEventListener("popstate",handlePopState);

        return () => window.removeEventListener("popstate",handlePopState);
    },[])

    const navigate = (path) =>{
        window.history.pushState({},"",path);
        setPage(path);
    }
    return(
        <div className="layout">
            <Sidebar navigate={navigate} page={page} />
            <div className="content">
                <App>
                    {page === "/home" && <HomePage  navigate={navigate}/>}
                    {page === "/konut" && <Housing  navigate={navigate}/>}
                    {page === "/vasita" && <Vehicle navigate={navigate} />}
                </App>
            </div>
        </div>
    )
}