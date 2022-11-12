import express, { NextFunction, Request, Response } from "express";
import routes from "./core/routes";
import logger from "./utils/log";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 8080;
const { LOCAL_ADDRESS = "0.0.0.0" } = process.env;

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

app.listen(8080, LOCAL_ADDRESS, async () => {
  logger.info(`App is running at http://localhost:${PORT} `);
  routes(app);
  // swaggerDocs(app, PORT);
});
