import React from 'react'
import ReactDOM from 'react-dom/client'
import './i18n.jsx'
import './index.sass'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import Curriculum from "./pages/Curriculum.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/cv",
        element: <Curriculum />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
