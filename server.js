const http = require("http"),
url = require("url"),
fs= require("fs");
http.createServer((req, res )=>{
    let addr = req.url 
    parsedUrl= url.parse(addr, true) 
    if (parsedUrl.pathname.includes("documentation"))
       filePath = (__dirname + "/documentation.html")
    else
      filePath = "index.html"
    fs.readFile(filePath, (e, data)=>{
        if(e){
            throw e;
        }
        res.writeHead(200, {'Content-Type':'text/plain'})
        res.end(data);
        res.end();
    })
    
    fs.appendFile("log.txt", `\n URL: ${addr} *** Timestamp: ${new Date()}`, (err)=>{
        if(err)
            console.log(err)
        else
           console.log("Data added to log file") 
    })

}).listen(8080)

console.log("Node is created!")