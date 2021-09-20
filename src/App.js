import './App.scss';
import { useState } from 'react';
import { BrowserRouter as Router, route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Ecomm from './components/Ecomm';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Hotdeals from './components/Hotdeals';
import Footer from './components/Footer';
import Productpage from './components/Productpage';
import Items from './components/Items';
import Modal from 'react-modal';
import Shoespage from './components/Shoespage';
import Bags from './components/Bags';
import Heels from './components/Heels';
import Sandals from './components/Sandals';
import Homepagemobile from './components/Homepagemobile';

Modal.setAppElement('#root')
const App = () => {
  const [modalIsOpen, setmodalIsOpen] = useState(false)
  
  return (
    <div className="Container">
      <Router>
        <Header />
        <hr />
        <Navbar/>

        <Switch>
          <route exact path="/">
            <Ecomm />
          </route>
          <route path="/login">
            <Login />
          </route>
          <route path="/signup">
            <Signup />
          </route>
          <route path="/Hot-deals">
            <Hotdeals />
          </route>
          <route path="/sneakers">
            <Shoespage />
          </route>
          <route path="/bags">
            <Bags />
          </route>
          <route path="/heels">
            <Heels />
          </route>
          <route path="/sandals">
            <Sandals />
          </route>
          <route path="/Nike Air Max 270 React">
            <Productpage />
          </route>
          <route path="/items">
            <Items />
          </route>

        </Switch>
        <Footer/>
      </Router>
      {/* <Homepagemobile /> */}
    </div>
  );
}

export default App;
