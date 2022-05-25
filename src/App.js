import { Routes, Route } from "react-router-dom";
import './App.css';
import About from "./Pages/About/About";
import Blog from "./Pages/Blog/Blog";
import AllUser from "./Pages/Dashboard/AllUser";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyAppoinment from "./Pages/Dashboard/MyAppoinment";
import MyReview from "./Pages/Dashboard/MyReview";
import Home from "./Pages/Hone/Home";
import Purchase from "./Pages/Hone/Purchase";
import Login from "./Pages/Login/Login";
import RequareAuth from "./Pages/Login/RequareAuth";
import SignUp from "./Pages/Login/SignUp";
import Reviews from "./Pages/Reviews/Reviews";
import Footer from "./Pages/Shared/Footer/Footer";
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="blog" element={<Blog />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="deshboard" element={
          <RequareAuth>
          <Dashboard />
        </RequareAuth>
        } >
          <Route index element={<MyAppoinment></MyAppoinment>}></Route>
          <Route path="reviews" element={<MyReview></MyReview>}></Route>
          <Route path="alluser" element={<AllUser></AllUser>}></Route>
        </Route>
        
        <Route path="purchase" element={
          <RequareAuth>
            <Purchase />
          </RequareAuth>
        } />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
