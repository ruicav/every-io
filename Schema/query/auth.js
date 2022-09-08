const jwt = require("jsonwebtoken");
const { users } = require("../../Fakedata");

const auth = {
  login(_, { email, password }) {
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    if (!user) return;

    const token = jwt.sign({ user }, process.env.SECRET, {
      expiresIn: 30000,
    });
    return token;
  },
};

module.exports = { auth };
