import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import LessonsPage from './pages/LessonsPage';
import InteractivesPage from './pages/InteractivesPage';
import ChallengePage from './pages/ChallengePage';
import AboutPage from './pages/AboutPage';
import MyProgressPage from './pages/MyProgressPage';
import NewsPage from './pages/NewsPage';
import './App.css';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/lessons" element={<LessonsPage />} />
        <Route path="/interactives" element={<InteractivesPage />} />
        <Route path="/challenge" element={<ChallengePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/progress" element={<MyProgressPage />} />
        <Route path="/news" element={<NewsPage />} />
      </Routes>
    </Layout>
  );
}

export default App;