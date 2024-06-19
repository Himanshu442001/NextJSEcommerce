import express from "express";
import { connectDB } from "./utils/features.js";
import { errorMiddleware } from "./middlewares/error.js";
import NodeCache from "node-cache";
import { config } from "dotenv";
import morgan from "morgan";
import Stripe from "stripe";
import cors from "cors";


// Importing the routes

import  userRoute from "./routes/user.js";
import  productRoute from "./routes/product.js";
import  orderRoute from "./routes/order.js"; 
import paymentRoute from "./routes/payment.js"
import  statsRoute from "./routes/statistics.js"


config({
    path:"./.env",
})




const port = process.env.PORT || 4000;
const mongoURI = process.env.MONGO_URI || "";
const stripeKey = process.env.SECRET_KEY || "";


connectDB(mongoURI);


export const stripe = new Stripe(stripeKey);


// export node cache

export const myCache = new NodeCache();


// Usage of Express Package
const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

 

app.get("/", (req,res)=>{
res.send("API Working Properly  /api/v1");
});

// Using the Imported Routes

app.use("/api/v1/user", userRoute);
app.use("/api/v1/product", productRoute);
app.use("/api/v1/order", orderRoute);
app.use("/api/v1/payment", paymentRoute);
app.use("/api/v1/dashboard", statsRoute);






app.use("/uploads", express.static("uploads"));


app.use(errorMiddleware);
app.listen(port, ()=>{
    console.log(`Server is all  working on http://localhost:${port}`);
});