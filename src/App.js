import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import './App.css';
import About from "./Pages/About/About";
import Blog from "./Pages/Blog/Blog";
import AddProduct from "./Pages/Dashboard/AddProduct";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MenageProducts from "./Pages/Dashboard/MenageProducts";
import MyAppoinment from "./Pages/Dashboard/MyAppoinment";
import MyOrder from "./Pages/Dashboard/MyOrder";
import MyProfile from "./Pages/Dashboard/MyProfile";
import MyReview from "./Pages/Dashboard/MyReview";
import Users from "./Pages/Dashboard/Users";
import Home from "./Pages/Hone/Home";
import Purchase from "./Pages/Hone/Purchase";
import Login from "./Pages/Login/Login";
import RequareAuth from "./Pages/Login/RequareAuth";
import SignUp from "./Pages/Login/SignUp";
import NotFound from "./Pages/NotFound/NotFound";
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
          <Route path="profile" element={<MyProfile></MyProfile>}></Route>
          <Route path="order" element={<MyOrder></MyOrder>}></Route>
          <Route path="addproduct" element={<AddProduct></AddProduct>}></Route>
          <Route path="menageproduct" element={<MenageProducts></MenageProducts>}></Route>
          <Route path="users" element={<Users></Users>}></Route>
        </Route>

        <Route path="purchase" element={
          <RequareAuth>
            <Purchase />
          </RequareAuth>
        } />
         <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
      <Footer></Footer>
    </div>
  );
}

export default App;
