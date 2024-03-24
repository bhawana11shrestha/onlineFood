const mongoose = require('mongoose');

const mongoURL = "mongodb+srv://elbistha:Love2nepal@cluster0.rfvexhh.mongodb.net/onlinefood?retryWrites=true&w=majority&appName=Cluster0"
const mongoDb = async () => {
    await mongoose.connect(mongoURL, { useNewUrlParser: true }, async (err, result) => {
        if (err)
            console.log("---", err)
        else {
            console.log("connected successfully");
            const fetched_data = await mongoose.connection.db.collection("food_items");
            fetched_data.find({}).toArray(function (err, data) {
                if (err)
                    console.log(err);
                else
                    console.log(data);
            })
        } 
    });

}

module.exports = mongoDb;