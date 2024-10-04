import { allPers, getById, updatePers } from "../repositories/personsRepos.js";

export const getAllPersons = (filter, projection) => {
  const persons = allPers(filter, projection);
  return persons;
};

export const getPersonById = (id) => {
  return getById(id);
  // const inedx = persons.findIndex((pers) => pers.id === +id);
  // if (index !== -1) {
  //   return getById(id);
  // }
  // return "no such ID exists";
};

export const createPerson = (persObj) => {
  persons.push(persObj);
  return persons;
};

export const updatePerson = (id, persObj) => {
  // const index = persons.findIndex((pers) => pers.id === persObj.id);
  // persons[index] = persObj;
  updatePers(id, persObj);
  return persons;
};

export const deletePerson = (id) => {
  const index = persons.findIndex((pers) => pers.id === +id);
  if (index !== -1) {
    persons.splice(index, 1);
    return persons;
  }
  return `no such id existed, index=${index}`;
};
