import {
  addPers,
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
  return getById(id);
};

export const createPerson = (persObj) => {
  const newPers = addPers(persObj);
  return newPers;
};

export const updatePerson = (persObj) => {
  const updatedPers = updatePers(persObj);
  return updatedPers;
};

export const deletePerson = (id) => {
  return deletePers(id);
};
