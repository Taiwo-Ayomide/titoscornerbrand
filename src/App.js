import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Books from './pages/Books';
import Recipe from './pages/Recipe';
import Audio from './pages/Audio';
// import Register from './pages/Register';
// import Login from './pages/Login'
// import Gallery from './pages/Gallery';

const App = () => {
  return (
    <Router>
      <Navbar /> 
      <div>
        <div>
          <Routes>
            {/* Public routes */}
            {/* <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} /> */}
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/recipe" element={<Recipe />} />
            <Route path="/audio" element={<Audio />} />
            <Route path="/books" element={<Books />} />
            {/* <Route path="/register" element={<Register />} /> */}
            {/* <Route path="/cart" element={<Cart />} /> */}
            {/* <Route path="/gallery" element={<Gallery />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
