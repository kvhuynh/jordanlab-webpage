export {};
const {
	handleGetAllPublications,
} = require("../controllers/publications.controller");

const express = require("express");

const router = express.Router();

router.get("/:orcidId", handleGetAllPublications);

module.exports = { publicationRouter: router }