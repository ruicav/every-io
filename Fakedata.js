let users = [
  {
    id: 1,
    email: "um@bol.com",
    password: "123",
  },
  {
    id: 2,
    email: "dois@bol.com",
    password: "321",
  },
];

let tasks = [
  {
    id: 1,
    user: users.find((user) => user.id === 1),
    title: "Task 1",
    description: "This is task 1 from User 1",
    status: "TO_DO",
  },
  {
    id: 2,
    user: users.find((user) => user.id === 2),
    title: "Task 2",
    description: "This is task 1 from User 2",
    status: "TO_DO",
  },
];

module.exports = { tasks, users };
