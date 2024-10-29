// src/pages/Details/Details.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import './Details.css';

const Details = ({ items }) => {
  const { id } = useParams();
  const questionIndex = parseInt(id); // Convierte id a número
  const question = items[questionIndex]; // Obtiene la pregunta correspondiente

  if (!question) {
    return <div>No se encontró la pregunta.</div>; // Mensaje si no hay pregunta
  }

  return (
    <div className="details">
      <h2>Detalles de la Publicación</h2>
      <p>ID de la publicación: {id}</p>
      <p>Pregunta: {question.question}</p>
      <p>Respuesta Correcta: {question.correct_answer}</p>
    </div>
  );
};

export default Details;
