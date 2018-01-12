'use strict';
const uuid = require('uuid/v1');
class Record  {
    constructor(data){
        this.antibiotic = data.antibiotic; 
    }
}
module.exports = Record;