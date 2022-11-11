import express, { NextFunction, Request, Response } from "express";
import config from "config";
import routes from "./core/routes";
import logger from "./utils/log";
import cors from "cors";

const app = express();
const PORT = config.get<number>("PORT") || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(req.method);
  console.log(req.path);
  next();
});
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use("/locales", express.static("locales"));

app.listen(PORT, async () => {
  logger.info(`App is running at http://localhost:${PORT} `);
  routes(app);
  // swaggerDocs(app, PORT);
});
