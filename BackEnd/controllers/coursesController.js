﻿(function (coursesController) {

	var data = require("../data");
	coursesController.init = function (app) {

		//courses route and its handler. after the : is parameter
		app.get("/api/courses/",   //:categoryName
			function (req, res) {

				res.set("Content-Type", "application/json");

				var limit = req.query.limit;
				var offset = req.query.offset;
				var sortBy = req.query.sortBy;
				var foodType = req.query.foodType;
				var startDate = req.query.date;

				console.log("query:", req.query);

				data.getCourses(

					function (err, courses) {
						if (err) {
							res.send(400, err);
						} else {

							res.send(courses);
						}
					}, limit, offset, sortBy, foodType, startDate);
			});
	};
})(module.exports);

//	var categoryName = req.param.categoryName; 
//	data.getCoursesCategory(categoryName,






