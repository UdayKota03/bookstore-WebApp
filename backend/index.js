import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
const app = express();
import cors from "cors";
app.use(cors())
app.use(express.json());


import bookRoute from "./route/book.route.js"
import userRoute from "./route/user.route.js"
dotenv.config();

const PORT=process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

//connect to mongoDB
try {
    mongoose.connect(URI,{
        // useNewUrlParser: true,
        // useUnifiedUrlTopology: true //if we are using atlas we are not supposed to give this 2 lines of code

    });
    console.log("Connected to mongoDB")
} catch (error) {
    console.log("Error connecting to mongoDB ", error);
}

//defining routes
app.use("/book", bookRoute)
app.use("/user", userRoute)


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})