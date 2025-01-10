
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Header from './Components/Header/Header';

import Home from './Pages/Home/Home';
import Footer from './Components/Footer/Footer';
import PhotoPage from './Pages/photography page/photopage';
import Photodetails from './Pages/photodetails/photodetail';
import AboutMe from './Pages/About/About';

function App() {
  return (
    <div className="App">
     <Header/>
    
      <Routes>
        <Route path="/" element={<Home />} />
     <Route path="/About" element={<AboutMe />} />


        {/* photos */}
        <Route path="/photos" element={<PhotoPage />} />
        <Route path="/category/:category" element={<Photodetails />} />

    
      
      </Routes>
    <Footer/>
         </div>
  );
}

export default App;
