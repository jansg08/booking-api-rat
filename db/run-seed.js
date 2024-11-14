const seed = require("./seed");
const db = require("./connection");
const data = require("./data");

const runSeed = () => seed(data).then(() => db.end());

runSeed();
