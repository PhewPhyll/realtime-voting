import React, { useEffect, useState } from 'react'
import { Card, CardContent, Container, Grid, Typography, Button } from '@mui/material'
import CardTop from './CardTop'
import { AnimatePresence, motion } from 'framer-motion'
import CardRange from './CardRange'
import ReconnectingEventSource from 'reconnecting-eventsource'
import config from '../../config'
import backend from '../../Services/backend'
import Wave from '../FooterWave/Wave'
import xlsx from 'json-as-xlsx'

function Votepage() {

  const [allTopics, setAllTopics] = useState([])

  useEffect(() => {
    backend.get('/topics_admin').then(res => {
      setAllTopics(res.data.topics_to_send)
    })
  }, [])


  useEffect(() => {

    const es = new ReconnectingEventSource(config.apiUrlPrefix);

    es.onmessage = async (event) => {

      let res = await JSON.parse(event.data)

      if (res.event === 'vote') {

        setAllTopics(pre => pre.map(e => {
          if (e._id === res.id) {
            e.votes = res.votes
          }

          return e
        }))

      }

    }

    return () => es.close()

  }, [allTopics])

  const Summary = () => {
    let all = allTopics.sort((a, b) => b.votes - a.votes)
    let top10 = all.slice(0, 10)
    let long_duration_top_10 = top10.filter(e => e.long_duration)
    let short_duration_top_10 = top10.filter(e => !e.long_duration)
    let basic_topics = all.filter(e => e.category === "Basic")
    let intermediate_topics = all.filter(e => e.category === "Intermediate")
    let advance_topics = all.filter(e => e.category === "Advance")
    let other = all.slice(10, all.length)
    let obj = [
      {
        sheet: "Top10 1Hr",
        columns : [
          {label: "title" , value : (row) => row.title},
          {label: "speaker" , value : (row) => row.speaker},
          {label : "votes" , value : (row) => row.votes},
          {label : "category" , value : (row) => row.category}
        ],
        content : long_duration_top_10
      },
      {
        sheet: "Top10 30min",
        columns : [
          {label: "title" , value : (row) => row.title},
          {label: "speaker" , value : (row) => row.speaker},
          {label : "votes" , value : (row) => row.votes},
          {label : "category" , value : (row) => row.category}
        ],
        content : short_duration_top_10
      },
      {
        sheet: "Other",
        columns : [
          {label: "title" , value : (row) => row.title},
          {label: "speaker" , value : (row) => row.speaker},
          {label: "duration" , value : (row) => (row.long_duration ? '1 Hour' : '30 Minute')},
          {label : "votes" , value : (row) => row.votes},
          {label : "category" , value : (row) => row.category}
        ],
        content : other
      },
      {
        sheet: "Basic",
        columns : [
          {label: "title" , value : (row) => row.title},
          {label: "speaker" , value : (row) => row.speaker},
          {label: "duration" , value : (row) => (row.long_duration ? '1 Hour' : '30 Minute')},
          {label : "votes" , value : (row) => row.votes},
          {label : "category" , value : (row) => row.category}
        ],
        content : basic_topics
      },
      {
        sheet: "Intermediate",
        columns : [
          {label: "title" , value : (row) => row.title},
          {label: "speaker" , value : (row) => row.speaker},
          {label: "duration" , value : (row) => (row.long_duration ? '1 Hour' : '30 Minute')},
          {label : "votes" , value : (row) => row.votes},
          {label : "category" , value : (row) => row.category}
        ],
        content : intermediate_topics
      },
      {
        sheet: "Advance",
        columns : [
          {label: "title" , value : (row) => row.title},
          {label: "speaker" , value : (row) => row.speaker},
          {label: "duration" , value : (row) => (row.long_duration ? '1 Hour' : '30 Minute')},
          {label : "votes" , value : (row) => row.votes},
          {label : "category" , value : (row) => row.category}
        ],
        content : advance_topics
      },
      {
        sheet: "All Topices",
        columns : [
          {label: "title" , value : (row) => row.title},
          {label: "speaker" , value : (row) => row.speaker},
          {label: "duration" , value : (row) => (row.long_duration ? '1 Hour' : '30 Minute')},
          {label : "votes" , value : (row) => row.votes},
          {label : "category" , value : (row) => row.category}
        ],
        content : all
      },
    ]

    let setting = {
      fileName: 'SummaryVote',
      extraLength: 3, 
      writeMode: "writeFile", 
      writeOptions: {}, 
      RTL: false
    }

    xlsx(obj , setting)


  }

  return (
    <Container maxWidth="xl" sx={{ mt: '3rem' }}>
      <Grid container columns={12} spacing={2} sx={{ height: '90vh' }}>
        <Grid item xl={6}>
          <Card elevation={5} sx={{ height: '100%', borderRadius: '1rem' }}>
            <CardContent sx={{ height: '100%' }}>
              <Typography sx={{ textAlign: "center" }} fontWeight='bold' color='secondary' variant='h2'>TOP 10</Typography>
              <Grid
                sx={{ height: '100%', mt: '1rem' }}
                container
                columns={12}
                spacing={2}
                justifyContent='flex-start'
                alignContent='start'
              >
                <AnimatePresence>
                  {allTopics.sort((a, b) => b.votes - a.votes).filter(e => e.votes >= 3).slice(0, 10).map((e, i) =>
                    <Grid item xl={6} key={e._id}>
                      <motion.div
                        key={e._id}
                        layout
                        initial={{ translateY: 500 }}
                        animate={{ translateY: 0 }}
                        exit={{ translateY: 1000, opacity: 0, scale: 0 }}
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
          <Card elevation={5} sx={{ height: '100%', borderRadius: '1rem' }}>
            <CardContent>
              <Typography sx={{ textAlign: "center" }} fontWeight='bold' color='secondary' variant='h4'>Topics</Typography>
              <Grid sx={{ height: '100%', mt: '1rem' }}
                container
                columns={12}
                spacing={1}
                alignContent="center">
                <AnimatePresence>
                  {allTopics.sort((a, b) => b.votes - a.votes).filter(e => e.votes >= 3).slice(10 , allTopics.length).map((e, i) =>
                    <Grid key={e._id} item xl={6}>
                      <motion.div
                        key={e._id}
                        layout
                        initial={{ translateY: 500 }}
                        animate={{ translateY: 0 }}
                        exit={{ scale : 0 , opacity : 0 }}
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
      <Wave />
      <Button sx={{
        position: 'absolute',
        right: 30,
        bottom: 30
      }} variant='text' onClick={Summary}>Summary</Button>
    </Container>
  )
}

export default Votepage