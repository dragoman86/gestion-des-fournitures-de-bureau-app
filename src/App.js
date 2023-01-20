import './App.css';
import { Routes, Route} from 'react-router-dom';

import Login from './Pages/Login';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import StockList from './Pages/Stock/StockList';
import StockDetail from './Pages/Stock/StockDetail';
import FournisseursList from './Pages/Fournisseurs/FournisseurList';
import FournisseurDetail from './Pages/Fournisseurs/FournisseurDetail';
import Home from './Pages/Home';
import NoMatch from './Pages/NoMatch';


function App() {
  return (    
    <div className="App">
        <NavBar />
          <Routes>
            <Route path='/' element={<Login /> } ></Route>
            <Route path='/home' element={<Home />} ></Route>
            <Route path='/stock' element={<StockList />} ></Route>
            <Route path='/stock/:productId' element={<StockDetail />} ></Route>
            <Route path='/fournisseurs' element={<FournisseursList />} ></Route>
            <Route path='/fournisseurs/:fournisseurId' element={<FournisseurDetail />} ></Route>
            <Route path='*' element={<NoMatch />} ></Route>
          </Routes>
        <Footer />
    </div>
  )
}

export default App;
