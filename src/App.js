import './app.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import UserDetail from './components/pages/UserDetail';
import Footer from './components/layout/Footer';
import Notfound from './components/pages/Notfound';
import { GithubProvider } from './context/github/GithubContext';
import { AlertProvider } from './context/alert/AlertContext';

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <div className="flex flex-col justify-between h-screen">
            <div className="shrink">
              <Navbar />
            </div>
            <main className='container mx-auto grow overflow-x-auto mt-5'>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/user/:login" element={<UserDetail />} />
                <Route path="/*" element={<Notfound />} />
              </Routes>
            </main>
            <div className="shrink">
              <Footer />
            </div>
          </div>
        </Router>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
