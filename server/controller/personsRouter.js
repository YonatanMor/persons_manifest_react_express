import express from "express";
import {
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
  res.json(newPers);
});

router.put("/", async (req, res) => {
  const persObj = req.body;
  const updatedPers = await updatePerson(persObj);
  res.json(updatedPers);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const deletedPers = await deletePerson(id);
  // const index = persons.findIndex((pers) => pers.id === +id);
  // if (index !== -1) {
  //   persons.splice(index, 1);
  //   return res.json(persons);
  // }
  return res.json(deletedPers);
});
