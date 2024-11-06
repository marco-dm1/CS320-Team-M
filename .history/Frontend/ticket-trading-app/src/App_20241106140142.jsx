// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <h1 className="text-3xl font-bold text-center py-8">Ticket Trading App</h1>
      </div>
    </Router>
  );
}

export default App;