import { Routes,Route } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/landingPage/landingPage';
import Register from './pages/registrationPage/registrationPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
    </Routes>
  );
}

export default App;
