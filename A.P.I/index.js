import express from "express";
import server from "./server/server.js";
// import { createTable } from "./confdb/confdb.js";

const app= express();

app.use(express.json());

app.use("/", server);

// createTable();

app.listen(2000, () =>{
    console.log("Server Start");
});
