'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      return queryInterface.bulkInsert('Dogs', [{
        breed: 'Poodle',
        image: 'poodle',
        GirlId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        breed: 'Dalmatian',
        image: 'dalmatian',
        GirlId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        breed: 'Pomeranian',
        image: 'pomeranian',
        GirlId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        breed: 'Australian Cattle Dog',
        image: 'australianCattleDog',
        GirlId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        breed: 'Border Collie',
        image: 'borderCollie',
        GirlId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        breed: 'shetland sheepdog',
        image: 'shetlandSheepdog',
        GirlId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        breed: 'King Charles',
        image: 'kingCharles',
        GirlId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        breed: 'Patch Beagle',
        image: 'patchBeagle',
        GirlId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        breed: 'yorkshire terrier',
        image: 'yorkshireTerrier',
        GirlId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        breed: 'Chihuahua',
        image: 'chihuahua',
        GirlId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        breed: 'Maltese',
        image: 'maltese',
        GirlId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        breed: 'French Bulldog',
        image: 'frenchBulldog',
        GirlId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        breed: 'Dachshund',
        image: 'Dachshund',
        GirlId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        breed: 'Great Dane',
        image: 'greatDane',
        GirlId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        breed: 'Shih Tzu',
        image: 'shihTzu',
        GirlId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        breed: 'Pit bull',
        image: 'pitbull',
        GirlId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        breed: 'Pug',
        image: 'pug',
        GirlId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        breed: 'Chocolate Labrador',
        image: 'chocolateLabador',
        GirlId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        breed: 'Basset Hound',
        image: 'bassetHound',
        GirlId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        breed: 'Bull Terrier',
        image: 'bullTerrier',
        GirlId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        breed: 'Weimaraner',
        image: 'weimaraner',
        GirlId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        breed: 'Foxhound',
        image: 'englishFoxhound',
        GirlId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        breed: 'St Bernard',
        image: 'stBernard',
        GirlId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        breed: 'German Wirehaired Pointer',
        image: 'germanWirehairedPointer',
        GirlId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        breed: 'Bulldog',
        image: 'bulldog',
        GirlId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        breed: 'Boxer',
        image: 'boxer',
        GirlId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        breed: 'German Shepard Dog',
        image: 'germanShepard',
        GirlId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        breed: 'Doberman Pinscher',
        image: 'dobermanpinscher',
        GirlId: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        breed: 'Rottweiler',
        image: 'Rottweiler',
        GirlId: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        breed: 'Mastiff',
        image: 'mastiff',
        GirlId: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        breed: 'Schnauzer',
        image: 'Schnauzer',
        GirlId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        breed: 'Chow Chow',
        image: 'chowChow',
        GirlId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        breed: 'Shiba Inu',
        image: 'shibaInu',
        GirlId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        breed: 'Golden Retriever',
        image: 'goldenRetriever',
        GirlId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        breed: 'Siberian Husky',
        image: 'siberianHusky',
        GirlId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        breed: 'Greyhound',
        image: 'greyhound',
        GirlId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }]);
  },

  down: function (queryInterface, Sequelize) {

      return queryInterface.bulkDelete('Person', null, {});
  }
};
