
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Header from './Components/Header/Header';

import Home from './Pages/Home/Home';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
     <Header/>
    
      <Routes>
        <Route path="/" element={<Home />} />

        {/* <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} /> */}
      </Routes>
    <Footer/>
         </div>
  );
}

export default App;
