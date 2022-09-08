const { tasks: data } = require("../../Fakedata");

const tasks = {
  getAllTasks(parent, args, { user }) {
    if (!user) {
      throw new AuthenticationError("User not found");
    }
    return data.filter((task) => task.user.id === user.id);
  },
  getTask(_, { id }, { user }) {
    if (!user) {
      throw new AuthenticationError("User not found");
    }
    return data.find((task) => task.id === id && task.user.id === user.id);
  },
};

module.exports = { tasks };
