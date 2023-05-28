import './App.css';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import { createContext, useState } from 'react';
import { Homepage } from './components/Homepage';
import { Shop } from './components/Shop';
import { Header } from './components/Header';
import { WatchDetails } from './components/WatchDetails';
import { ShoppingCart } from './components/ShoppingCart';

export const Context = createContext('');

function App() {
  const [sidebar, setSidebar] = useState(false);
  const [cartNum, setCartNum] = useState(0);
  const [cartProducts, setCartProducts] = useState([]);

  return (
    <div className='App'>
      <BrowserRouter>
        <Context.Provider value={{ setCartNum, cartProducts, setCartProducts }}>
          <Header setSidebar={setSidebar} cartNum={cartNum} />

          <ShoppingCart
            sidebar={sidebar}
            setSidebar={setSidebar}
            cartProducts={cartProducts}
            setCartProducts={setCartProducts}
            setCartNum={setCartNum}
          />
          <Routes>
            <Route path='/' exact element={<Navigate to='/homepage' />}></Route>
            <Route path='/homepage' exact element={<Homepage />}></Route>
            <Route path='/shop' exact element={<Shop />}></Route>
            <Route path='/shop/:id' exact element={<WatchDetails />}></Route>
          </Routes>
        </Context.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
