import { useContext } from "react"
import ProductsContext from "../context/ProductsProvider"
import { UseProductsContextType } from "../context/ProductsProvider"

const useProducts = (products: any): UseProductsContextType => {
    return useContext(ProductsContext)
}

export default useProducts
