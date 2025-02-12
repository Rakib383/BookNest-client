import { Outlet, ScrollRestoration } from "react-router-dom"
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
import { ToastContainer } from "react-toastify"

export const RootLayout = () => {
    return (
        <div >
            <ScrollRestoration />
            <header className="fixed left-1/2 transform -translate-x-1/2 z-30 dark:bg-gray-800 w-full backdrop-blur-xl">
                <Navbar />
            </header>
            <main className="pt-16 md:pt-[72px]">
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    )
}
