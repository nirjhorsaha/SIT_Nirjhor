import { Outlet } from "react-router"
import Navbar from "./Navbar";

const MainLayout = () => {
    return (
        <div className="mx-auto max-w-[2520px] xl:px-20 md:px-10 sm:px-2 p-4 min-h-screen">
            <Navbar />
            <Outlet />
        </div>
    )
}

export default MainLayout;