var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var Girl = require('../models/').Girl;
var Dog = require('../models').Dog;

var girlsRoutes = function(app) {
	app.get('/', function (req, res) {
		res.sendFile(path.join(__dirname, '../public/index.html'));
	});
	app.get('/girls/:girl', function (req, res) {
		var girl = req.params.girl;
		console.log(girl)
		Girl.findOne({
			where: {
				href: girl
			}
		}).then(function (selectedGirl) {
			var splitGirl = selectedGirl.type;
			splitGirl = splitGirl.split(' ');
			for (var i = 0; i < splitGirl.length; i++) {
		        splitGirl[i] = splitGirl[i].replace(splitGirl[i].charAt(0), splitGirl[i].charAt(0).toUpperCase());
		    }
			var girlHeadings = {
				heading1: splitGirl[0],
				heading2: splitGirl[1],
				heading3: splitGirl[2]
			};
			Dog.findAll({
				where: {
					GirlId: selectedGirl.id
				}
			}).then(function (dogs) {
				res.render('girl', {
					girl: selectedGirl,
					girlHeading: girlHeadings,
					dogs: dogs,
					helpers: {
						css: function () {
							return "../assets/css/" + girl + ".css";
						},
						title: function() {
							return splitGirl.join(' ');
						}
					}
				});
			})
		})
	})
};

module.exports = girlsRoutes;