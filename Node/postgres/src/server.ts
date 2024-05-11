import express, { Request, Response } from "express";
import "express-async-errors";
import morgan from "morgan";
import {
  getAll,
  getOneById,
  create,
  updateById,
  deleteById,
} from "./controllers/planets.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json());

// respond with "hello world" when a GET request is made to the homepage
app.get("/api/planets", getAll);

app.get("/api/planet/:id", getOneById);

app.post("/api/planets", create);

app.put("/api/planets/:id", updateById);

app.delete("/api/planets/:id", deleteById);

app.listen(process.env.PORT, () => {
  console.log("Listening on port 3000");
});
