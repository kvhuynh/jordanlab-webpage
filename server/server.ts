export {};
const express = require("express");
const axios = require("axios");

const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = 3000;

const { publicationRouter } = require("./routes/publications.routes");
const { mapRouter } = require("./routes/maps.routes")

app.use(express.json());

const FRONTEND_URL = process.env.FRONTEND_URL;
console.log(FRONTEND_URL);

// local server
// app.use(cors({ credentials: true, origin: "http://localhost:5173" })); //test
// app.use(cors({ credentials: true, origin: "https://jordanlab-backend.onrender.com" })); // prod
// app.use(cors({ credentials: true, origin: "https://67omgtest.netlify.app/*" }))
app.use(cors({ credentials: true, origin: FRONTEND_URL }))



// app.use(cors({ credentials: true, origin: "*" }));

app.use("/api/v1/publications", publicationRouter);
app.use("/api/v1/maps", mapRouter);
// local server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// any request
// app.listen(PORT, "0.0.0.0", () => {
// 	console.log("Server running on http://10.18.163.104:3000");
// });
