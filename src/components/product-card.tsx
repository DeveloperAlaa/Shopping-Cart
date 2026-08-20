import { useState } from "react"

export default function ProductCard() {
    const [quantity, setQuantity] = useState(0)
    return (
        <div className="border border-gray-800 dark:border-gray-700 rounded overflow-hidden flex flex-col h-full">
            <img src="/assets/macbook.jpg" alt="macbook" className="w-full h-60 object-cover" />

            <div className="flex justify-between items-baseline m-4">
                <h3 className="font-semibold">MacBook m5</h3>
                <strong className="text-sm">$1,199.00</strong>
            </div>
            <div className="m-4 mt-auto">

                {quantity > 0
                    ? (<CartControls quantity={quantity} setQuantity={setQuantity} />)
                    : (<button
                        className="w-full bg-gray-800 text-gray-100 dark:bg-gray-100 dark:text-gray-800 py-2 rounded font-semibold cursor-pointer uppercase"
                        onClick={() => setQuantity(current => current + 1)}
                    >
                        Add
                    </button>
                    )}
            </div>
        </div >

    )
}


type CartControlsProps = {
    quantity: number;
    setQuantity: React.Dispatch<React.SetStateAction<number>>
}

const CartControls = ({ quantity, setQuantity }: CartControlsProps) => {

    const increaseQuantity = () => {
        setQuantity(current => current + 1)
    }

    const decreaseQuantity = () => {
        setQuantity(current => current - 1)
    }

    return (
        <>
            <div className="flex justify-center items-center gap-5 mb-4" >
                <button
                    className="inline-flex justify-center items-center rounded-4xl w-8 h-8  bg-gray-800 text-gray-100 dark:bg-gray-100 cursor-pointer"
                    onClick={decreaseQuantity}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="gray" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-minus-icon lucide-minus stroke-gray-100 dark:stroke-gray-800">
                        <path d="M5 12h14" />
                    </svg>
                </button>
                <span className="text-gray-800 dark:text-gray-100 font-semibold text-xl">{quantity}</span>
                <button
                    className="inline-flex justify-center items-center rounded-4xl w-8 h-8 bg-gray-800 text-gray-100 dark:bg-gray-100 cursor-pointer"
                    onClick={increaseQuantity}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="gray" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-plus-icon lucide-plus stroke-gray-100 dark:stroke-gray-800">
                        <path d="M5 12h14" />
                        <path d="M12 5v14" />
                    </svg>
                </button>

            </div>
            <button
                className="w-full bg-red-800 text-gray-100 py-2 rounded font-semibold cursor-pointer uppercase  "
                onClick={() => setQuantity(0)}
            >
                Remove
            </button>
        </>
    )
}