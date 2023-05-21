import './App.css';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import { Homepage } from './components/Homepage';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Navigate to='/homepage' />}></Route>
          <Route path='/homepage' exact element={<Homepage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
