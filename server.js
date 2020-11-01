const express = require("express");
const http = require("http");
const app = require("./app");
require("dotenv").config();

const port = process.env.PORT;

const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Server is running at port : ${port}`);

});