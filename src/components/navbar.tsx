import { NavLink } from 'react-router'
import { cn } from '../utils/cn'

export default function Navbar() {
    return (
        <header className="px-5 py-5 bg-gray-100 shadow dark:bg-gray-900">
            <nav className="w-full md:max-w-[80%] lg:max-w-[70%] mx-auto space-x-5">
                <NavLink className={({ isActive }) => cn(isActive && "font-semibold text-gray-800 dark:text-gray-200")} to="/">Home</NavLink>
                <NavLink className={({ isActive }) => cn(isActive && "font-semibold text-gray-800 dark:text-gray-200")} to="/store">Store</NavLink>
            </nav>
        </header>
    )
}
