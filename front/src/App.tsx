import './App.css';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Footer from './layout/Footer';
import MainPage from './pages/MainPage';
import About from './pages/About';
import Header from './layout/Header';
import Team from './pages/Team';
import ChatbotPage from './pages/ChatbotPage';
import SelfCare from './pages/SelfCare';
import VdgPage from './pages/Vdg';
import Data from './pages/Data';

const App: React.FC = () => {
  const location = useLocation();

  const isChatbotPage = location.pathname === '/chatbot';

  return (
    <>
      {!isChatbotPage && <Header />}
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/about' element={<About />} />
        <Route path='/team' element={<Team />} />
        <Route path='/autocuidado' element={<SelfCare />} />
        <Route path='/vdg' element={<VdgPage />} />
        <Route path='/chatbot' element={<ChatbotPage />} />
        <Route path='/data' element={<Data/>} />
      </Routes>
      {!isChatbotPage && <Footer />}
    </>
  );
};

const WrappedApp: React.FC = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default WrappedApp;
