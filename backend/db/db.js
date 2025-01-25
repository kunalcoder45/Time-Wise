import mongoose from "mongoose";


function connect () {
    mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/soen' )
        .then(() => {
         console.log("Connected to MongoDB");
        })
        .catch(error => {
         console.error("Error connecting to MongoDB:", error.message);
        });
}


export default connect;