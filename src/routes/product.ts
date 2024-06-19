import express from "express";
import { authorizedAdminOnly } from "../middlewares/auth.js";
import { deleteProduct, getAdminProducts, getAllCategories, getAllProducts, getLatestProducts, getSingleProduct, newProduct, updateProduct } from "../controllers/product.js";
import { singleUpload } from "../middlewares/multer.js";

const app = express.Router();


app.post("/new",authorizedAdminOnly,singleUpload,newProduct);


// To Get All Products With Filter...
app.get("/all",getAllProducts)

app.get("/latest",getLatestProducts);
app.get("/categories",getAllCategories);

app.get("/admin-products",authorizedAdminOnly, getAdminProducts);

app.route("/:id").get(getSingleProduct).put( authorizedAdminOnly,singleUpload, updateProduct).delete( authorizedAdminOnly,deleteProduct);




export default app;

