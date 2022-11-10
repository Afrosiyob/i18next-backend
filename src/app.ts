import express from "express";
import config from "config";
import routes from "./core/routes";
import logger from "./utils/log";

const app = express();
const PORT = config.get<number>("PORT") || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, async () => {
  logger.info(`App is running at http://localhost:${PORT} `);

  routes(app);

  // swaggerDocs(app, PORT);
});
