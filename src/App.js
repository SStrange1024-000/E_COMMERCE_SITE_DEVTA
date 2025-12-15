import HBanner from './components/Media Banner/HBanner';
import Navbar from './components/Navbar/Navbar';
import ProductList from './pages/Product List/ProductList';
import Footer from './pages/Footer/Footer';
import {Route, Routes} from 'react-router-dom'
import WishList from './pages/WishList/WishList';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HBanner/>
      <Routes>
        <Route path='/wishlist' element={<WishList/>}></Route>
        <Route path='/productlist' element={<ProductList/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
