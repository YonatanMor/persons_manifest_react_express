import Person from "../models/personModel.js";

//get All
export const allPers = (filters, projection) => {
  try {
    return Person.find(filters, projection);
  } catch (err) {
    console.error(err);
  }
};

// get person by id
export const getById = (id) => {
  try {
    return Person.findById(id);
  } catch (err) {
    console.error(err);
  }
};

// create
export const addPers = (persObj) => {
  try {
    const createdPers = new Person(persObj);
    const savedPers = createdPers.save();
    return savedPers;
  } catch (err) {
    console.error(err);
  }
};

// update
export const updatePers = (data) => {
  const { id, ...persObj } = data;
  try {
    return Person.findByIdAndUpdate(id, persObj, { new: true });
  } catch (err) {
    console.error(err);
  }
};

// Delete
export const deletePers = async (id) => {
  console.log(id)
  try {
    const deletedPers = await Person.findByIdAndDelete(id);
    console.log(deletedPers);
    return deletedPers;
  } catch (err) {
    console.error(err);
  }
};
