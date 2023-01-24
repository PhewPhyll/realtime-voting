import React, { useEffect, useState } from 'react'
import { Card, CardContent, Container, Grid, Typography } from '@mui/material'
import CardTop from './CardTop'
import { AnimatePresence, motion } from 'framer-motion'
import CardRange from './CardRange'
import ReconnectingEventSource from 'reconnecting-eventsource'
import config from '../../config'
import backend from '../../Services/backend'

function Votepage() {

  const [allTopics, setAllTopics] = useState([])

  useEffect(() => {
    backend.get('/topics/?user=admin').then(res => {
      setAllTopics(res.data.topics_to_send)
    })
  }, [])


  useEffect(() => {

    const es = new ReconnectingEventSource(config.apiUrlPrefix);

    es.onmessage = (event) => {

      let res = JSON.parse(event.data)

      if (res.event === 'vote') {

        console.log(res)

        setAllTopics(pre => pre.map(e => {
          if (e._id === res.id) {
            if (res.status) {
              e.votes += 1
            } else {
              e.votes -= 1
            }
          }

          return e
        }))

      }

    }

    return () => es.close()

  }, [])

  return (
    <Container maxWidth="xl" sx={{ mt: '3rem' }}>
      <Grid container columns={12} spacing={2} sx={{ height: '90vh' }}>
        <Grid item xl={6}>
          <Card elevation={5} sx={{ height: '100%' }}>
            <CardContent sx={{ height: '100%' }}>
              <Typography sx={{ textAlign: "center" }} fontWeight='bold' color='secondary' variant='h2'>TOP 10</Typography>
              <Grid
                sx={{ height: '100%', mt: '1rem' }}
                container
                columns={12}
                spacing={2}
              >
                <AnimatePresence>
                  {allTopics.sort((a, b) => b.votes - a.votes).filter(e => e.votes >= 3).slice(0, 10).map((e, i) =>
                    <Grid item xl={6} key={e._id}>
                      <motion.div
                        key={e._id}
                        layout
                        initial={{ translateY: 500 }}
                        animate={{ translateY: 0 }}
                        exit={{ opacity : 0 , scale : 0 }}
                        transition={{ delay: 0.1 * i }}
                      >
                        <CardTop index={i} data={e} />
                      </motion.div>
                    </Grid>)}
                </AnimatePresence>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xl={6}>
          <Card elevation={5} sx={{ height: '100%' }}>
            <CardContent>
              <Typography sx={{ textAlign: "center" }} fontWeight='bold' color='secondary' variant='h4'>Topics</Typography>
              <Grid sx={{ height: '100%', mt: '1rem' }}
                container
                columns={12}
                spacing={1}
                alignContent="center">
                <AnimatePresence>
                  {allTopics.sort((a, b) => b.votes - a.votes).filter(e => e.votes >= 3).map((e, i) =>
                    <Grid key={e._id} item xl={6}>
                      <motion.div
                        key={e._id}
                        layout
                        initial={{ translateY: 500 }}
                        animate={{ translateY: 0 }}
                      >
                        <CardRange data={e} />
                      </motion.div>
                    </Grid>
                  )}
                </AnimatePresence>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Votepage