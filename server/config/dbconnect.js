const {default: mongoose} = require('mongoose');
mongoose.set('strictQuery', false);


const dbConnect = async () => {
    try {
        const uri = process.env.MONGO_URI; // hoặc DB_URI
        const conn = await mongoose.connect(uri)
        if (conn.connection.readyState === 1) {
            console.log("DB Connected Successfully")
        } else {
            console.log("DB Connection Failed")
        }
    } catch (error) {
        console.log("DB Connection Error", error)
        throw new Error(error)

    }
}

module.exports = dbConnect;