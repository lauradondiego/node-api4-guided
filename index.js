require("dotenv").config();
// add this to add environment FIRST UP TOP!

const server = require("./api/server.js");
const port = process.env.PORT || 4000;
console.log(process.env.PORT);
server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
