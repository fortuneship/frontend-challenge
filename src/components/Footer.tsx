import useCart from "../hooks/useCart"

// type PropsType = {
//     viewCart: boolean,
// }

const Footer = () => {
    // const { totalItems, totalPrice } = useCart()

    const year: number = new Date().getFullYear()

    const pageContent = <p>Copyright &copy; {year}. Vezeti</p>

    const content = (
        <footer className="py-20 text-center text-lg sticky top-[100vh]">
            {pageContent}
        </footer>
    )

    return content
}
export default Footer