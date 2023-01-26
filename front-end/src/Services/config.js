const isProd = !(!process.env.NODE_ENV || process.env.NODE_ENV === 'development')

const config = {
    isProd,
    apiUrlPrefix: isProd ? '/api' : 'http://localhost:3001/api',
    key : isProd ? process.env.REACT_APP_KEY : 'barcamp007'
}

export default config