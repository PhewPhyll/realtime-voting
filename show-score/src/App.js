import logo from './logo.svg';
import './App.css';
import CardTopic from './Components/CardTopic';
import Container from '@mui/material/Container';
import { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import { motion } from 'framer-motion'

function App() {
  const [currentPage, setCurrentPage] = useState(1)
  const [topics, setTopics] = useState(['1 Topic', '2 Topic', '3 Topic', '4 Topic', '5 Topic', '6 Topic',
    '7 Topic', '8 Topic', '9 Topic', '10 Topic', '11 Topic', '12 Topic'])

  useEffect(() => {
    let current_page = 1
    let time_counting = 1
    let loop = setInterval(() => {
      if (time_counting < topics.length) {
        if (time_counting % 6 === 0) {
          current_page += 1
          setCurrentPage(current_page)
        }
      } else {
        time_counting = 0
        current_page = 1
        setCurrentPage(1)
      }

      time_counting += 1

    }, 1000)

    return () => clearInterval(loop)

  }, [topics.length])

  const topicPerPage = 6
  return (
    <Container maxWidth="lg">
      <Grid container rowSpacing={1} columns={18} spacing={1}>

        {topics.slice(topicPerPage * (currentPage - 1), topicPerPage * currentPage).map((e, i) =>
          <Grid key={i} item lg={6}>
            <motion.div
              layout
              key={e}
              initial={{ translateX: 2000 }}
              animate={{ translateX: 0 }}
              exit={{ translateX: -2000 }}
              style={{ height: '100%', width: '100%' }}
              transition={{ delay: 0.1 * i }}
            >
              <CardTopic Topic={e} />
            </motion.div>
          </Grid>
        )}

      </Grid>
    </Container>
  );
}

export default App;
