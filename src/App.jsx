import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainSearch from './components/MainSearch';
import CompanySearchResults from './components/CompanySearchResults';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Favourites from './components/Favourites';


import MyNavbar from './components/MyNavbar';


function App() {
  return (
    <BrowserRouter>
    <MyNavbar />
      <Routes>
        <Route path="/" element={<MainSearch />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/:company" element={<CompanySearchResults />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
