import Person from "../models/personModel.js";

//get All
export const allPers = (filters, projection) => {
  // return Person.find();
  return Person.find(filters, projection);
};

// get person by id
export const getById = (id) => {
  return Person.findById(id);
};

// create
export const addPers = (obj) => {
  const per = new Person(obj);
  return per.save();
};

// update
export const updatePers = (id, obj) => {
  const per = new Person(obj);
  return Person.findByIdAndUpdate(id, obj);
};

// Delete
export const deletePers = (id) => {
  return Person.findByIdAndDelete(id);
};
