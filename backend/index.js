const express = require('express')
const app = express()
const port = 5000
const mongoDb = require ("./db")
mongoDb();

app.use((req,res,next)=>{
  res.setHeader("Access-control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-control-Allow-Headers",
    "Origin, X-Requested-with, Content-Type, Accept"
  );
  next();
})

app.use(express.json())
app.use('/api', require('./Routes/CreateUsers'));
app.use('/api', require('./Routes/DisplayData'));

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})
 