import { Routes, Route, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Offers from "./components/Offers";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-md p-4 flex justify-between">
        <h1 className="text-xl font-bold text-blue-600">Plug & Sell</h1>
        <div className="space-x-4">
          <Link to="/" className="text-blue-500 hover:underline">Dashboard</Link>
          <Link to="/offers" className="text-blue-500 hover:underline">Offers</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/offers" element={<Offers />} />
      </Routes>
    </div>
  );
}

export default App;
