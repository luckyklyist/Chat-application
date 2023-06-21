import express from 'express'
import { config } from 'dotenv'

const app=express();
const PORT=3001;

app.get('/',(_,res)=>res.send("Server running ... !"))

app.listen(PORT,()=>console.log(`Server running at the port ${PORT}`))
