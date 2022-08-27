import express, { application } from 'express';
import cors from 'cors';

const server = express();
server.use(cors());

server.get("/", (req, res) =>{
    res.send("teste");
});

server.listen(5000, () => console.log("Listening on port 5000"));