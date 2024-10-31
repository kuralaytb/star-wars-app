
import React from 'react'; // Импортируем библиотеку React
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Импортируем компоненты для маршрутизации
import CharactersPage from './pages/CharactersPage'; // Импортируем страницу с персонажами
import LoginPage from './pages/LoginPage';
// import PlanetsPage from './pages/PlanetsPage'; // Импортируем страницу с планетами
// import StarshipsPage from './pages/StarshipsPage'; // Импортируем страницу с кораблями
// import DetailsPage from './pages/DetailsPage'; // Импортируем страницу деталей сущности
// import Navbar from './components/Navbar'; // Импортируем компонент навигации

const App: React.FC = () => { // Объявляем функциональный компонент App
  return (
    <Router> 
      {/* <Navbar /> // Добавляем компонент навигации */}
      <div className="container mt-3"> 
        <Routes> 
          <Route path="/" element={<LoginPage />} /> 
          <Route path="/people" element={<CharactersPage />} /> 
          {/* <Route path="/planets" element={<PlanetsPage />} /> // Страница с планетами
          <Route path="/starships" element={<StarshipsPage />} /> // Страница с кораблями
          <Route path="/details/:id" element={<DetailsPage />} /> // Страница с деталями сущности, где :id - параметр */}
        </Routes>
      </div>
    </Router>
  );
};

export default App; // Экспортируем компонент для использования в index.tsx