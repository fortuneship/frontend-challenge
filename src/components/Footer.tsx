import useCart from "../hooks/useCart"

// type PropsType = {
//     viewCart: boolean,
// }

const Footer = () => {
    // const { totalItems, totalPrice } = useCart()

    const year: number = new Date().getFullYear()

    const pageContent = <p>Shopping Cart &copy; {year}</p>

    const content = (
        <footer className="footer">
            {pageContent}
        </footer>
    )

    return content
}
export default Footer

// import React from 'react'

// const Footer = () => {
//   return (
//     <div>Footer</div>
//   )
// }

// export default Footer