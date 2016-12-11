const request           = require('superagent');
const measureTime       = require('measure-time');
const html              = require('html');
const colors            = require('colors');
const _                 = require('lodash');

const getElapsed = measureTime();


var source = {a:1};
(!process.env.VERSION_TO_DEPLOY) ? process.env.VERSION_TO_DEPLOY= "1.1.1.1" : process.env.VERSION_TO_DEPLOY
console.log(`dest ${process.env.VERSION_TO_DEPLOY}`);

console.log(`${"we are starting deploying of version".green} ${process.env.VERSION_TO_DEPLOY.red}`);

request
    .post('g.codefresh.io')
    .send({ name: 'Manny', species: 'cat' })
    .set('X-API-Key', 'foobar')
    .set('Accept', 'application/json')
    .end(function(err, res){
        // Calling the end function will send the request
        const elapsed = JSON.stringify(getElapsed());;

        console.log(`${html.prettyPrint(JSON.stringify(res))}`);

        console.log(elapsed.green);
    });


