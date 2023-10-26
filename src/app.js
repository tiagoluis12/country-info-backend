import express from "express";
import cors from "cors";
import countryRoutes from "./routes/countryRoutes.mjs";
import { globalErrorMiddleware } from "./error/errorMiddleware.mjs";

const app = express();

app.use(cors());
app.use(express.json());

app.use(countryRoutes);

app.use(globalErrorMiddleware);

export default app;
