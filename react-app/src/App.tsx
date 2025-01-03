import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Placeholder components for each route
const Home = () => <h1>Home Page</h1>;
const Signup = () => <h1>Signup Page</h1>;
const Login = () => <h1>Login Page</h1>;
const Results = () => <h1>Results Page</h1>;

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;