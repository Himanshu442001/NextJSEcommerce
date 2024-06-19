import express from "express";
import { authorizedAdminOnly } from "../middlewares/auth.js";
import { allOrders, deleteOrder, getSingleOrder, myOrders, newOrder, processOrder } from "../controllers/order.js";

const app = express.Router();

 app.post("/new", newOrder);

 app.get("/myOrders", myOrders);

 app.get("/allOrders",authorizedAdminOnly, allOrders);

 app.route("/:id").get(getSingleOrder).put(authorizedAdminOnly, processOrder).delete(authorizedAdminOnly,deleteOrder);


export default app;

