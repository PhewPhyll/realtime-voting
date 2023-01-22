import React, { useEffect } from 'react';
import TopicCard from './components/TopicCard/TopicCard';
import Searchbar from './components/Searchbar/Searchbar.js';
import { Box, Container, Grid } from '@mui/material';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import backend from './Services/backend'

//Style
import './components/Scrollbar/Scrollbar.css'

const userContext = React.createContext()

function App() {

  const [data, setData] = useState([])
  const [user] = useState("abc")

  //Fetch Topics
  useEffect(() => {
    backend.get(`/topics/?user=${user}`).then(res => {
      let me_vote = res.data.filter(e => e.status)
      let not_vote = res.data.filter(e => !e.status).sort(() => 0.5 - Math.random())
      setData(me_vote.concat(not_vote))
    })
  },[user])

  const [searchTerm, setSearchTerm] = useState('')

  //Search filter function
  const search_filter = (val) => {

    if (searchTerm === "") {
      return val
    }
    else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return val
    }

  }

  //Callback from Topic Card when click
  const callback = (res) => {

    let dummy = data.map(e => {
      if (e._id === res._id) {
        e.status = !e.status
      }
      return e
    })

    let me_vote = dummy.filter(e => e.status)
    let not_vote = dummy.filter(e => !e.status)

    setData(me_vote.concat(not_vote))

  }

  return (
    <userContext.Provider value={user}>
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
    </userContext.Provider>

  );
}

export {userContext}
export default App;


