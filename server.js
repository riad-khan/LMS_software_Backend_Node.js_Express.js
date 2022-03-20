const dotenv = require('dotenv');
const mongoose = require('mongoose')
dotenv.config();
const app = require('./app');

mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
    console.log('database connected successfully');
})
.catch(error =>{
    console.log("something went wrong");
})

const port = process.env.PORT 

app.listen(port, ()=>{
    console.log(`server running at port ${port}` );
})