import About from './components/About/About'
import Header from './components/Header/Header'
import Services from './components/Service/Services'
import WashService from './components/Service/WashService'
import ContactPage from './components/Contacts/ContactPage'
import Footer from './components/Footer/Footer'
import NavBar from './components/Header/NavBar'
import Error from './components/Error/Error'
import Login from "./components/Auth/Login";
import AdminSidebar from "./components/Admin/sidebar/AdminSidebar";
import AdminHeader from "./components/Admin/Header/AdminHeader";

import "./asset/js/custom"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";




function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <>
            <NavBar />
            <Header />
            <Services />
            <About />
            <ContactPage />
            <Footer />
          </>
        } />

        <Route path='/about' element={
          <>
            <NavBar />
            <About />
            <Footer />
          </>
        } />


        <Route path='/service' element={
          <>
            <NavBar />
            <Services />
            <Footer />
          </>
        } />

        <Route path='/wash-service' element={
          <>
            <NavBar />
            <WashService />
            <Footer />
          </>
        } />


        <Route path='/contact' element={
          <>
            <NavBar />
            <ContactPage />
            <Footer />
          </>
        } />

        {/* admin  */}

        <Route path='/admin/dashboard' element={
          <>
            <AdminSidebar />
            <AdminHeader />
          </>
        } />

        <Route path='/admin/orders' element={
          <>
            <AdminSidebar />
            <AdminHeader />
          </>
        } />


        <Route path='/admin/users' element={
          <>
            <AdminSidebar />
            <AdminHeader />
          </>
        } />


        <Route path='/login' element={<>
          <Login />
        </>} />
        <Route path='*' element={<Error />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
