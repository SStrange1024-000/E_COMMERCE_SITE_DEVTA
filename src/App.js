import HBanner from './components/Media Banner/HBanner';
import Navbar from './components/Navbar/Navbar';
import ProductList from './pages/Product List/ProductList';
import Footer from './pages/Footer/Footer';
import {Route, Routes} from 'react-router-dom'
import WishList from './pages/WishList/WishList';
import Home from './pages/Home/Home';
import Category from './pages/Categories/Category';
import SingleProductDetail from './pages/Product Detail/SingleProductDetail';
import Cart from './pages/Cart/Cart';
import Login from './pages/registration/Login';
import CreateUserAccount from './pages/registration/CreateUserAccount';

function App() {
  return (
    <div className="App" >
      <Navbar/>
      {/* <HBanner/> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Category/>}/>
        <Route path='/products/:productId' element={<SingleProductDetail/>}/>
        <Route path='/wishlist' element={<WishList/>}></Route>
        <Route path='/productlist/:category' element={<ProductList/>}></Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<CreateUserAccount/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
