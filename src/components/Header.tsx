import Nav from "./Nav"
import useCart from "../hooks/useCart"

type PropsType = {
    viewCart: boolean,
    setViewCart: React.Dispatch<React.SetStateAction<boolean>>,
}

const Header = ({ viewCart, setViewCart }: PropsType) => {
    const { totalItems, totalPrice } = useCart()

    const content = (
    
        <header className="header">
            <div className="header__title-bar">
                <h1>Vezeti</h1>
                <div className="header__price-box">
                    <p>Total Items: {totalItems}</p>
                    <p>Total Price: {totalPrice}</p>
                </div>
            </div>
            <Nav viewCart={viewCart} setViewCart={setViewCart} />
        </header>
        //     <nav className="flex items-center justify-between p-4 bg-white">
    //   <div className="flex items-center">
    //     <h1 className="text-xl font-medium">Logo</h1>
    //   </div>
    //   <div className="flex items-center">
    //     <form className="bg-gray-200 rounded px-4 py-2">
    //       <input type="text" placeholder="Search" className="bg-transparent border-none outline-none w-full" />
    //     </form>
    //   </div>
    //   <div className="flex items-center">
    //     <img src="cart.png" alt="Cart" className="h-8" />
    //   </div>
    // </nav>
    )

    return content
}
export default Header