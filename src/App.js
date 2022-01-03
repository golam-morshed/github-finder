import './app.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Footer from './components/layout/Footer';
import Notfound from './components/pages/Notfound';

function App() {
  return (
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <div className="shrink">
          <Navbar />
        </div>
        <main className='container mx-auto grow overflow-x-auto'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/*" element={<Notfound />} />
          </Routes>
        </main>
        <div className="shrink">
          <Footer />
        </div>
      </div>

    </Router>
  );
}

export default App;
