import React, { useEffect } from 'react';
import TopicCard from './components/TopicCard/TopicCard';
import Searchbar from './components/Searchbar/Searchbar.js';
import Footer from './components/Footer/Footer';

import { Box, Container, Grid, Typography } from '@mui/material';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import backend from './Services/backend'

//Style
import './components/Scrollbar/Scrollbar.css'
import AlertBox from './components/AlertBox/AlertBox';
import Decrypt from './Services/Decrypt';

const userContext = React.createContext()

function App() {

  const [data, setData] = useState([])
  const [alert, setAlert] = useState(false)
  const [centent, setContent] = useState("")
  const [user, setUser] = useState("abc")

  //Fetch Topics
  useEffect(() => {

    let decrypt_user = Decrypt(window.location.search.replace('?uid=', ''))

    if (!!decrypt_user) {
      setUser(decrypt_user)
      backend.get(`/topics/?user=${decrypt_user}`).then(res => {
        if (res.data.Istime) {
          let me_vote = res.data.topics_to_send.filter(e => e.status)
          let not_vote = res.data.topics_to_send.filter(e => !e.status).sort(() => 0.5 - Math.random())
          setData(me_vote.concat(not_vote))
        } else {

          setContent("ขณะนี้ยังไม่เปิดให้โหวต กรุณารอให้ถึงเวลาแล้วเข้ามาอีกครั้ง")
          setAlert(true)

        }

      })
    } else {

      setContent("รูปแบบ QRcode หรือ URL ไม่ถูกต้อง กรุณาติดต่อเจ้าหน้าที่")
      setAlert(true)

    }

  }, [user])

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
        display: 'flex',
        flexDirection: 'column',
        minHeight : '100vh'
      }}>
        <Box sx={{
          zIndex: 200,
          backgroundColor: '#fff',
          padding: '1rem',
          position: 'sticky',
          mt: '7rem',
          top: '3.7rem'
        }}>
          {alert ? <Typography sx={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: "translate(-50% ,-50%)"
          }} variant='body2'>It's not time to vote yet.</Typography> :
            <Container>
              <Searchbar
                placeholder="Search Topic"
                onChange={(event) => { setSearchTerm(event.target.value) }}
              />
            </Container>}
        </Box>
        <Container maxWidth='lg' sx={{ mt: '1rem', mb: '5rem' }}>
          <AnimatePresence>
            <Grid container spacing={2} columns={12}>
              {data.filter(search_filter).map((e, i) =>
                <Grid item xs={12} lg={6} key={e._id} sx={{ zIndex: data.length - i }}>
                  <motion.div key={e._id} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                    <TopicCard data={e} callback={callback} />
                  </motion.div>
                </Grid>
              )}
            </Grid>
          </AnimatePresence>

          <AlertBox content={centent} alert={alert} callbackClose={() => { }} />
        </Container>
        <Footer />
      </Box>
    </userContext.Provider>

  );
}

export { userContext }
export default App;


