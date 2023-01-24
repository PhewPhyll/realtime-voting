const isProd = !(!process.env.NODE_ENV || process.env.NODE_ENV === 'development')

const config = {
    isProd,
    apiUrlPrefix: isProd ? '' : 'http://192.168.1.7:8080',
    key : isProd ? process.env.KEY : 'barcamp007'
}

export default config