import express from "express";
import fileupload from "express-fileupload";
import cors from "cors";
import cookieParser from "cookie-parser";
import swaggerUi from "swagger-ui-express";
import openApiSpec from "./config/openapi.js";

// import routes---------------------
import admin from "./controllers/customer/customer.controllers.js";
import refreshToken from "./controllers/common/refresh.token.controller.js";
import restaurant from "./controllers/restaurant/restaurant.controllers.js";
import uploadFile from "./controllers/common/upload.file.controller.js";
import morgan from "morgan";

// initialze app instance----------
const app = express();

// middlewares---------------------
app.use(morgan("tiny"));
app.use(fileupload());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());

app.use("/documentation", swaggerUi.serve, swaggerUi.setup(openApiSpec));

// use routes---------------------------
app.use("/api/customer", admin);
app.use("/api", refreshToken);
app.use("/api", uploadFile);
app.use("/api/restaurant", restaurant);

export default app;
