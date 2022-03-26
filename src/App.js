import LandingPage from './LandingPage/LandingPage';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import RegisterPage from './RegisterPage/RegisterPage';
import DealerListPage from './DealerListPage/DealerListPage';
import LandingPageNavbar from './LandingPage/LandinPageNavbar/LandingPageNavbar';

function App() {
    return (
        <div>
            <LandingPageNavbar />
            <Routes>
                <Route path='/' element={<LandingPage />} />
                <Route path='/register' element={<RegisterPage />} />
                <Route path='/list' element={<DealerListPage />} />
            </Routes>
        </div>
    );
}

export default App;
