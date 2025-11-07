import React, { useState } from 'react';

const MyProgressPage = () => {
  const [journal, setJournal] = useState('');

  return (
    <div>
      <h1>My Progress</h1>
      <p>Track your learning journey here.</p>

      <h2>Checklist</h2>
      <div>
        <input type="checkbox" id="lesson1" name="lesson1" />
        <label htmlFor="lesson1">Completed Lesson 1: Biodiversity</label>
      </div>
      <div>
        <input type="checkbox" id="lesson2" name="lesson2" />
        <label htmlFor="lesson2">Completed Lesson 2: Pollution</label>
      </div>
      <div>
        <input type="checkbox" id="lesson3" name="lesson3" />
        <label htmlFor="lesson3">Completed Lesson 3: Conservation</label>
      </div>
      <div>
        <input type="checkbox" id="challenge" name="challenge" />
        <label htmlFor="challenge">Completed the Waste Management Challenge</label>
      </div>

      <h2>Reflective Journal</h2>
      <textarea 
        value={journal} 
        onChange={(e) => setJournal(e.target.value)} 
        rows="10" 
        cols="50"
        placeholder="What did you learn? What questions do you still have?"
      />
      <br />
      <button onClick={() => alert('Journal saved!')}>Save Journal</button>

      <h2>Rating Scale</h2>
      <p>How would you rate your engagement and understanding of the topics?</p>
      <form>
        <input type="radio" id="rating1" name="rating" value="1" />
        <label htmlFor="rating1">1 - Low</label><br />
        <input type="radio" id="rating2" name="rating" value="2" />
        <label htmlFor="rating2">2</label><br />
        <input type="radio" id="rating3" name="rating" value="3" />
        <label htmlFor="rating3">3 - Medium</label><br />
        <input type="radio" id="rating4" name="rating" value="4" />
        <label htmlFor="rating4">4</label><br />
        <input type="radio" id="rating5" name="rating" value="5" />
        <label htmlFor="rating5">5 - High</label>
      </form>

    </div>
  );
};

export default MyProgressPage;
