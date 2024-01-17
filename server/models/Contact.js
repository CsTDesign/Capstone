import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  emailAddress: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  message: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  }
});

const Contact = mongoose.model("Contact", contactSchema);

export default Contact;
