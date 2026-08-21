import { NavLink } from 'react-router'
import { cn } from '../utils/cn'
import { useShoppingCartContext } from '../contexts/shoppingCartContext'

export default function Navbar() {
    const { toggleCart, cartItmesQuantity } = useShoppingCartContext()
    return (
        <header className="flex items-center px-5 h-20 bg-gray-100 shadow dark:bg-gray-900 sticky top-0">
            <nav className="w-full sm:max-w-[80%] md:max-w-[80%] lg:max-w-[70%] mx-auto flex items-center">
                <div className={ "flex-1 space-x-5" }>
                    <NavLink className={ ({ isActive }) => cn(isActive && "font-semibold text-gray-800 dark:text-gray-200") } to="/">Home</NavLink>
                    <NavLink className={ ({ isActive }) => cn(isActive && "font-semibold text-gray-800 dark:text-gray-200") } to="/store">Store</NavLink>
                </div>
                {
                    cartItmesQuantity
                        ? (
                            <button aria-label={ "Shopping Cart" } onClick={ () => toggleCart() } className={ "cursor-pointer w-10 h-10 rounded-4xl flex justify-center items-center shadow bg-gray-200 active:bg-gray-300 dark:bg-gray-700 dark:active:bg-gray-800 relative" }>
                                <span className={ "absolute left-[60%] top-[60%] rounded-full bg-red-800 w-5 h-5 p-3 font-semibold text-sm flex items-center justify-center  text-gray-100" }>
                                    {cartItmesQuantity}
                                </span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-cart-icon lucide-shopping-cart stroke-gray-700  dark:stroke-olive-200">
                                    <circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" />
                                    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                                </svg>
                            </button>
                        )
                        : null
                }
            </nav>
        </header>
    )
}
