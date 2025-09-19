const userRoutes = require('./user')
const {notFound, errHandler} = require('../middleware/errHandler')

const initRoutes = (app) => {
    app.use('/api/user', userRoutes)



    app.use(notFound)
    app.use(errHandler)
}

module.exports = initRoutes