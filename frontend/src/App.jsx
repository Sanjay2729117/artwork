import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Cart from "./pages/Cart"
import Favourites from "./pages/Favourites"
import Product from "./pages/Products"
import Navbar from './components/Navbar'
import ProductPage from './pages/ProductPage.jsx'
import Footer from './components/Footer'
function App() {

  return (
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/favourites" element={<Favourites/>}/>
    <Route path="/products" element={<Product/>}/>
    <Route path="/product/:id" element={<ProductPage/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
