var lib = require("./lib");

lib.http.createServer(function(req, res){
    var baseURL = lib.url.parse(req.url,true);
    var links = "." + baseURL.pathname;

    lib.fs.readFile(links, function(err, data){
        if(err){
            res.writeHead(404,{"Content-Type":"text/html"});
            return res.end("404 Not Found!");
        }
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write(data);
        res.write(lib.string_uc.upperCase("cadx"));
        return res.end();
    });

}).listen(8080);
