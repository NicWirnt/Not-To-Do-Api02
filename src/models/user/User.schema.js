import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    index: 1,
  },
});

//convert schema into a table
export default mongoose.model("User", UserSchema); //converted into users
