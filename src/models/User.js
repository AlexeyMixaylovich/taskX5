const users = [
  {
    name: "admin",
    password: "adminadmin",
  },
  {
    name: "testUser",
    password: "testUsertestUser",
  },
];

class User {
  constructor(name, password) {
    this.name = name;
    this.password = password;
  }
}

function getAll() {
  return users.map((u) => new User(u.name, u.name));
}

function getByUserName(uname) {
  if (!uname) return null;
  const u = users.find(({ name }) => name === uname);
  return !!u ? new User(u.name, u.password) : null;
}

module.exports.User = User;
module.exports.getAll = getAll;
module.exports.getByUserName = getByUserName;
