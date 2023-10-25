import { CustomError } from "../error/customError.mjs";
import winston from "winston";

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "error.log" }),
  ],
});

export function globalErrorMiddleware(err, req, res, next) {
  if (err instanceof CustomError) {
    res.status(err.statusCode).json({ error: err.message });
  } else {
    console.error(err);
    logger.error("Internal server error", err);
    res.status(500).json({ error: "Internal server error" });
  }
}
