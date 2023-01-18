import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Stock from './Pages/Stock';
import FournisseursList from './Pages/FournisseurList';
import FournisseurDetail from './Pages/FournisseurDetail';
import Login from './Pages/Login';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Login />} ></Route>
        <Route path='/stock' element={<Stock />} ></Route>
        <Route path='/fournisseurs' element={<FournisseursList />} ></Route>
        <Route path='/fournisseurs/:fournisseurId' element={<FournisseurDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
