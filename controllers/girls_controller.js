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
		var girlURL = req.params.girl.replace(/[^a-z]/g, " ");
		var girlCSS = req.params.girl.replace(/[^a-z]/g, "-");
		console.log(girlCSS)
		Girl.findOne({
			where: {
				type: girlURL
			}
		}).then(function (girl) {
			var selectedGirl = girl;
			selectedGirl.background = req.params.girl.replace(/[^a-z]/g, "-");
			splitGirl = selectedGirl.type.split(' ');
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
				Girl.findAll({
					where: {
						type: {
							$ne: girlURL
						}
					}
				}).then(function (girls) {
					var allGirls = girls;
					for (var i = 0; i < girls.length; i++) {
						allGirls[i].background = allGirls[i].type.split(' ').join('');
						console.log(allGirls[i].background)
					}
					
					res.render('girl', {
						girl: selectedGirl,
						girlHeading: girlHeadings,
						dogs: dogs,
						allGirls: allGirls,
						helpers: {
							title: function() {
								return splitGirl.join(' ');
							}
						}
					});
				});
			})
		})
	})
};

module.exports = girlsRoutes;