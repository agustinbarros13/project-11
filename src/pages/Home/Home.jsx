// src/pages/Home/Home.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = ({ setItems }) => { // Recibiendo setItems como prop
  const [items, setLocalItems] = useState([]); // Estado local para almacenar preguntas
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=10&lang=es&type=multiple')
      .then(response => response.json())
      .then(data => {
        const questions = data.results.map((item, index) => ({
          id: index,
          question: item.question,
          correct_answer: item.correct_answer
        }));
        setLocalItems(questions); // Actualiza el estado local
        setItems(questions); // También actualiza el estado en App.js
        setLoading(false);
      })
      .catch(error => console.error('Error al obtener los datos:', error));
  }, [setItems]);

  return (
    <div className="home">
      <h2>Página Principal</h2>
      {loading ? (
        <p>Cargando preguntas...</p>
      ) : (
        <ul>
          {items.map(item => ( // Usamos items aquí
            <li key={item.id}>
              <Link to={`/details/${item.id}`}>{item.question}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
