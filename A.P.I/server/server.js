import express from "express";
import { createUser, getAllUserData, getbynoktp , upddata, deletedata} from "../settings/settings.js";
import { getAllSupersuser, createSuser, getSuperBynoktp, updduadata, dltSuser } from "../settings/2settings.js";

const server=express.Router();

server.get("/get", getAllUserData);
server.get("/get/:noktp", getbynoktp);
server.post("/add", createUser);
server.patch("/upd/:noktp", upddata);
server.delete("/del/:noktp", deletedata);

server.get("/get2", getAllSupersuser);
server.get("/get2/:noktp", getSuperBynoktp);
server.post("/add2", createSuser);
server.patch("/upd2/:noktp", updduadata);
server.delete("/del2/:noktp", dltSuser);

export default server;