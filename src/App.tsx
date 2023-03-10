import Header from "./components/Header"
import Footer from "./components/Footer"
import Cart from "./components/Cart"
import ProductList from "./components/ProductList"
import { useState } from "react"
import useProducts from "./hooks/useProduct"

function App() {
  const [viewCart, setViewCart] = useState<boolean>(false)
  const { products } = useProducts()
  const [ items,  setItems ] = useState(products);
  
  const handleSearch = (event: any) => {
    if(!event.target.value) {
      setItems(products);
      return
    }
    const filtered = products.filter((item) => item.name.toLowerCase().includes(event.target.value.toLowerCase()))
    setItems(filtered)
  }

  const pageContent = viewCart ? <Cart /> : <ProductList products={items} />

  const content = (
    <>
      <Header viewCart={viewCart} setViewCart={setViewCart} handleSearch={handleSearch} />
      {pageContent}
      <Footer />
    </>
  )

  return content
}

export default App
