import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Motorsports from "./pages/Motorsports";
import Project from "./pages/Project";
import Reprogrammation from "./pages/Reprogrammation";
import Whatwedo from "./pages/Whatwedo";
import Nopage from "./pages/Nopage";
import Branddetails from './pages/Branddetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="whatwedo" element={<Whatwedo/>}/>
          <Route path="reprogrammation" element={<Reprogrammation/>}/>
          <Route path="branddetails/:brandname" element={<Branddetails/>}/>
          <Route path="project" element={<Project/>}/>
          <Route path="motorsports" element={<Motorsports/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="*" element={<Nopage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
