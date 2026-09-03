import './App.css';
import Home from '../Home/home'
import Nav from '../Nav/nav';
import Footer from '../Footer/Footer';
import { Route, Routes } from 'react-router-dom';
function App() {
 

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
