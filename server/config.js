const config = {
    port : process.env.PORT || "8080",
    apiPrefix : process.env.API_PREFIX || 'mongodb+srv://admin:admin1234@cluster0.qakzgxe.mongodb.net/Topics',
    limitVote : process.env.LIMIT_VOTE || 10
}

module.exports = config