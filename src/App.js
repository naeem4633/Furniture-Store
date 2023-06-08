import './App.css';
import { HashRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import MovingImages from './components/MovingImages';
import Listing from './components/Listing';
import Details from './components/Details';
import Login from './components/Login';
import Wishlist from './components/Wishlist';
import Cart from './components/Cart';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<><MovingImages/><Body/></>} />
          <Route path="/single-item/:id" element={<Details/>} />
          <Route path="/beds" element={<><Listing/></>} />
          <Route path="/dining" element={<><Listing/></>} />
          <Route path="/wardrobes" element={<><Listing/></>} />
          <Route path="/login" element={<><Login/></>} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          {/* <Route path="/confirmOrder" element={<ConfirmOrder />} /> */}
        </Routes>
        <Footer/>
      </div>
    </Router>
    // <>
    //   <Header />
    //   <MovingImages/>
    //   <Body/>
    //   <Listing />
    //   <Details />d
    //   <Login />
    //   <Footer/>
    // </>
  )
}
