var ferns = require("../data/friends");
var Users = require("../data/new");


module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(ferns);

    });

    app.get("/api/new", function (req, res) {
        res.json(Users);

    });

    app.post("/api/friends", function (req, res) {
        ferns.push(req.body);

    });

    app.post("/api/new", function (req, res) {
        Users.push(req.body);

        //find last object in array
        for (var i = 0; i < Users.length; i++) {

            usertotalscore = 0;

            for (var j = 0; j < Users[i].scores.length; j++) {

                usertotalscore += parseInt(Users[i].scores[j]);
            }
            console.log("USER ", [i], usertotalscore);
        };

        for (var i = 0; i < ferns.length; i++) {

            ferntotalscore = 0;
            matchedFern = ferns[i];
            for (var j = 0; j < ferns[i].scores.length; j++) {

                ferntotalscore += parseInt(ferns[i].scores[j]);
                
            }

            console.log("Fern", [i], " ", ferntotalscore);

            if (ferntotalscore === usertotalscore) {
               
                matchedFern = ferns[i];
                console.log("Match!", matchedFern.name, matchedFern.photo);
                // $("#resName").html(matchedFern.name);
                // $("#resName").html(matchedFern.photo);
                return 
            } else if (32 <= usertotalscore) {
                
                matchedFern = ferns[6];
                console.log("too big", matchedFern.name, matchedFern.photo);
                // $("#resName").append(matchedFern.name);
                // $("#resName").append(matchedFern.photo);
            } else if (21 <= usertotalscore) {
                
                matchedFern = ferns[5];
                console.log("too small", matchedFern.name, matchedFern.photo);
                // $("#resName").append(matchedFern.name);
                // $("#resName").append(matchedFern.photo);
            }
        };
        res.json(matchedFern);
    });
};
