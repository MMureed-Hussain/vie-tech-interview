import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Home from './pages/Home'
import About from './pages/About'
import Class from './pages/Class'
import Blog from './pages/Page'
import Contact from './pages/Contact'
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        {/* Route for the Home page */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/class" element={<Class/>}/>
        <Route path="blog" element={<Blog/>}/>
        <Route path="pages" element={<Page/>}/>
        <Route path="contact" element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
