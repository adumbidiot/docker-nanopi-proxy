const express = require('express');
const app = express();
const http = require('http');
const httpProxy = require('http-proxy');
const proxy = httpProxy.createProxyServer({});
const server = http.createServer(app);

app.use(function(req, res, next){
  console.log(req.path);
  console.log(req.query.url);
});

app.use(function(req, res, next){
  proxy.web(req, res, { target: req.query.url });
});

server.listen('8080');
