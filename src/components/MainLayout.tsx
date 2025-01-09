import { Outlet } from "react-router"
import Container from "./container"
import Navbar from "./Navbar";

const MainLayout = () => {
    return (
        <Container className="min-h-screen">
            <Navbar/>
            <Outlet/>
        </Container>
    )
}

export default MainLayout;