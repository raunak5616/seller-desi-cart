import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";

const App = () => (
  <BrowserRouter>
  <Navbar />
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route path="/dashboard" element={
        <ProtectedRoute><Dashboard /></ProtectedRoute>
      } />

      <Route path="/products" element={
        <ProtectedRoute><Products /></ProtectedRoute>
      } />

      <Route path="/orders" element={
        <ProtectedRoute><Orders /></ProtectedRoute>
      } />
    </Routes>
  </BrowserRouter>
);

export default App;
