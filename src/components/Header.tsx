import Nav from "./Nav"
import useCart from "../hooks/useCart"
import useProducts from "../hooks/useProduct"
import img from "../images/shopping-bag.png"
import { useState } from "react"

type PropsType = {
    viewCart: boolean,
    setViewCart: React.Dispatch<React.SetStateAction<boolean>>,
}

const Header = ({ viewCart, setViewCart, handleSearch }: PropsType) => {
    const { totalItems, totalPrice } = useCart()
    
    const content = (
    
        // <header className="header">
        //     <div className="header__title-bar">
        //         <h1>Vezeti</h1>
        //         <div className="header__price-box">
        //             <p>Total Items: {totalItems}</p>
        //             <p>Total Price: {totalPrice}</p>
        //         </div>
        //     </div>
        //     <Nav viewCart={viewCart} setViewCart={setViewCart} />
        // </header>
        <div className="w-full top-0 bg-blue-200 px-20">

        
            <header className="md:container md:mx-auto">
            <div className="flex py-3 px-3 items-center space-x-4">
                <div className="flex-1 flex items-center grow-1">
                    <h1 className='text-3xl font-bold'>Vezeti.</h1>
                </div>
                <div className="grow items-center">
                <div className='max-w-md'>
                <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
                    <div className="grid place-items-center h-full w-12 text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        </div>

        <input
        className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
        type="text"
        id="search"
        onChange={handleSearch}
        placeholder="Search for product..." /> 
    </div>
</div>
                {/* <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                </div>
                    <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-80 border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for product..." type="text" name="search"/> */}
                </div>
                <div className="flex-none grow-1 flex justify-items-end relative">
                    <div className="absolute inline-flex items-center px-1.5 py-0.5 border-2 border-white rounded-full text-xs font-semibold leading-4 bg-red-500 text-white">
                    {totalItems}
                    </div>
                    <Nav viewCart={viewCart} setViewCart={setViewCart} />
                </div>

            </div>

            </header>

            </div>

        


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
