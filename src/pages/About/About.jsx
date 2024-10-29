import React from 'react';
import './About.css';

const About = () => (
  <div className="about">
    <h2>About This Project</h2>
    <p>This project demonstrates a simple React application that showcases the use of routing, state management, and API calls to create an interactive quiz platform. Users can navigate through different pages, including a home page that displays trivia questions fetched from the Open Trivia Database API in Spanish. Each question is linked to a details page that provides more information about the selected trivia question.</p>
    <p>
    The application is designed to offer a seamless user experience with clear navigation and an engaging interface. It employs React Router for client-side routing and utilizes hooks like useEffect and useState for managing state and side effects. This project serves as a foundational example of building responsive and user-friendly web applications with React.
    </p>
  </div>
);

export default About;
