import { Routes,Route } from 'react-router-dom';
import LandingPage from './pages/landingPage/landingPage';
import LoginForm from './pages/loginPage/loginPage';
import Register from './pages/registrationPage/registrationPage';
import Dashboard from './pages/Dashboard/dashboard';
import Sell from './pages/Sell/sell'
import { withCookies } from 'react-cookie';
function App() {
  return (

    <Routes>
      <Route path="/" element={<LandingPage/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/login" element={<LoginForm/>}></Route>
      <Route path="/dashboard/:id" element={<Dashboard/>}></Route>
      <Route path="/sell/search" element={<Sell/>}></Route>
    </Routes>
  );
}

export default withCookies(App);
