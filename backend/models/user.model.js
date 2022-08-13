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
  location: {
    type: String,
    // required: true,
  },
  type: {
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
  education: EducationSchema,
});

module.exports = mongoose.model("User", userSchema);
