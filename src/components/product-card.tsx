import { useShoppingCartContext } from "../contexts/shoppingCartContext";
import { currencyFormatter } from "../utils/currencyFormatter";

type ProductCardProps = {
    id: string;
    title: string;
    price: number;
    url: string;
}

export default function ProductCard({ id, title, url, price }: ProductCardProps) {
    const { getItemQuantity, incereaseItemQuantity, decreaseItemQuantity, removeItem } = useShoppingCartContext()
    const quantity = getItemQuantity(id)
    return (
        <div className="border border-gray-800 dark:border-gray-700 rounded overflow-hidden flex flex-col h-full">
            <img src={ url } alt={ title } loading="lazy" className="w-full h-60 object-cover" />

            <div className="flex justify-between items-baseline m-4">
                <h3 className="font-semibold capitalize truncate max-w-2/3">{ title }</h3>
                <strong className="text-sm">{ currencyFormatter(price) }</strong>
            </div>
            <div className="m-4 mt-auto">

                { quantity > 0
                    ? (<CartControls
                        id={ id }
                        quantity={ quantity }
                        incereaseItemQuantity={ incereaseItemQuantity }
                        decreaseItemQuantity={ decreaseItemQuantity }
                        removeItem={ removeItem }
                    />)
                    : (
                        <button
                            className="w-full bg-gray-800 text-gray-100 dark:bg-gray-100 dark:text-gray-800 py-2 rounded font-semibold cursor-pointer uppercase"
                            onClick={ () => incereaseItemQuantity(id) }
                        >
                            Add
                        </button>
                    ) }
            </div>
        </div >

    )
}


type CartControlsProps = {
    id: string;
    quantity: number;
    incereaseItemQuantity: (id: string) => void;
    decreaseItemQuantity: (id: string) => void;
    removeItem: (id: string) => void
}

const CartControls = ({ id, quantity, incereaseItemQuantity, decreaseItemQuantity, removeItem }: CartControlsProps) => {


    return (
        <>
            <div className="flex justify-center items-center gap-5 mb-4" >
                <button
                    aria-label={ "Decease Quantity" }
                    className="inline-flex justify-center items-center rounded-4xl w-8 h-8  bg-gray-800 text-gray-100 dark:bg-gray-100 cursor-pointer"
                    onClick={ () => decreaseItemQuantity(id) }
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="gray" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-minus-icon lucide-minus stroke-gray-100 dark:stroke-gray-800">
                        <path d="M5 12h14" />
                    </svg>
                </button>
                <span className="text-gray-800 dark:text-gray-100 font-semibold text-xl">{ quantity }</span>
                <button
                    aria-label={ "Incease Quantity" }

                    className="inline-flex justify-center items-center rounded-4xl w-8 h-8 bg-gray-800 text-gray-100 dark:bg-gray-100 cursor-pointer"
                    onClick={ () => incereaseItemQuantity(id) }
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="gray" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus-icon lucide-plus stroke-gray-100 dark:stroke-gray-800">
                        <path d="M5 12h14" />
                        <path d="M12 5v14" />
                    </svg>
                </button>

            </div>
            <button
                className="w-full bg-red-800 text-gray-100 py-2 rounded font-semibold cursor-pointer uppercase  "
                onClick={ () => removeItem(id) }
            >
                Remove
            </button>
        </>
    )
}