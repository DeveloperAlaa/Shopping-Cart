import { Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerPortal, DrawerTitle } from './ui/drawer'
import { useShoppingCartContext } from "../contexts/shoppingCartContext"

import products from "../data/products.json"
import { currencyFormatter } from "../utils/currencyFormatter"

type ProductWithQuantity = {
    id: string;
    title: string;
    price: string;
    url: string;
    quantity: number
}
export default function CartDrawer() {
    const { cartIsOpen, cartItems, toggleCart, removeItem } = useShoppingCartContext()

    const totaoPrice = cartItems.reduce((total, { id, quantity }) => {
        const product = products.find(p => p.id === id)
        return total + Number(product?.price || 0) * quantity
    }, 0)



    return (
        <Drawer
            open={ cartIsOpen }
            swipeDirection={ "right" }
            modal={ true }

        >
            <DrawerPortal>
                <DrawerOverlay />
                <DrawerContent className={ "custom-scrollbar bg-gray-50 text-gray-700 dark:bg-gray-950 dark:text-gray-200 border-gray-100 dark:border-gray-950 px-5 w-full sm:w-[80%] lg:w-[50%]" }>
                    <DrawerHeader className={ "my-4 px-0" }>
                        <DrawerTitle className={ "flex justify-between" }>
                            <p className={ "text-2xl  font-semibold" }>Cart</p>
                            <DrawerClose render={
                                <button className={ "cursor-pointer rounded-4xl w-10 h-10 flex justify-center items-center  shadow bg-gray-200 active:bg-gray-300 dark:bg-gray-700 dark:active:bg-gray-800" } onClick={ () => toggleCart() }>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x-icon lucide-x stroke-gray-700  dark:stroke-olive-200">
                                        <path d="M18 6 6 18" />
                                        <path d="m6 6 12 12" />
                                    </svg>
                                </button> } />
                        </DrawerTitle>
                    </DrawerHeader>
                    <div className={ "space-y-5 overflow-y-scroll" }>
                        { cartItems.map(({ id, quantity }) => {
                            const filteredItems = products.filter(product => product.id === id)
                            return filteredItems.map(({ title, price, url }) => {
                                return (
                                    <div className={ "flex justify-between items-center rounded bg-gray-200 dark:bg-gray-900 pe-4" }>
                                        <div className={ "flex items-center gap-4" }>
                                            <img src={ url } alt={ title } className={ "w-20 aspect-square md:w-50 md:aspect-video object-cover rounded" } />
                                            <div>
                                                <p className={ "flex items-center gap-2" }>
                                                    <span className={ "inline-block capitalize truncate max-w-25  lg:max-w-50" }>{ title }</span>
                                                    <span className={ "font-semibold text-gray-600 dark:text-gray-400" }> X{ quantity }</span></p>
                                                <p>{ currencyFormatter(Number(price)) }</p>
                                            </div>
                                        </div>
                                        <div className={ "flex gap-4 items-center" }>
                                            <strong>{ currencyFormatter(Number(price) * quantity) }</strong>
                                            <button
                                                className={ "cursor-pointer rounded w-5 h-5 md:w-8 md:h-8 flex justify-center items-center  shadow border border-red-700 hover:bg-red-200" }
                                                onClick={ () => removeItem(id) }>
                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                    className="lucide lucide-x-icon lucide-x stroke-red-700">
                                                    <path d="M18 6 6 18" />
                                                    <path d="m6 6 12 12" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                )
                            })
                        }) }
                    </div>
                    <DrawerFooter className={ "py-4" }>
                        <p className={ "text-3xl" }>Total: <strong>{ currencyFormatter(totaoPrice) }</strong></p>
                    </DrawerFooter>
                </DrawerContent>
            </DrawerPortal>
        </Drawer>
    )
}
