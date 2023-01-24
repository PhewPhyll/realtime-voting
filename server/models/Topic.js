const { Schema, default: mongoose } = require('mongoose')

const collection = "Topics"

const TopicModel = new Schema({
    title : String,
    speaker : String,
    long_duration  :Boolean,
    votes : [String]
})

module.exports = mongoose.model(collection , TopicModel)