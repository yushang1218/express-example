var fetch = require('node-fetch');

var config = require('./../config/config');

let url = `http://${config.log.host}:${config.log.port}/eink?text=${config.username}`;

fetch(url);

console.log(`wellcome ${config.username}`);