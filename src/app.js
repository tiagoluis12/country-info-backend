import express from "express";
import cors from "cors";
const app = express();
import countryRoutes from "./routes/countryRoutes.mjs";
import { globalErrorMiddleware } from "./error/errorMiddleware.mjs";

// Enable CORS for all routes
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // You can specify the allowed origins here
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());

app.use(countryRoutes);

app.use(express.static("client/build"));

app.use(globalErrorMiddleware);

app.listen(3001);

export default app;
