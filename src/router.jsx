import {
    createBrowserRouter,
} from "react-router-dom";

import Login from "./pages/login";
import Registration from "./pages/registration/registration";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Registration />,
    },
]);

export default router