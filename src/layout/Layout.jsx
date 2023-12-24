import { Outlet } from "react-router-dom"
import SideMenu from "../components/SideMenu"
import Header from "../components/Header"

const Layout = () =>
{
    return (
        <div>
            <Header />
            <div className="flex w-full pt-20">
                <Outlet />
            </div>
        </div>
    )
}

export default Layout