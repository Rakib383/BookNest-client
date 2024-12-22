import { Outlet } from "react-router-dom"
import { Hero } from "../components/Hero"
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"

export const RootLayout = () => {
    return (
        <div>
            <header>
                <Navbar />
                <Hero />
            </header>
            <Outlet />
            <footer>
                <Footer />
            </footer>

        </div>
    )
}
