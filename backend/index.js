import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";

import userRoute from "./routes/user.route.js";
dotenv.config({});
const app = express()



const port = process.env.PORT || 3000;

//middlerware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const corsOptions={
    origin:'http//localhost:5173',
    Credentials: true
}

app.use(cors(corsOptions));

// api's
app.use("/api/v1/user", userRoute);
// app.use("/api/v1/company", companyRoute);
// app.use("/api/v1/job", jobRoute);
// app.use("/api/v1/application", applicationRoute);


app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => {
    connectDB(); 
    console.log(`Example app listening on port ${port}!`)
})