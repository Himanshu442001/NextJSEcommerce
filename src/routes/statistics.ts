import express from "express";
import { authorizedAdminOnly } from "../middlewares/auth.js";
import { getBarChartStats, getDashboardStats, getLineChartStats, getPieChartStats } from "../controllers/statistics.js";

const app = express.Router();


app.get("/stats",authorizedAdminOnly, getDashboardStats);


app.get("/pie" ,authorizedAdminOnly, getPieChartStats);


app.get("/line", authorizedAdminOnly, getLineChartStats);


app.get("/bar", authorizedAdminOnly, getBarChartStats);



export default app;

