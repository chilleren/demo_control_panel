'use strict';

var faker = require('faker');

var customers = [];

for (var i = 0; i < 100; i++) {
  var firstname = faker.name.firstName();
  var lastname = faker.name.lastName();
  var username  = usernameGenerator(firstname, lastname);
  var email = username + "@example.com"
  customers.push({
    email: email,
    username: username,
    firstname: firstname,
    lastname: lastname,
    createdAt: faker.date.past()
  });
}

function usernameGenerator (firstname, lastname) {
  var username = firstname;

  if (Math.random() > 0.8) {
    username += lastname;
  }

  if (Math.random() > 0.5) {
    username += "19";
  }

  username += Math.floor(Math.random() * 9) + 0;
  username += Math.floor(Math.random() * 9) + 0;
  return username;
}

module.exports = customers;