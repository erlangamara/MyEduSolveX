import React from 'react';

//Pages
import CoursePage from './pages/CoursePage';

//Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

//Styles
import './scss/CoursePage.css';
import './scss/Navbar.css';
import './scss/Footer.css';

function App() {
  return (
    <div>
      <Navbar />
      <CoursePage />
      <Footer />
    </div>
  );
}

export default App;
