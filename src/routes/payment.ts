import express from "express";
import { authorizedAdminOnly } from "../middlewares/auth.js";
import {  allCoupons, applyDiscount, createPaymentIntent, deleteCoupon, newCoupon } from "../controllers/payment.js";

const app = express.Router();

app.post("/create", createPaymentIntent);





app.post("/coupon/new",authorizedAdminOnly, newCoupon);
app.get("/coupon/all",authorizedAdminOnly, allCoupons);



app.get("/discount", applyDiscount);


app.delete("/coupon/:id", authorizedAdminOnly, deleteCoupon);





export default app;

