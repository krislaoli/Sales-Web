import { Routes, Route } from "react-router-dom"

import NavbarComponent from "./components/NavbarComponent"
import FooterComponent from "./components/FooterComponent"


import HomePage from "./pages/HomePage"
import FaqPage from "./pages/FaqPage"
import KelasPage from "./pages/KelasPage"
import TestimonialPage from "./pages/TestimonialPage"
import SyaratKententuanPage from "./pages/SyaratKententuanPage"

function App() {
  return ( <div>

    <NavbarComponent/>

    <Routes>
      <Route path="/" Component={HomePage}/>
      <Route path="/kelas" Component={KelasPage}/>
      <Route path="/testimonial" Component={TestimonialPage}/>
      <Route path="/faq" Component={FaqPage}/>
      <Route path="/syaratketentuan" Component={SyaratKententuanPage}/>
    </Routes>

    <FooterComponent/>
  </div>
  )
}

export default App
