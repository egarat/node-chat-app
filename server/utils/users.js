class Users {
  constructor () {
    this.users = [];
  }
  addUser (id, name, room) {
    var user = {
      id,
      name,
      room
    }
    this.users.push(user);
    return user;
  }
  removeUser (id) {
    var user = this.getUser(id);

    if (user) {
    var users = this.users.filter((user) => user.id !== id);
    this.users = users;
    }

    return user;
  }
  getUser (id) {
    var foundUser = this.users.filter((user) => user.id === id)[0];

    return foundUser;
  }
  getUserList (room) {
    var users  = this.users.filter((user) => user.room === room);
    var namesArray = users.map((user) => user.name);
    return namesArray;
  }
}

module.exports = {
  Users
};