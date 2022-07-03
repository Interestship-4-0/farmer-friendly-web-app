import { Routes,Route } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/landingPage/landingPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage/>}></Route>
    </Routes> 
  );
}

export default App;
