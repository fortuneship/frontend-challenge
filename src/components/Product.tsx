import { ProductType } from "../context/ProductsProvider"
import { ReducerActionType, ReducerAction } from "../context/CartProvider"
import { ReactElement, memo } from "react"
//import img from "../images/cart_image.jpeg";


type PropsType = {
    product: ProductType,
    dispatch: React.Dispatch<ReducerAction>,
    REDUCER_ACTIONS: ReducerActionType,
    inCart: boolean,
}

const Product = ({ product, dispatch, REDUCER_ACTIONS, inCart }: PropsType): ReactElement => {

     const img: string = new URL(`../images/${product.sku}.jpg`, import.meta.url).href
     //console.log(img)

    const onAddToCart = () => dispatch({ type: REDUCER_ACTIONS.ADD, payload: { ...product, qty: 1 } })

    const itemInCart = inCart ? ' → Item in Cart: ✔️' : null

    const content =
    <div className="p-10">
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img src={img} className=""/>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{product.name}</div>
                    <span className="text-gray-700 text-base">
                        {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(product.price)}{itemInCart}
                    </span>
                </div>
                <div className="px-6 pb-2">
                    <button onClick={onAddToCart} className="inline-block bg-blue-800 rounded-full px-3 py-3 text-sm font-semibold text-white mr-2 mb-2">Add to Cart</button>
                    
                </div>
                </div>
    </div>
        // <article className="product">
        //     <h3>{product.name}</h3>
        //     <img src={img} alt={product.name} className="product__img" />
        //     <p>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(product.price)}{itemInCart}</p>
        //     <button onClick={onAddToCart}>Add to Cart</button>
        // </article>

    return content
}

function areProductsEqual({ product: prevProduct, inCart: prevInCart }: PropsType, { product: nextProduct, inCart: nextInCart }: PropsType) {
    return (
        Object.keys(prevProduct).every(key => {
            return prevProduct[key as keyof ProductType] ===
                nextProduct[key as keyof ProductType]
        }) && prevInCart === nextInCart
    )
}
const MemoizedProduct = memo<typeof Product>(Product, areProductsEqual)

export default MemoizedProduct