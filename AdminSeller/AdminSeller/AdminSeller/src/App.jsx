import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

import Signuppage from "./components/Signuppage";
import Login from "./components/Login";
import SellerDashboard from "./pages/SellerDashboard";
import ListYourProducts from "./pages/ListYourProduct";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./components/Editproduct/EditProduct";
import Businessverification from "./components/BusinessVerification";
import BusinessVerification2 from "./components/BusinessVerification2";
import Order from "./pages/Order"; // 🆕 Import Order Page
import UpdateOrder from "./components/updateorder/UpdateOrder";
import Contact from "./pages/Contact";
import SellerProfile from "./components/SellerProfile/SellerProfile";
import ReturnPolicy from "./components/returnPolicy/ReturnPolicy";
import Invoice from "./components/Invoice/Invoice";
import InvoiceManufacture from "./components/orderinvoicemanufacture/InvoiceManufacture";
import WithdrawFunds from "./components/withdrawal/WithdrawFunds";




const AppContent = () => {
  const location = useLocation();

  // Hide navbar on login/signup pages
  const hideNavbarRoutes = ["/", "/login", "/signup-step1", "/signup-step2"];
  const shouldShowNavbar = !hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {shouldShowNavbar && <Navbar />}

      <Routes>
        {/* LOGIN / SIGNUP FLOW */}
        <Route path="/" element={<Signuppage />} />
        <Route path="/login" element={<Login />} />

        <Route path="/signup-step1" element={<Businessverification />} />
        <Route path="/signup-step2" element={<BusinessVerification2 />} />

        {/* DASHBOARD FLOW */}
        <Route path="/dashboard" element={<SellerDashboard />} />
        <Route path="/list-products" element={<ListYourProducts />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/edit-product/:id" element={<EditProduct />} /> 
        <Route path="/update-order/:id" element={<UpdateOrder />} />
         <Route path="/contact" element={<Contact/>} />
       
        <Route path="/orders" element={<Order />} />
        <Route path='/sellerprofile' element ={<SellerProfile/>}/>
        <Route path='/returnpolicy' element ={<ReturnPolicy/>}/>
        <Route path='/invoice' element ={<Invoice/>}/>
        <Route path='/invoicemanufacture' element ={<InvoiceManufacture/>}/>
        <Route path='/withdrawfunds' element ={<WithdrawFunds/>}/>

      </Routes>
    </>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
