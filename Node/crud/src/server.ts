import express, { Request, Response } from "express";
import "express-async-errors";
import morgan from "morgan";
import Joi from "joi";

const app = express();

type Planet = {
  id: number;
  name: string;
};

type Planets = Planet[];

let planets = [
  { id: 1, name: "Earth" },
  { id: 2, name: "Mars" },
];

const planetSchema = Joi.object({
  id: Joi.number().integer().required(),
  name: Joi.string().required(),
});

app.use(morgan("dev"));
app.use(express.json());

//GET ALL
app.get("/api/planets", (req: Request, res: Response) => {
  res.status(200).json(planets);
});

//GET ONE BY ID
app.get("/api/planets/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const planet = planets.find((p) => p.id === Number(id));
  res.status(200).json(planet);
});

// CREATE

app.post("/api/planets", (req: Request, res: Response) => {
  const { id, name } = req.body;
  const newPlanet: Planet = { id, name };
  planets = [...planets, newPlanet];

  const validateNewPlanet = planetSchema.validate(newPlanet);

  if (validateNewPlanet.error) {
    return res.status(400).json({ msg: validateNewPlanet.error });
  } else {
    [...planets, newPlanet];
  }
  res.status(201).json({ msg: "Planet created" });
});

// UPDATE BY ID
app.put("/api/planets/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const { name } = req.body;
  planets = planets.map((p) => (p.id === Number(id) ? { ...p, name } : p));

  res.status(200).json({ msg: "Planet updated" });
});

// DELETE BY ID
app.put("/api/planets/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  planets = planets.filter((p) => p.id !== Number(id));

  res.status(200).json({ msg: "Planet Deleted" });
});
