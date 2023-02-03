import useCart from "../hooks/useCart"
import useProducts from "../hooks/useProduct"
import { UseProductsContextType } from "../context/ProductsProvider"
import { ReactElement } from "react"
import Product from "./Product"

const ProductList = (products: any) => {
    const { dispatch, REDUCER_ACTIONS, cart } = useCart()
   
    let pageContent: ReactElement | ReactElement[] = <p>Loading...</p>

    if (products.products?.length) {
        pageContent = products.products.map((product: any) => {
            const inCart: boolean = cart.some(item => item.sku === product.sku)

            return (
                <Product
                    key={product.sku}
                    product={product}
                    dispatch={dispatch}
                    REDUCER_ACTIONS={REDUCER_ACTIONS}
                    inCart={inCart}
                />
            )
        })
    }

    const content = (
        <div className="container mx-auto p-20">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-0">
            {pageContent}
        </div>
        </div>
    )

    return content
}
export default ProductList
