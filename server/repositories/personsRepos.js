import Person from "../models/personModel.js";

export const allPers = (filters, projection) => {
  try {
    return Person.find(filters);
  } catch (err) {
    console.error(err);
  }
};

export const getById = (id) => {
  try {
    return Person.findById(id);
  } catch (err) {
    console.error(err);
  }
};

export const addPers = (persObj) => {
  try {
    const createdPers = new Person(persObj);
    const savedPers = createdPers.save();
    return savedPers;
  } catch (err) {
    console.error(err);
  }
};

export const updatePers = (data) => {
  const { id, ...persObj } = data;
  try {
    return Person.findByIdAndUpdate(id, persObj, { new: true });
  } catch (err) {
    console.error(err);
  }
};

export const deletePers = async (id) => {
  try {
    const deletedPers = await Person.findByIdAndDelete(id);
    return deletedPers;
  } catch (err) {
    console.error(err);
  }
};
