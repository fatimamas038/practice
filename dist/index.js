import express from "express";
import { WebSocketServer } from "ws";
const httpServer = express();
const wss = new WebSocketServer({ server: httpServer.listen(3000) });
wss.on("error", (error) => {
    console.log("error");
});
wss.on("connection", (socket) => {
    console.log("connection");
    socket.send("hello from server");
    socket.on("message", (msg) => {
        console.log(JSON.parse(msg.toString()));
        wss.clients.forEach((client) => {
            client.send(JSON.stringify({ message: msg.toString() }));
        });
    });
});
console.log("hello from server");
console.log("hello from server2");
//# sourceMappingURL=index.js.map