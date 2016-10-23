'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      return queryInterface.bulkInsert('Girls', [{
        type: 'beach bunny',
        description: 'Energetic, perky, chatty, athletic and driven. She is confident and charismatic and is always put together. She could kick your butt in both curling AND softball.',
        href: 'beachBunny',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        type: 'biker babe',
        description: 'Energetic, perky, chatty, athletic and driven. She is confident and charismatic and is always put together. She could kick your butt in both curling AND softball.',
        href: 'bikerBabe',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        type: 'blonde bombshell',
        description: 'Energetic, perky, chatty, athletic and driven. She is confident and charismatic and is always put together. She could kick your butt in both curling AND softball.',
        href: 'blondeBombshell',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        type: 'bootylicious babe',
        description: 'Energetic, perky, chatty, athletic and driven. She is confident and charismatic and is always put together. She could kick your butt in both curling AND softball.',
        href: 'bootylicious',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        type: "daddy's girl",
        description: 'Energetic, perky, chatty, athletic and driven. She is confident and charismatic and is always put together. She could kick your butt in both curling AND softball.',
        href: 'daddysGirl',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        type: 'fierce cowgirl',
        description: 'Energetic, perky, chatty, athletic and driven. She is confident and charismatic and is always put together. She could kick your butt in both curling AND softball.',
        href: 'fierceCowgirl',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        type: 'fitness chic',
        description: 'Energetic, perky, chatty, athletic and driven. She is confident and charismatic and is always put together. She could kick your butt in both curling AND softball.',
        href: 'fitnessChic',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        type: 'girl next door',
        description: 'Energetic, perky, chatty, athletic and driven. She is confident and charismatic and is always put together. She could kick your butt in both curling AND softball.',
        href: 'girlNextDoor',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        type: 'ms. madison ave',
        description: 'Energetic, perky, chatty, athletic and driven. She is confident and charismatic and is always put together. She could kick your butt in both curling AND softball.',
        href: 'madisonAve',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        type: 'natural beauty',
        description: 'Energetic, perky, chatty, athletic and driven. She is confident and charismatic and is always put together. She could kick your butt in both curling AND softball.',
        href: 'naturalBeauty',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        type: 'sexy brunette',
        description: 'Energetic, perky, chatty, athletic and driven. She is confident and charismatic and is always put together. She could kick your butt in both curling AND softball.',
        href: 'sexyBrunette',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        type: 'tattooed baby',
        description: 'Energetic, perky, chatty, athletic and driven. She is confident and charismatic and is always put together. She could kick your butt in both curling AND softball.',
        href: 'tattooedBaby',
        createdAt: new Date(),
        updatedAt: new Date()
      }]);

  },

  down: function (queryInterface, Sequelize) {

      return queryInterface.bulkDelete('Person', null, {});

  }
};
