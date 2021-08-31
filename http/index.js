import http from "http";

http.createServer((req, res) => {
    if((req.method === "GET") && (req.url === "/teste")){
        res.write('/GET em TESTE');
    }else{
        res.write('/GET em 8080');
    }

    res.statusCode = 200;
    res.end();
   
}).listen(8080);