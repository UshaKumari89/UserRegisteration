
import './index.css';
import Home from './Components/Home';
import NavBar from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ProductRegisteration from './Components/ProductRegisteration';

function App() {
  return (
    <Router>
      <NavBar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/productregisteration" element={<ProductRegisteration />} />


    </Routes>
     
  </Router>
  );
}

export default App;
