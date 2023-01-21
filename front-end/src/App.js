import * as React from 'react';
import AppBar from './components/Navbar/Navbar';
import TopicCard from './components/TopicCard/TopicCard';
import './components/Scrollbar/Scrollbar.css'

function App() {
  return (
    <div>
      <AppBar/>
      <TopicCard/>
    </div>
  );
}

export default App;
