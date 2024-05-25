import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import About from './component/about';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar title="TextConverter" />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<TextForm title="Enter Text below" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
