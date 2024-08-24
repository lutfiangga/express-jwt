import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import db from "./config/database.js";
// import Users from "./models/UserModel.js";
import router from "./routes/index.js";


dotenv.config();
const app = express();
const PORT = process.env.PORT_SERVER;

try{
    await db.authenticate();
    console.log("database connected");
    // await Users.sync();
} catch(error){
    console.log(error);
}

app.use(cors({
    credentials:true, 
    origin:'http://localhost:3000'
}));
app.use(cookieParser());
app.use(express.json());
app.use(router);

app.listen(PORT, ()=> console.log(`server running on port ${PORT}`));