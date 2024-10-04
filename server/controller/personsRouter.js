import express from "express";
import {
  deletePerson,
  getAllPersons,
  getPersonById,
  updatePerson,
} from "../service/personsService.js";

export const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const persons = await getAllPersons({}, { _id: 0 });
    res.json(persons);
  } catch (err) {
    console.error(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    console.log("dssss");
    console.log(id);
    const person = await getPersonById(id);
    console.log(person);
    res.json(person);
  } catch (err) {
    console.error(err);
  }
});

router.post("/", async (req, res) => {
  const persObj = req.body;
  createPerson(persObj);
  const persons = await getAllPersons({}, { _id: 0 });
  res.json(persons);
});

router.put("/", async(req, res) => {
  const data   = req.body;
  updatePerson(persObj);
  // res.json(presss);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const persss = deletePerson(id);
  // const index = persons.findIndex((pers) => pers.id === +id);
  // if (index !== -1) {
  //   persons.splice(index, 1);
  //   return res.json(persons);
  // }
  return res.json(persss);
});
