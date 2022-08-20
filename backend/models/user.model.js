const mongoose = require("mongoose");

const PersonalSchema = mongoose.Schema({
  name: {
    type: String,
    // required: true,
  },
  email: {
    type: String,
    // required: true,
  },
  phone: {
    type: String,
    // required: true,
  },
  gender: {
    type: String,
    // required: true,
  },
  dob: {
    type: String,
    // required: true,
  },
  description: {
    type: String,
    // required: true,
  },
});

const EducationSchema = mongoose.Schema({
  collage: {
    type: String,
    // required: true,
  },
  result: {
    type: String,
    // required: true,
  },
  passing: {
    type: String,
    // required: true,
  },
  courseName: {
    type: String,
    // required: true,
  },
  specialize: {
    type: String,
    // required: true,
  },
});

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    // required: true,
  },
  email: {
    type: String,
    // required: true,
    unique: true,
  },
  password: {
    type: String,
    // required: true,
  },
  personal: PersonalSchema,
  education: {
    highestQualification: { type: String },
    qualifications: [],
  },
});


module.exports = mongoose.model("User", userSchema);
