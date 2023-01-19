const express = require('express')
const { default: mongoose } = require('mongoose')
const config = require('./config')
const app = express()
const TopicModel = require('./models/Topic')

mongoose.connect(config.apiPrefix).then(() => {
    console.log("Connected To Database.")
}).catch((err) => {
    console.error(err)
})

app.use(express.json())

//Add Topic
app.post('/add_topic' , async (req , res) => {
    const { topics } = await req.body
    topics.forEach(async element => {
        const topic = await new TopicModel({title : element})
        await topic.save()
    });
    res.status(200).send({message : `Now Added ${topics}`})

})

//User Vote
app.post('/voted' , async (req , res) => {
    const {user , id} = req.body
    const topic_selection = await TopicModel.findOne({_id : id})
    let status = false
    if(await topic_selection.votes.includes(user)){
        topic_selection.votes = await topic_selection.votes.filter(e => e !== user)
        status = false
    }else{
        await topic_selection.votes.push(user)
        status = true
    }

    await topic_selection.save()
    res.status(200).send({user , id , status : status})
})

//Get Topics
app.get('/topics' , async (req , res) => {
    const { user } = req.body
    const topics = await TopicModel.find({})
    const topics_to_send = []
    for (let i = 0; i < topics.length; i++) {
        let userInVote = topics[i].votes.includes(user)
        topics_to_send.push({
            _id : topics[i]._id,
            title : topics[i].title,
            votes : topics[i].votes.length,
            status  :userInVote
        })

    }
    res.status(200).send(topics_to_send)
})

app.listen(config.port , () => {
    console.log("Server is Running...")
})
