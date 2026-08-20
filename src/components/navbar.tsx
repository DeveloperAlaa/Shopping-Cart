import { NavLink } from 'react-router'
import { cn } from '../utils/cn'

export default function Navbar() {
    return (
        <header className="px-5 py-5 bg-gray-200 dark:bg-gray-900">
            <nav className="w-full sm:max-w-[80%] md:max-w-[70%] lg:max-w-[65%] mx-auto space-x-5">
                <NavLink className={({ isActive }) => cn(isActive && "font-semibold text-cyan-700 dark:text-cyan-600")} to="/">Home</NavLink>
                <NavLink className={({ isActive }) => cn(isActive && "font-semibold text-cyan-700 dark:text-cyan-600")} to="/store">Store</NavLink>
            </nav>
        </header>
    )
}
