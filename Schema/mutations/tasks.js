const {
  AuthenticationError,
  UserInputError,
} = require("apollo-server-express");

const { tasks: tasksData } = require("../../Fakedata");

const tasks = {
  createTask(_, args, { user }) {
    if (!user) {
      throw new AuthenticationError("User not found");
    }
    let newTask = args;
    newTask = { ...newTask, user, id: tasksData.length + 1 };
    tasksData.push(newTask);
    return newTask;
  },
  updateTask(_, args, { user }) {
    if (!user) {
      throw new AuthenticationError("User not found");
    }
    const { id } = args;
    const index = tasksData.findIndex(
      (task) => task.id === id && task.user.id === user.id
    );
    if (index === -1) {
      throw new UserInputError("Task not found");
    }
    const taskArray = tasksData.splice(index, 1);
    let task = taskArray[0];
    task = { ...task, ...args };
    tasksData.push(task);
    return task;
  },
};

module.exports = { tasks };
