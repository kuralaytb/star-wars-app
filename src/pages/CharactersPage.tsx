// src/pages/CharactersPage.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CharactersPage: React.FC = () => {
  const [characters, setCharacters] = useState<any[]>([]); // Состояние для хранения персонажей
  const [page, setPage] = useState(1); // Состояние для номера текущей страницы
  const navigate = useNavigate(); // Хук для перехода на страницу деталей

  useEffect(() => {
    axios.get(`https://swapi.dev/api/people/?page=${page}`)
      .then(response => setCharacters(response.data.results)) // Устанавливаем данные персонажей из ответа
      .catch(error => console.error("Error fetching characters:", error)); // Обрабатываем ошибку запроса
  }, [page]); // Зависимость от номера страницы

  const handleNextPage = () => setPage(prev => prev + 1); // Функция для перехода на следующую страницу
  const handlePrevPage = () => setPage(prev => (prev > 1 ? prev - 1 : prev)); // Функция для перехода на предыдущую страницу

  return (
    <div className="container mt-5">
      <h2>Characters</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Height</th>
            <th>Mass</th>
          </tr>
        </thead>
        <tbody>
          {characters.map((character, index) => (
            <tr key={index} onClick={() => navigate(`/details/${index + 1}`)}>
              <td>{character.name}</td>
              <td>{character.height}</td>
              <td>{character.mass}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="d-flex justify-content-between mt-3">
        <button onClick={handlePrevPage} className="btn btn-secondary" disabled={page === 1}>
          Previous
        </button>
        <button onClick={handleNextPage} className="btn btn-primary">
          Next
        </button>
      </div>
    </div>
  );
};

export default CharactersPage;
