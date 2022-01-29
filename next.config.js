const nextEnv = require("next-env");
const dotenvLoad = require("dotenv-load");
// const

dotenvLoad();

const withEnv = nextEnv();
module.exports = withEnv();
