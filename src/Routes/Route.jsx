import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root/Root";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            }
        ]
    }
])


export default router;