import model from "./model.js";

export const createAssignment = (assignment) => {
  delete assignment._id
  return model.create(assignment);
}

export const getAssignments = (courseId) => model.find({ course: courseId });
export const deleteAssignment = (assignmentId) => model.deleteOne({ _id: assignmentId });
export const updateAssignment= (assignmentId, assignment) =>  model.updateOne({ _id: assignmentId }, { $set: assignment });