const prod = process.env.NODE_ENV === 'production'

module.exports = {
    'process.env.BACKEND_URL': prod ? 'http://120.79.49.128' : 'http://localhost:3000'
}   