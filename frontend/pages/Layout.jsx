import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import Background from "../components/Background"

export default function Layout({ children }) {
    return (
        <>
            <NavBar />
            <Background>
                { children }
            </Background>
            {/* <Footer /> */}
        </>
    )
}
