const express = require("express");

const app = express();

const cors = require("cors");

const PORT = 8080;

const { connectToDatabase } = require("./Database/Db");

const router = require("./Router/TodoRouter");

module.exports = { app, PORT, connectToDatabase, router, express, cors };
