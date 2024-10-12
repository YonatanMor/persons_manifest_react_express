import mongoose from "mongoose";
import {
  addPers,
  addManyPers,
  allPers,
  deletePers,
  getById,
  updatePers,
} from "../repositories/personsRepos.js";

export const getAllPersons = (filter, projection) => {
  const persons = allPers(filter, projection);
  return persons;
};

export const getPersonById = (id) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return null;
  }
  return getById(id);
};

export const createPerson = (persObj) => {
  const newPers = addPers(persObj);
  return newPers;
};

export const createMany = (persArr) => {
  const addedPersons = addManyPers(persArr);
  return addedPersons;
};

export const updatePerson = (persObj) => {
  const { id } = persObj;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return null;
  }
  const oldPers = getById(persObj.id);
  const persKeys = Object.keys(persObj);
  persKeys.forEach((propName) =>
    persObj[propName] === "" ? (persObj[propName] = oldPers[propName]) : ""
  );
  const updatedPers = updatePers(persObj);
  return updatedPers;
};

export const deletePerson = (id) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return null;
  }
  return deletePers(id);
};
