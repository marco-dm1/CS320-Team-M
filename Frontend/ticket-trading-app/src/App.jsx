// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Register from './pages/Register.jsx';
import { Login } from './pages/Login.jsx';
import Dashboard from './pages/Dashboard.jsx';
import MyTickets from './pages/MyTickers.jsx';
import Orders from './pages/Orders.jsx';
import Listings from './pages/Listings.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/mytickets" element={<MyTickets />} />
        <Route path="/orders" element={<Orders />}/>
        <Route path="/listings" element={<Listings />}/>
      </Routes>
    </Router>
  );
}

export default App;