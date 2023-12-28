import { Outlet } from "react-router-dom"
import Header from "../components/Header"

const Layout = () =>
{
    return (
        <>
        <Header />
        <div className="w-full 2xl:w-3/4 mx-auto">
            <div className="flex w-full pt-20">
                <Outlet />
            </div>
        </div>
        </>
    )
}

export default Layout