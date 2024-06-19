import express from "express";
import { deleteUser, getAllUser, getUser, newUser } from "../controllers/user.js";
import { authorizedAdminOnly } from "../middlewares/auth.js";

const app = express.Router();


app.post("/new", newUser);
app.get("/all", authorizedAdminOnly,getAllUser);
// app.get("/:id", getUser);
// app.delete("/:id", deleteUser);

app.route("/:id").get(getUser).delete(authorizedAdminOnly, deleteUser);



export default app;

