'use strict';

var faker = require('faker');

var customers = [];

for (var i = 0; i < 100; i++) {
  customers.push({
    email: faker.internet.email(),
    username: faker.internet.userName(),
    firstname: faker.name.firstName(),
    lastname: faker.name.lastName(),
    createdAt: faker.date.past()
  });
}

module.exports = customers;