import { createContext, useContext, useState } from "react"
import { useLocalStorage } from "../hooks/useLocalStorage"


type CartItem = {
    id: string
    quantity: number
}

type ShoppingCartContextType = {
    getItemQuantity: (id: string) => number
    incereaseItemQuantity: (id: string) => void
    decreaseItemQuantity: (id: string) => void
    removeItem: (id: string) => void
    toggleCart: () => void
    cartItems: CartItem[]
    cartItmesQuantity: number
    cartIsOpen: boolean
}

const ShoppingCartContext = createContext<ShoppingCartContextType>({} as ShoppingCartContextType)

export const useShoppingCartContext = () => {
    const shoppingCart = useContext(ShoppingCartContext)
    if (!shoppingCart) {
        throw new Error("'useShoppingCartContext' can only be used inside a 'ShoppingCart' provider.")
    }

    return shoppingCart
}




type ShoppingCartProviderProps = {
    children: React.ReactNode
}

export const ShoppingCartProvider = ({ children }: ShoppingCartProviderProps) => {
    const STORAGE_SHOPPING_CART = "shopping-cart"
    const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(STORAGE_SHOPPING_CART, [])
    const [cartIsOpen, setCartIsOpen] = useState(false)

    // getItemQuantity  ✅
    // incereaseQuantity ✅
    // decreaseQuantity ✅
    // removeItem ✅
    // toggleCart ✅
    // cartItmes ✅
    // cartItmesQuantity ✅


    const getItemQuantity = (id: string) => {
        const item = cartItems.find(item => item.id === id)
        if (item) {
            return item.quantity
        } else {
            return 0
        }
    }

    const incereaseItemQuantity = (id: string) => {
        const itemFounded = cartItems.find(item => item.id === id)
        if (!itemFounded) {
            setCartItems(current => ([...current, { id, quantity: 1 }]))
        } else {

            setCartItems(current => [
                ...current.map(item =>
                    item.id === id
                        ? { ...item, quantity: item.quantity + 1 } as CartItem
                        : item)
            ])

        }
    }

    const decreaseItemQuantity = (id: string) => {
        const itemFounded = cartItems.find(item => item.id === id)
        if (itemFounded?.quantity === 1) {
            setCartItems(current => current.filter(item => item.id !== id))
        } else {
            setCartItems(current => [
                ...current.map(item => item.id === id
                    ? { ...item, quantity: item.quantity - 1 } as CartItem
                    : item
                )
            ])
        }
    }

    const removeItem = (id: string) => {
        setCartItems(current => current.filter(item => item.id !== id))
    }

    const toggleCart = () => {
        setCartIsOpen(current => !current)
    }

    const cartItmesQuantity = cartItems.reduce((quantity, item) => {
        return quantity + item.quantity
    }, 0)

    
    return (
        <ShoppingCartContext.Provider value={{
            cartItems,
            cartItmesQuantity,
            cartIsOpen,
            decreaseItemQuantity,
            getItemQuantity,
            incereaseItemQuantity,
            removeItem,
            toggleCart
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )

}