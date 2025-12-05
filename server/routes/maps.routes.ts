export {};
const {
	handleGetMapKey,
} = require("../controllers/maps.controller");

const express = require("express");

const router = express.Router();

router.get("/embed", handleGetMapKey);

module.exports = { mapRouter: router }