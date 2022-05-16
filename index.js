const express= require('express');
const mongoose= require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const userRoute= require('./routes/users');
const authRoute= require('./routes/auth');
const postRoute= require('./routes/posts');
const likeRoute= require('./routes/like');
const followRoute= require('./routes/follow');
const unfollowRoute= require('./routes/unfollow');

dotenv.config();
const app = express();
mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true, useUnifiedTopology:true},()=>{
    console.log('connected to mongoDB')
});

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/users",userRoute);
app.use("/api/auth",authRoute);
app.use("/api/posts",postRoute);
app.use("/api/like",likeRoute);
app.use("/api/follow",followRoute);
app.use("/api/unfollow",unfollowRoute);
app.listen(8800,()=>{
    console.log("Backend server is running")
})