import * as React from 'react';
import AppBar from './components/Navbar/Navbar';
import TopicCard from './components/TopicCard/TopicCard';
import './components/Scrollbar/Scrollbar.css'
import Searchbar from './components/Searchbar/Searchbar.js';


function App() {
  return (
    <div>
      <AppBar/>
      <Searchbar/>
      <TopicCard/>
    </div>
  );
}

export default App;
