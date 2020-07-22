import "reflect-metadata";
import * as express from "express";
const app = express();
import { createConnection } from "typeorm";
import * as bodyParser from "body-parser";
import router from "../routes/v1";

const port = process.env.PORT;

createConnection()
  .then(async (connection) => {
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use("/v1", router);
    app.use("/", (req, res) => {
      return res.status(400).send("hi, it works!");
    });
    app.listen(port, () => {
      console.log(`connecting to ${port} port`);
    });
  })
  .catch((error) => console.log(error));
