import * as React from 'react';
import TopicCard from './components/TopicCard/TopicCard';
import './components/Scrollbar/Scrollbar.css'
import Searchbar from './components/Searchbar/Searchbar.js';
import { Container, Grid } from '@mui/material';



function App() {
  const data = [
    {id: 1, name: "หัวข้อที่ 1"},
    {id: 2, name: "หัวข้อที่ 2"},
    {id: 3, name: "หัวข้อที่ 3"},
    {id: 4, name: "หัวข้อที่ 4"},
    {id: 5, name: "หัวข้อที่ 5"},
    {id: 6, name: "หัวข้อที่ 6"},
    {id: 7, name: "หัวข้อที่ 7"},
    {id: 8, name: "หัวข้อที่ 8"},
    {id: 9, name: "หัวข้อที่ 9"},
    {id: 10, name: "หัวข้อที่ 10"},
    {id: 11, name: "หัวข้อที่ 11"},
    {id: 12, name: "หัวข้อที่ 12"},
    {id: 13, name: "หัวข้อที่ 13"},
    {id: 14, name: "หัวข้อที่ 14"},
    {id: 15, name: "หัวข้อที่ 15"},
    {id: 16, name: "หัวข้อที่ 16"},
    {id: 17, name: "หัวข้อที่ 17"},
    {id: 18, name: "หัวข้อที่ 18"},
    {id: 19, name: "หัวข้อที่ 19"},
    {id: 20, name: "หัวข้อที่ 20"},
    {id: 21, name: "หัวข้อที่ 21"},
    {id: 22, name: "หัวข้อที่ 22"},
    {id: 23, name: "หัวข้อที่ 23"},
    {id: 24, name: "หัวข้อที่ 24"},
    {id: 25, name: "หัวข้อที่ 25"},
    {id: 26, name: "หัวข้อที่ 26"},
    {id: 27, name: "หัวข้อที่ 27"},
    {id: 28, name: "หัวข้อที่ 28"},
    {id: 29, name: "หัวข้อที่ 29"},
    {id: 30, name: "หัวข้อที่ 30"},
    {id: 31, name: "หัวข้อที่ 31"},
    {id: 32, name: "หัวข้อที่ 32"},
    {id: 33, name: "หัวข้อที่ 33"},
    {id: 34, name: "หัวข้อที่ 34"},
    {id: 35, name: "หัวข้อที่ 35"},
    {id: 36, name: "หัวข้อที่ 36"},
    {id: 37, name: "หัวข้อที่ 37"},
    {id: 38, name: "หัวข้อที่ 38"},
    {id: 39, name: "หัวข้อที่ 39"},
    {id: 40, name: "หัวข้อที่ 40"},
    {id: 41, name: "หัวข้อที่ 41"},
    {id: 42, name: "หัวข้อที่ 42"},
]
  return (
    <Container maxWidth='lg' sx={{ mt: '10rem', mb: '2rem'}}>
      {/* <Searchbar/> */}
      <Grid container spacing={1} columns={12}>
        {data.map(e => 
          <Grid item xs={12} lg={6} key={e.id}>
            <TopicCard data={e}/>
          </Grid>)}
      </Grid>
    </Container>
  );
}

export default App;
