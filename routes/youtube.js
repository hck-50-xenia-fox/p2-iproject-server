const Controller = require("../Controllers/Youtube");

let routerYoutube = require("express").Router();

routerYoutube.get("/search/:search", Controller.search);
routerYoutube.get("/videoDetail/:id", Controller.videoDetail);
routerYoutube.get("/comments/:id", Controller.comments);
routerYoutube.get("/channelDetail/:id", Controller.channelDetail);
routerYoutube.get("/channelVideos/:id", Controller.channelVideos);
routerYoutube.get("/movieTrailer", Controller.getTrailerMovie);
routerYoutube.get("/reactJs", Controller.getReactJs);

module.exports = routerYoutube;
