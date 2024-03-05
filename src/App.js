
import './index.css';
import Home from './Components/Home';
import NavBar from './Components/Navbar';
import Login from './Components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <Router>
      <NavBar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login/>} />
    </Routes>
     
  </Router>
  );
}

export default App;
