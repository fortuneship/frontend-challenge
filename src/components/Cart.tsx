import useCart from "../hooks/useCart"
import { useState } from "react"
import CartLineItem from "./CartLineItem"

const Cart = () => {
    const [confirm, setConfirm] = useState<boolean>(false)
    const { dispatch, REDUCER_ACTIONS, totalItems, totalPrice, cart } = useCart()

    const onSubmitOrder = () => {
        dispatch({ type: REDUCER_ACTIONS.SUBMIT })
        setConfirm(true)
    }

    const pageContent = confirm
        ? <h2>Thank you for your order.</h2>
        : <>
            <h2 className="px-20 py-5 text-lg font-bold">Shopping Cart {totalItems} item</h2>
            {/* <div className="container p-8 mx-auto mt-12">
                <div className="w-full overflow-x-auto">
                    <div className="my-2">
                        <h3 className="text-xl font-bold tracking-wider">Shopping Cart {totalItems} item</h3>
                    </div>
                </div>
            </div> */}
            
            <ul className="container max-w">
                {cart.map(item => {
                    return (
                        <CartLineItem
                            key={item.sku}
                            item={item}
                            dispatch={dispatch}
                            REDUCER_ACTIONS={REDUCER_ACTIONS}
                        />
                    )
                })}
            </ul>
            <div className="cart__totals px-20 py-3">
                <p>Total Price: {totalPrice}</p>
                <button className="cart__submit" disabled={!totalItems} onClick={onSubmitOrder}>
                    Place Order
                </button>
            </div>
        </>

    const content = (
        <main className="main main--cart">
            {pageContent}
        </main>
    )

    return content
}
export default Cart