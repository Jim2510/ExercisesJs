import dotenv from "dotenv";
dotenv.config();
import express, { Request, Response } from "express";
import "express-async-errors";
import morgan from "morgan";
const app = express();

app.use(morgan("dev"));
app.use(express.json());

type Planet = {
  id: number;
  name: string;
};

type Planets = Planet[];

let planets: Planets = [
  { id: 1, name: "Earth" },
  { id: 2, name: "Mars" },
];

app.get("/", (req: Request, res: Response) => {
  res.status(200).json(planets);
});

app.listen(process.env.PORT, () => {
  console.log("Listening on port 3000");
});
