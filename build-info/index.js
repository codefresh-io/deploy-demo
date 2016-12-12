'use strict';


const Table = require('cli-table');
const colors = require('colors');
const _      = require('lodash');

var branch = process.env.CF_BRANCH || 'master';
var sha = process.env.CF_REVISION|| 'empty';
var shaMessage = process.env.CF_COMMIT_MESSAGE|| 'empty';



var t = new Table({
    head: ['Parameter', 'Value']
   // , colWidths: [100, 200]
});
t.push({"CF_BRANCH" : branch.green});
t.push({"CF_REVISION" : sha.green});
t.push({"CF_COMMIT_MESSAGE" : shaMessage.green});



console.log(t.toString());
