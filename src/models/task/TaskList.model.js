import TaskListSchema from "./TaskList.schema.js";

//new entry
export const insertTask = (obj) => {
  return TaskListSchema(obj).save();
};

//read all data
export const getAllTask = () => {
  return TaskListSchema.find();
};

//find single task
export const getTask = (_id) => {
  return TaskListSchema.findById(_id);
};

//delete data
export const deleteTask = (_id) => {
  return TaskListSchema.findByIdAndDelete(_id);
};

//patch data
export const updateTask = ({ _id, task }) => {
  return TaskListSchema.findByIdAndUpdate(_id, { task }, { new: true });
};
