import './App.css'
import logo from './assets/logo-white.png'
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import BlogsOverview from "./pages/blogsOverview/BlogsOverview.jsx";
import AddBlog from "./pages/addBlog/AddBlog.jsx";
import NotFound from "./pages/notFound/NotFound.jsx";
import NavBar from "./components/navbar/NavBar.jsx";
import BlogDetailPage from "./pages/blogDetailPage/BlogDetailPage.jsx";

function App() {
    return (
        <>
            <NavBar/>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/blogs" element={<BlogsOverview/>}/>
                <Route path="/add-blog" element={<AddBlog/>}/>
                <Route path="/blog/:id" element={<BlogDetailPage/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </>
    )
}

export default App
