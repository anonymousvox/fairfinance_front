import {
    createBrowserRouter,
} from "react-router-dom";

import Login from "./pages/login";
import Registration from "./pages/registration/registration";
import Loans from "./pages/loans";
import RegisterInvestor from "@/pages/register-investor/index.js";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Registration />,
    },
    {
        path: "/new/loans/",
        element: <Loans />,
    },
    {
        path: "/register/investor/",
        element: <RegisterInvestor/>
    }
]);

export default router