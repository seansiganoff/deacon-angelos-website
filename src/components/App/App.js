import './App.css';
import Home from '../Home/home'
import Nav from '../Nav/nav';
import Footer from '../Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import FreeEstimate from '../Free-Estimate/FreeEstimate';
function App() {
 

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/free-estimate' element={<FreeEstimate />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
