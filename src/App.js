import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Cart from './context/Context'

function App() {
  return (
    <>
      <Cart.Provider>
        <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/cart' exact element={<Cart />} />
        </Routes>
        </BrowserRouter>
      </Cart.Provider>
    </>
  );
}

export default App;
