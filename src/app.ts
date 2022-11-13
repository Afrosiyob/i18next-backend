import express, { NextFunction, Request, Response } from "express";
import routes from "./core/routes";
import logger from "./utils/log";
import cors from "cors";
import path from "path";

const app = express();

let PORT = process.env.PORT || 8080;

if (PORT == null || PORT == "") PORT = 8080;

if (typeof PORT === "string") PORT = parseInt(PORT);

let LOCAL_ADDRESS = process.env.LOCAL_ADDRESS || "0.0.0.0";

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
export const clientBuild = path.join(__dirname, "../client/build");

app.use(express.static(clientBuild));

app.listen(PORT, LOCAL_ADDRESS, async () => {
  logger.info(`App is running at http://localhost:${PORT} `);
  routes(app);
});
