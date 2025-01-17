const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const homeController = require("../controllers/home");
const postsController = require("../controllers/posts");
const adminController = require("../controllers/admin")
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Main Routes - simplified for now
// router.post("/addPlayer", ensureAuth, adminController.addPlayer);
// router.post("/addMatch", ensureAuth, adminController.addMatch);
router.get("/:id", ensureAuth, homeController.getAnnouncement);
router.post("/createAnnouncement", ensureAuth, adminController.createAnnouncement);
router.post("/createPlayer", ensureAuth, adminController.createPlayer);
router.post("/addMatch", ensureAuth, adminController.addMatch);
// router.put("/addMatch",ensureAuth,homeController.addPoints);
// router.post("/startSeason", ensureAuth, adminController.startSeason);


module.exports = router;
