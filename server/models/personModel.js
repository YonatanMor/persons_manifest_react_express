import mongoose from "mongoose";

const personSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, required: true },
    city: { type: String, required: true },
  },
  { versionKey: false }
);

const Person = mongoose.model("person", personSchema, "persons");

export default Person;
