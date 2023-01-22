import './App.css';
import CardTopic from './Components/CardTopic';
import Container from '@mui/material/Container';
import { useEffect, useState } from 'react';
import { Box, Card, Grid } from '@mui/material';
import { motion } from 'framer-motion'
import Loading from './Components/Loading';
import Incoming from './Components/Incoming';
import IncommingNow from './Components/IncommingNow';


function App() {
  const [currentPage, setCurrentPage] = useState(1)
  const [topics, setTopics] = useState([])

  useEffect(() => {
    let current_page = 1
    let time_counting = 1
    let wait_until = 6

    let loop = setInterval(() => {
      if (time_counting < topics.length) {
        if (time_counting % wait_until === 0) {
          // Change Page
          current_page += 1
          setCurrentPage(current_page)
        }
      } else {
        // Return To First Page
        time_counting = 0
        current_page = 1
        setCurrentPage(current_page)
      }

      time_counting += 1

    }, 1000)

    return () => clearInterval(loop)

  }, [topics.length])

  const topicsPerPage = 6

  const [inComingLst, setIncomingLst] = useState([])

  useEffect(() => {

    let mock = ["engineering", "disasters", "apes", "Red Cross", "agriculture", "potatoes", "coffin", "toads", "dentistry", "pipe organs", "World War 1", "Boy Scouts"]
    let index = 0;
    let loop = setInterval(() => {
      setIncomingLst(pre => [...pre, mock[index]])
      index += 1
      if (index > mock.length - 1) {
        clearInterval(loop)
        index = 0;
      }
    }, 4000)

    return () => clearInterval(loop)

  }, [])

  const callback_when_end_incomming = (title) => {

    setTopics(pre => [...pre, title])
    setTimeout(() => {
      setIncomingLst(pre => pre.filter(e => e !== title))
    }, 500);
  }


  return (

    <Container maxWidth="xl">
      <Box sx={{
        display: 'grid',
        gridTemplateRows: '100px 1fr 1fr',
        width: '100%',
        height: '90vh',
        gap: '1rem'
      }}>
        <Box>
          <Incoming />
        </Box>
        <Card elevation={5} sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden'
        }}>
          {inComingLst.length === 0 ? <Loading /> :
            <Grid container columns={12} spacing={1} alignItems="center" justifyContent='center'>
              {inComingLst.map(e =>
                <Grid item xl={4}>
                  <motion.div key={e} layout>
                    <IncommingNow key={e} title={e} callback={callback_when_end_incomming} />
                  </motion.div>
                </Grid>)}
            </Grid>
          }
        </Card>
        <Card elevation={5} sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden'
        }}>
          <Grid
            container
            columns={12}
            spacing={1}
            sx={{
              width: '100%',
              padding: '1rem'
            }}
            alignItems="center"
            justifyContent='center'
          >
            {topics.slice(topicsPerPage * (currentPage - 1), topicsPerPage * currentPage).map((e, i) =>
              <Grid key={i} item xl={4}>
                <motion.div
                  layout
                  key={e}
                  initial={{ translateX: 2000 }}
                  animate={{ translateX: 0 }}
                  exit={{ translateX: -2000 }}
                  transition={{ delay: 0.1 * i }}
                >
                  <CardTopic Topic={e} />
                </motion.div>

              </Grid>
            )}

          </Grid>
        </Card>
      </Box>
    </Container>
  );
}

export default App;
