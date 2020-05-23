"use strict";
let fs = require("fs-extra");
let fsn = require("fs-nextra");
const deasync = require("deasync");

const process = (obj) => {
  let play = obj.node['kalpa-github']
  console.log(play)

};
exports.process = process;
