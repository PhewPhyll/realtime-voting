const config = {
    port : process.env.PORT || "8080",
    databaseURL : process.env.DATABASE_URL || 'mongodb+srv://admin:admin1234@cluster0.qakzgxe.mongodb.net/Topics',
    limitVote : process.env.LIMIT_VOTE || 10
}

module.exports = config