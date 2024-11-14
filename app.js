const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/api/bookings", (req, res, next) => {
  const { lat, lng, party_size } = req.query;
});
