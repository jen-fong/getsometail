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
		// replace all none letter characters with a space (match with girl type in db)
		var girlURL = req.params.girl.replace(/[^a-z]/g, " ");
		// add a - to the girl names (needed to put the class on the girl to change bg in handlebars)
		var girlCSS = req.params.girl.replace(/[^a-z]/g, "-");
		// our regex replaced all non letters but we need the . for ms madison
		if (girlURL === "ms madison ave") {
			girlURL = "ms. madison ave";
		}
		// find a girl in database which matches the girl we clicked on
		Girl.findOne({
			where: {
				type: girlURL
			}
		}).then(function (girl) {
			var selectedGirl = girl;
			// add - to the girl names so we can later use it as a class. 
			// All classes in background.css has a dash for a space eg beach-bunny
			selectedGirl.background = req.params.girl.replace(/[^a-z]/g, "-");
			// this def could have been better but it was too late, I didn't feel like fixing up the code
			// it still works
			// basically replaces all first letter lowercase chars for each word to uppercase
			splitGirl = selectedGirl.type.split(' ');
			for (var i = 0; i < splitGirl.length; i++) {
		        splitGirl[i] = splitGirl[i].replace(splitGirl[i].charAt(0), splitGirl[i].charAt(0).toUpperCase());
		    }
		    // set each word to a heading. 
		    //This is needed because of the way each word is displayed on the page with alternating colors!
			var girlHeadings = {
				heading1: splitGirl[0],
				heading2: splitGirl[1],
				heading3: splitGirl[2]
			};
			// join to find all dogs that match the clicked girl
			Dog.findAll({
				where: {
					GirlId: selectedGirl.id
				}
			}).then(function (dogs) {
				// This part is a bit wacky because of the carousel
				// Find all girls except for the girl that the user clicked on
				// we don't want multiples of the clicked girl
				Girl.findAll({
					where: {
						type: {
							$ne: girlURL
						}
					}
				}).then(function (girls) {
					// get all dogs
					Dog.findAll({
						where: {
							GirlId: {
								$lte: 12
							}
						}
					}).then(function (allDogs) {
						// assign all Girls to be girls so we can add more properties to it
						// and then send it to the browser
						var allGirls = girls;
						
						// 
						for (var i = 0; i < girls.length; i++) {
							// add dogs property to allGirls obj (received from db) as an empty array
							allGirls[i].dogs = [];
							// we split the name of the girl and join with a dash
							// again, this is for the css background
							allGirls[i].background = allGirls[i].type.split(' ').join('-');
							// we split the girl's name again and repeat as before.
							// uppercase all first chars of word and then set to allGirlHeadings
							var splitted = allGirls[i].type.split(' ');
							for (var z = 0; z < splitted.length; z++) {
								 splitted[z] = splitted[z].replace(splitted[z].charAt(0), splitted[z].charAt(0).toUpperCase());
							}

							var allGirlHeadings = {
								heading1: splitted[0],
								heading2: splitted[1],
								heading3: splitted[2]
							};
							// add the allGirlHeadings obj to a new property on allGirls obj called girlHeading
							allGirls[i].girlHeading = allGirlHeadings;
							// now we match all the dogs to the girls
							// loop over each dog. If the girl id for the dog matches with the girl id
							// we push the dog obj (from db) to the empty dogs array that we set up earlier
							for (var j = 0; j < allDogs.length; j++) {
								if (allDogs[j].GirlId === allGirls[i].id) {
									allGirls[i].dogs.push(allDogs[j])
								}
							}
						}
						
						// we send everything back to the client/browser
						// girl has the girl obj from the database
						// girlHeading has the girlHeadings obj with all first letters of the word uppercased
						// dogs contain the dog obj that matches our girl from the db
						// all girls is an array containing objs with all the other girls and all the added properties
						// e.g their dogs, background for css, etc
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
					})

					
				})
			})
		})
	})
};

module.exports = girlsRoutes;