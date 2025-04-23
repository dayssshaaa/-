require("dotenv").config();
const http = require("http");
const fs = require("fs");
const PORT = process.env.PORT || 3000;
const requestHandler = (req, res)=> {
    if (ref.method == "GET"&& req.url === "/patients"){
        fs.readFile("db.jason", "utf-8", (err, data )=> {
            if (err) {
                res.writeHead(500, { "Content-Type": "application/json"});
                res.end(JSON.stringify({error: "Ошибка сервера"}));
            } else {
                res.writeHead(200, { "Content-Type": "application/json"});
                res.end (data);
            }
        });
    } else {
        res.writeHead(404, { "Content-Type": "application/json"});
        res.end(JSON.stringify({error: "Страница не найдена"}));
    }
};
const server = http. createServer( requestHandler);
server.listen(PORT,() => {
    console.log(`Cервер запущен на порту ${PORT}`);
});
