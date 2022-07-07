import { Routes,Route } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/landingPage/landingPage';
import LoginForm from './pages/loginPage/loginPage';
import Register from './pages/registrationPage/registrationPage';
import Dashboard from './pages/Dashboard/dashboard';
import Sell from './pages/Sell/sell'
function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/login" element={<LoginForm/>}></Route>
      <Route path="/dashboard" element={<Dashboard/>}></Route>
      <Route path="/sell" element={<Sell/>}></Route>
    </Routes>
  );
}

export default App;
