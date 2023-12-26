import { NavLink } from "react-router-dom"
const SideMenu = () =>
{
    return (
        <div className="w-1/3 px-8 py-10 [&*]:text-red-50">
            <h1 className="text-2xl mb-5 font-semibold">Getting Started</h1>
            <ul role="list" className="[&>li>*]:block [&>li>*]:cursor-pointer [&>li>*]:py-2 [&>li>*]:px-8 [&>li>*]:ff-segoeui [&>li>*]:transition-all">
                <li><NavLink className={({ isActive }) => isActive ? "activeSlide" : ""} end to="">Introduction</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? "activeSlide" : ""} to="installation">Installation</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? "activeSlide" : ""} to="configuration">Configuration</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? "activeSlide" : ""} to="dns_config">DNS configuration</NavLink></li>
            </ul>
        </div>
    )
}

export default SideMenu