import './App.css';
import { Routes, Route} from 'react-router-dom';

import Login from './Pages/Login';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Stock from './Pages/Stock';
import FournisseursList from './Pages/FournisseurList';
import FournisseurDetail from './Pages/FournisseurDetail';
import Home from './Pages/Home';
import NoMatch from './Pages/NoMatch';


function App() {
  return (    
    <div className="App">
        <NavBar />
          <Routes>
            <Route path='/' element={<Login />} ></Route>
            <Route path='/home' element={<Home />} ></Route>
            <Route path='/stock' element={<Stock />} ></Route>
            <Route path='/fournisseurs' element={<FournisseursList />} ></Route>
            <Route path='/fournisseurs/:fournisseurId' element={<FournisseurDetail />} ></Route>
            <Route path='*' element={<NoMatch />} ></Route>
          </Routes>
        <Footer />
    </div>
  )
}

export default App;
