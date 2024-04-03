const mongoose = require('mongoose');

const mongoURL = "mongodb+srv://elbistha:Love2nepal@cluster0.rfvexhh.mongodb.net/onlinefood?retryWrites=true&w=majority&appName=Cluster0"
const mongoDb = async () => {
    await mongoose.connect(mongoURL, { useNewUrlParser: true }, async (err, result) => {
        if (err)
            console.log("---", err)
        else {
            console.log("connected successfully");
            const fetched_data = await mongoose.connection.db.collection("food_items");
            fetched_data.find({}).toArray(async function (err, data) {
                const foodCategory = await mongoose.connection.db.collection("food_category");
                foodCategory.find({}).toArray(function (err, catData) {
                    if (err) { console.log(err); }
                    else {
                        global.food_items = data;
                        global.food_category = catData;
                    }
                })

                // if (err)
                //     console.log(err);
                // else
                //     global.food_items = data;
                // console.log(global.food_items)
            })
        }
    });

}

module.exports = mongoDb;