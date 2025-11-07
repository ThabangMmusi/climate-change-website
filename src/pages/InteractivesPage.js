import React from 'react';

const InteractivesPage = () => {
  return (
    <div>
      <h1>Interactives Page</h1>
      <p>Here you will find simulations, games, and quizzes.</p>

      <h2>Carbon Footprint Calculator</h2>
      <div>
        {/* Basic UI for the calculator */}
        <label>Distance travelled (km): </label>
        <input type="number" />
        <br />
        <label>Electricity usage (kWh): </label>
        <input type="number" />
        <br />
        <button>Calculate</button>
        <h3>Your Carbon Footprint: </h3>
      </div>

      <h2>Game Drive Guidebook</h2>
      <p>Interactive audio-visual guide coming soon...</p>

      <h2>360° Video</h2>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/wu3rW0csfD8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

      <h2>Online Educational Game</h2>
      <p>Engaging game coming soon...</p>

      <h2>Online Quiz</h2>
      <p>I was unable to automatically get the embed code for the Quizlet. Please replace the link below with the embed code from Quizlet.</p>
      <a href="https://quizlet.com/23061846/climate-change-flash-cards/" target="_blank" rel="noopener noreferrer">Climate Change Quizlet</a>

    </div>
  );
};

export default InteractivesPage;
