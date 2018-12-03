const prod = process.env.NODE_ENV === 'production'

module.exports = {
    'process.env.BACKEND_URL': prod ? 'http://localhost:80' : 'http://localhost:80'
}   