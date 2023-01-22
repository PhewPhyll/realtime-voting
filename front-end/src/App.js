import * as React from 'react';

import TopicCard from './components/TopicCard/TopicCard';
import Searchbar from './components/Searchbar/Searchbar.js';
import './components/Scrollbar/Scrollbar.css'

import { Box, Container, Grid } from '@mui/material';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

function App() {

  const [data, setData] = useState([
    { _id: 1, title: "Topic 1", check: false },
    { _id: 2, title: "Barcamp", check: false },
    { _id: 3, title: "Fast codeing", check: false },
    { _id: 4, title: "มื้อเย็น", check: false },
    { _id: 5, title: "Boardgame", check: false },
    { _id: 6, title: "หัวข้อที่ 6", check: false },
    { _id: 7, title: "หัวข้อที่ 7", check: false },
    { _id: 8, title: "หัวข้อที่ 8", check: false },
    { _id: 9, title: "หัวข้อที่ 9", check: false },
    { _id: 10, title: "หัวข้อที่ 10", check: false },
    { _id: 11, title: "หัวข้อที่ 11", check: false },
    { _id: 12, title: "หัวข้อที่ 12", check: false },
    { _id: 13, title: "หัวข้อที่ 13", check: false },
    { _id: 14, title: "หัวข้อที่ 14", check: false },
    { _id: 15, title: "หัวข้อที่ 15", check: false },
    { _id: 16, title: "หัวข้อที่ 16", check: false },
    { _id: 17, title: "หัวข้อที่ 17", check: false },
    { _id: 18, title: "หัวข้อที่ 18", check: false },
    { _id: 19, title: "หัวข้อที่ 19", check: false },
    { _id: 20, title: "หัวข้อที่ 20", check: false },
    { _id: 21, title: "หัวข้อที่ 21", check: false },
    { _id: 22, title: "หัวข้อที่ 22", check: false },
    { _id: 23, title: "หัวข้อที่ 23", check: false },
    { _id: 24, title: "หัวข้อที่ 24", check: false },
    { _id: 25, title: "หัวข้อที่ 25", check: false },
    { _id: 26, title: "หัวข้อที่ 26", check: false },
    { _id: 27, title: "หัวข้อที่ 27", check: false },
    { _id: 28, title: "หัวข้อที่ 28", check: false },
    { _id: 29, title: "หัวข้อที่ 29", check: false },
    { _id: 30, title: "หัวข้อที่ 30", check: false },
    { _id: 31, title: "หัวข้อที่ 31", check: false },
    { _id: 32, title: "หัวข้อที่ 32", check: false },
    { _id: 33, title: "หัวข้อที่ 33", check: false },
    { _id: 34, title: "หัวข้อที่ 34", check: false },
    { _id: 35, title: "หัวข้อที่ 35", check: false },
    { _id: 36, title: "หัวข้อที่ 36", check: false },
    { _id: 37, title: "หัวข้อที่ 37", check: false },
    { _id: 38, title: "หัวข้อที่ 38", check: false },
    { _id: 39, title: "หัวข้อที่ 39", check: false },
    { _id: 40, title: "หัวข้อที่ 40", check: false },
    { _id: 41, title: "หัวข้อที่ 41", check: false },
    { _id: 42, title: "หัวข้อที่ 42", check: false },
  ])

  const [searchTerm, setSearchTerm] = useState('')

  const search_filter = (val) => {

    if (searchTerm === "") {
      return val
    }
    else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return val
    }

  }

  const callback = (res) => {

    let dummy = data.map(e => {
      if (e._id === res._id) {
        e.check = !e.check
      }
      return e
    })

    let me_vote = dummy.filter(e => e.check)
    let not_vote = dummy.filter(e => !e.check)

    setData(me_vote.concat(not_vote))

  }

  return (
    <Box>
      <Box sx={{
        zIndex: 200,
        backgroundColor: '#fff',
        padding: '1rem',
        position: 'sticky',
        mt: '7rem',
        top: '3.7rem'
      }}>
        <Container>
          <Searchbar
            placeholder="Search Topic"
            onChange={(event) => { setSearchTerm(event.target.value) }}
          />
        </Container>
      </Box>
      <Container maxWidth='lg' sx={{ mt: '1rem', mb: '2rem' }}>
        <AnimatePresence>
          <Grid container spacing={2} columns={12}>
            {data.filter(search_filter).map((e, i) =>
              <Grid item xs={12} lg={6} key={e._id} sx={{ zIndex: data.length - i }}>
                <motion.div key={e._id} layout initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5}}>
                  <TopicCard data={e} callback={callback} />
                </motion.div>
              </Grid>
            )}
          </Grid>
        </AnimatePresence>
      </Container>
    </Box>

  );
}

export default App;


