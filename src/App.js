import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Stock from './Pages/Stock';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/stock' element={<Stock />} ></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
