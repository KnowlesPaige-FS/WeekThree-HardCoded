require("dotenv").config(); 

const http = require("http");
const hostname = "localhost";
const port = 3001;

const fs = require("fs");
let directory_name = "./";
let filenames = fs.readdirSync(directory_name);

console.log("Application running in environment: " + process.env.NODE_ENV);
console.log("The hardcoded secret key is: " + process.env.MY_SECRET_KEY); 

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");

  let fileNamesList = "";
  filenames.forEach((file) => {
    fileNamesList += file + " \n";
  });

  res.end(fileNamesList);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
