import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Projects from './projects';
import Home from './home';
import Navbar from './navbar';
import Footer from './footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;