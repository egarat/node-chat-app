const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Egi',
      room: 'Earth'
    }, {
      id: '2',
      name: 'Mark',
      room: 'Mars'
    }, {
      id: '3',
      name: 'Hans',
      room: 'Earth'
    }]
  });

  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: '123',
      name: 'Egi',
      room: 'Earth'
    };
    var res = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
    var userId = '1'
    var res = users.removeUser(userId);

    expect(res.id).toEqual(userId);
    expect(users.users.length).toBe(2);
  });

  it('should not remove user', () => {
    var userId = '1337'
    var res = users.removeUser(userId);

    expect(res).toNotExist();
    expect(users.users.length).toBe(3);
  });

  it('should find user', () => {
    var userId = '1'
    var res = users.getUser(userId);

    expect(res.id).toBe(userId);
  });

  it('should not find user', () => {
    var userId = '1337'
    var res = users.getUser(userId);

    expect(res).toNotExist();
  });

  it('should return names for Earth', () => {
    var userList = users.getUserList('Earth');

    expect(userList).toEqual(['Egi', 'Hans']);
  });

  it('should return names for Mars', () => {
    var userList = users.getUserList('Mars');

    expect(userList).toEqual(['Mark']);
  });
});