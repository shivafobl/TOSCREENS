import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Navbar from './Navbar';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';
import FScreen from './components/FScreen';
import SScreen from './components/SScreen';
import TScreen from './components/TScreen';


const App = () => {
    return (
        <div>
            <Header />
            <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/FScreen" element={<FScreen />} />
          <Route path="/SScreen" element={<SScreen />} />
          <Route path="/TScreen" element={<TScreen />} />
        </Routes>
      </div>
    </Router>

            <main>
                {/* Your main content goes here */}
                <screen />
            </main>
        </div>
    );
}

export default App;
