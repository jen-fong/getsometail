var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var Girl = require('../models/').Girl;
var Dog = require('../models').Dog;

var dogRoutes = function(app) {
	app.get('/dogs', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/dogs.html'));
	});

	app.get('/dogs/:dog', function(req, res) {
		var dogBreed = req.params.dog;
		var splitDog = dogBreed.split(' ');
		console.log(splitDog)
		for (var i = 0; i < splitDog.length; i++) {
			splitDog[i] = splitDog[i].replace(splitDog[i].charAt(0), splitDog[i].charAt(0).toUpperCase());
			console.log(splitDog[i]);
		}
		var breed = splitDog.join('')
		Dog.findOne({
			where: {
				breed: breed
			}
		}).then(function (dog) {
			console.log(dog)
			res.render('dog', {dog: dog});
		})
		
	})
}

module.exports = dogRoutes;