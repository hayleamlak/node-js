const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/case1") {
        // CASE 1: Explicit writeHead + end
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Case 1: Using writeHead() and end()");
    }

    else if (req.url === "/case2") {
        // CASE 2: Only end() — Node auto sets headers
        res.end("Case 2: Only end(), no writeHead()");
    }

    else if (req.url === "/case3") {
        // CASE 3: Setting headers without writeHead()
        res.setHeader("Content-Type", "text/plain");
        res.statusCode = 201; // Created
        res.end(JSON.stringify({ message: "Case 3: Custom headers via setHeader()" }));
    }

    else {
        res.writeHead(404, { "Content-Type":"text/plain"});
        res.end("Not Found");
    }
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
