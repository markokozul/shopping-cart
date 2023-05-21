import './App.css';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import { Homepage } from './components/Homepage';
import { Shop } from './components/Shop';
import { Header } from './components/Header';
import { WatchDetails } from './components/WatchDetails';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' exact element={<Navigate to='/homepage' />}></Route>
          <Route path='/homepage' exact element={<Homepage />}></Route>
          <Route path='/shop' exact element={<Shop />}></Route>
          <Route path='/shop/:id' exact element={<WatchDetails />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
