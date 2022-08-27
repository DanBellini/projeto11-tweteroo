import express from 'express';
import cors from 'cors';

const server = express();

server.use(cors());
server.use(express.json())

const users =[];
const tweets=[];

server.post("/sign-up", (req, res)=>{
    const newUser = req.body;

    users.push(newUser)
    res.send("teste1")
});

server.get("/tweets", (req, res) =>{
    res.send("teste3");
});


server.listen(5000, () => console.log("Listening on port 5000"));