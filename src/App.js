import { Route, Routes } from 'react-router-dom';

import './App.css';
import Home from './components/Home/Home';
import Navber from './components/Home/Navber';
import Blogs from './components/Page/Blogs/Blogs';
import NotFound from './components/Page/NotFound/NotFound';
import Portfolio from './components/Page/Portfolio/Portfolio';
import Login from './components/Authentication/Login';
import Signup from './components/Authentication/Signup';
import Purchase from './components/Page/Purchase/Purchase';
import RequireAuth from './components/Authentication/RequireAuth';
import Dashboard from './components/Page/Dashboard/Dashboard';
import MyOrders from './components/Page/Dashboard/MyOrders';
import AddReview from './components/Page/Dashboard/AddReview';
import MyProfile from './components/Page/Dashboard/MyProfile';
import AddProduct from './components/Page/Dashboard/AddProduct';
import ManageAllOrder from './components/Page/Dashboard/ManageAllOrder';
import ManageProduct from './components/Page/Dashboard/ManageProduct';
import ResetPassword from './components/Authentication/ResetPassword';
import AllUsers from './components/Page/Dashboard/AllUsers';

function App() {
  
  return (
    <>
      <Navber></Navber>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/blogs" element={<Blogs></Blogs>} />
        <Route path="/portfolio" element={<Portfolio></Portfolio>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/signup" element={<Signup></Signup>} />
        <Route path='reset' element={<ResetPassword></ResetPassword>}/>
        <Route
          path="/purchase/:id"
          element={
            <RequireAuth>
              <Purchase></Purchase>
            </RequireAuth>
          }
        />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          <Route index element={<MyOrders></MyOrders>} />
          <Route path="review" element={<AddReview></AddReview>} />
          <Route path="myprofile" element={<MyProfile></MyProfile>} />
          <Route path="allusers" element={<AllUsers></AllUsers>} />
          <Route path="addproduct" element={<AddProduct></AddProduct>}></Route>
          <Route path="allorder" element={<ManageAllOrder></ManageAllOrder>} />
          <Route
            path="manageProduct"
            element={<ManageProduct></ManageProduct>}
          />
        </Route>
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
      
    </>
  );
}

export default App;
