import express from "express";
import {
  createMany,
  createPerson,
  deletePerson,
  getAllPersons,
  getPersonById,
  updatePerson,
} from "../service/personsService.js";

export const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const persons = await getAllPersons({});
    res.json(persons);
  } catch (err) {
    console.error(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const person = await getPersonById(id);
    res.json([person]);
  } catch (err) {
    console.error(err);
  }
});

router.post("/", async (req, res) => {
  const persObj = req.body;
  const newPers = await createPerson(persObj);
  res.status(201).json(newPers);
});

router.post("/createMany", async (req, res) => {
  const persArr = req.body;
  const persons = await createMany(persArr);
  res.status(201).json(persons); //persons is an array
});

router.put("/", async (req, res) => {
  const persObj = req.body;
  const updatedPers = await updatePerson(persObj);
  res.json(updatedPers);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedPers = await deletePerson(id);
  return res.json(deletedPers);
});
