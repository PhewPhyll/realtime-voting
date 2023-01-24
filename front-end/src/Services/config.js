const isProd = !(!process.env.NODE_ENV || process.env.NODE_ENV === 'development')

const config = {
    isProd,
    apiUrlPrefix: isProd ? '' : 'http://localhost:8080',
    key : isProd ? process.env.KEY : 'barcamp007'
}

export default config