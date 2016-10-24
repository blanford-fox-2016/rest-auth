'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    var data = [{
      username : "admin",
      birthday  : "1990/12/20",
      email : "admin@ad.min",
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      username : "user",
      birthday  : "1999/2/17",
      email : "user@ad.min",
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      username : "me",
      birthday  : "1995/10/13",
      email : "me@ad.min",
      createdAt : new Date(),
      updatedAt : new Date()
    }]
    return queryInterface.bulkInsert('Users', data, {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Users', null, {});
  }
};
