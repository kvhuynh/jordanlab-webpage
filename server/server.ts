export {};
const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
const PORT = 3000;

const { publicationRouter } = require("./routes/publications.routes");

app.use(express.json());

// local server
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));

// app.use(cors({ credentials: true, origin: "*" }));

app.use("/api/v1/publications", publicationRouter);

// local server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// any request
// app.listen(PORT, "0.0.0.0", () => {
// 	console.log("Server running on http://10.18.163.104:3000");
// });
