const { Schema, default: mongoose } = require('mongoose')

const collection = "Topics"

const TopicModel = new Schema({
    title : String,
    votes : [String]
})

module.exports = mongoose.model(collection , TopicModel)