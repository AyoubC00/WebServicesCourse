import apacheLogo from "../assets/apache.png"
import { NavLink } from "react-router-dom"
const Header = () =>
{
    return (
        <div className="w-full flex justify-center h-20 bg-gray-50 py-2 ff-segoeui fixed">
            <div className="w-3/4 flex items-center">
                <img src={ apacheLogo } alt="Apache Logo" className="h-full" />
                <ul className="flex gap-6 ms-24">
                    <li><NavLink className={({ isActive }) => isActive ? "activePage" : ""} to="/" end>Home</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? "activePage" : ""} to="learn">Learn</NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default Header