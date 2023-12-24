import SideMenu from "./SideMenu"
import { Outlet } from "react-router-dom"
const Main = () => 
{
    return (
        <>
            <SideMenu />
            <Outlet />
        </>
    )
}

export default Main