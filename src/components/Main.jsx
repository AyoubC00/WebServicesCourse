import SideMenu from "./SideMenu"
import { Outlet } from "react-router-dom"
const Main = () => 
{
    return (
        <>
            <SideMenu />
            <div className="w-full px-12 py-8">
                <Outlet />
            </div>
        </>
    )
}

export default Main