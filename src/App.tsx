import './App.css'
import Blog from "./components/Blog.tsx";
import {Route, Routes} from "react-router-dom";
import Login from "./pages/Login.tsx";

export default function App() {

    return (

        <>
            <Routes>
                <Route path="/" element={<Blog />} />
                <Route path="login" element={<Login />} />
            </Routes>
        </>
    )
}


