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
  if (id.length === 24) {
    return getById(id);
  }
  return null;
};

export const createPerson = (persObj) => {
  const newPers = addPers(persObj);
  return newPers;
};

export const updatePerson = (persObj) => {
  const { id } = persObj;
  if (id.length === 24) {
    const oldPers = getById(persObj.id);
    const persKeys = Object.keys(persObj);
    persKeys.forEach((propName) =>
      persObj[propName] === "" ? (persObj[propName] = oldPers[propName]) : ""
    );
    const updatedPers = updatePers(persObj);
    return updatedPers;
  }
  return null;
};

export const deletePerson = (id) => {
  if (id.length === 24) {
    return deletePers(id);
  }
  return null;
};
