import React from 'react';

//Pages
import CoursePage from './pages/CoursePage';

//Components
import Navbar from './components/Navbar';

//Styles
import './scss/CoursePage.css';
import './scss/Navbar.css';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <CoursePage />
    </div>
  );
}

export default App;
