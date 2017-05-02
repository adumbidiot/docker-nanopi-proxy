const express = require('express');
const app = express();
const http = require('http');
const httpProxy = require('http-proxy');
const proxy = httpProxy.createProxyServer({ secure: false, changeOrigin: true, hostRewrite: true, autoRewrite: true});
const server = http.createServer(app);

proxy.on('error', function(e) {
  console.log(e);
});
  
app.use(function(req, res, next){
  console.log(req.path);
  console.log(req.query.url);
  next();
});

app.use(function(req, res, next){
  if(req.query.url){
   proxy.web(req, res, { target: req.query.url });
    console.log('Proxying');
  }
});

server.listen('8080');
