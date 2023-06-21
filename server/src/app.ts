import express from 'express'
import config  from 'config'
import {createServer} from 'http'
import { Server } from 'socket.io';

const app=express();
const server=createServer(app);
const PORT=config.get<number>("port");

app.get('/',(_,res)=>res.send("Server running ... !"))

server.listen(PORT,()=>console.log(`Server running at the port ${PORT}`))
