import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import AdminDashboard from './pages/AdminDashboard'
import BuyerManagement from './pages/BuyerManagement'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddCategory from './components/addCategories/AddCategory'
import AddCategoryForm from './components/addCategories/AddCategoryform'
import AddSubCategoryForm from './components/addCategories/AddSubCategoryForm'
import SellerWithdrawRequests from './components/Navbar/SellerWithdrawRequests/SellerWithdrawRequests'
import BuyerDirectory from './components/BuyerManagement/BuyerDirectory '
import SellerManagement from './pages/SellerManagement '
import SellerDirectory from './components/SellerDirectory/SellerDirectory'
import SellerTechworld from './components/SellerDirectory/SellerTechworld'
import ManufacturerManagement from './pages/ManufacturerManagement '
import ManufacturerNovaTech from './components/ManufacturerNovaTech/ManufacturerNovaTech'
import SellerContactForm from './components/SellerContactForm '
import EditCategoryForm from './components/addCategories/EditCategoryForm'

function App() {

  return (
    <>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element= {<AdminDashboard/>} />
            <Route path="/addcategory" element={<AddCategory />} />
            <Route path="/addcategoryform" element={<AddCategoryForm />} />
            <Route path="/addsubcategoryform" element={<AddSubCategoryForm />} />
            <Route path="/sellerwithdrawRequests" element={<SellerWithdrawRequests />} />
            <Route path="/buyermanagement/buyerdirectory" element={<BuyerDirectory />} />
            <Route path="/buyermanagement" element={<BuyerManagement />} />
            <Route path="/sellermanagement" element={<SellerManagement />} />
            <Route path="/sellermanagement/sellerdirectory" element={<SellerDirectory />} />
            <Route path="/sellertechworld" element={<SellerTechworld />} />
            <Route path="/manufacturemanagement" element={<ManufacturerManagement />} />
            <Route path="/manufacturernoavatech" element={<ManufacturerNovaTech />} />
            <Route path="/sellercontactform" element={<SellerContactForm />} />
            <Route path="/editcategory/:id" element={<EditCategoryForm />} />
            
          </Routes>
        </BrowserRouter>
        {/* <BuyerManagement/> */}
        
    </>
  )
}

export default App
