// index.js
const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(cors({ credentials: true, origin: "http://localhost:5173" }));


app.get("/api/publications/:orcid", async (req, res) => {
  const orcidId = req.params.orcid;
  console.log(orcidId)
  try {
    const response = await axios.get(`https://pub.orcid.org/${orcidId}/works`, {
      headers: { Accept: "application/json" },
    });
    res.json(response.data);
    console.log(response.data);
    
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log(err);
    
  }
});



app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});