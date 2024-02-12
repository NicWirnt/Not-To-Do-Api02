import UserSchema from "./User.schema.js";

//new entry
export const insertUser = (obj) => {
  return UserSchema(obj).save(); //OBJECT ORM
};

//read all data
export const getAllUser = () => {
  return UserSchema.find();
};

//find single task
// export const getTask = (_id) => {
//   return UserSchema.findById(_id);
// };

//delete data
export const deleteUser = (_id) => {
  return UserSchema.findByIdAndDelete(_id);
};

//patch data
// export const updateTask = ({ _id, task }) => {
//   return UserSchema.findByIdAndUpdate(_id, { task }, { new: true });
// };
