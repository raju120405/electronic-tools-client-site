import { Routes, Route } from "react-router-dom";
import './App.css';
import About from "./Pages/About/About";
import Home from "./Pages/Hone/Home";
import Purchase from "./Pages/Hone/Purchase";
import Login from "./Pages/Login/Login";
import Footer from "./Pages/Shared/Footer/Footer";
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="purchase" element={<Purchase />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
