import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout";
import Home from "../pages/Home";
import PostDetails from "../pages/PostDetails";

const router = createBrowserRouter([{
    path: '/',
    element: <MainLayout />,
    children: [
        {
            index: true,
            element: <Home />
        },
        {
            path: '/posts/:id',
            element: <PostDetails />
        }
    ]
}]);

export default router;