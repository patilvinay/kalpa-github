"use strict";
// let fs = require("fs-extra");
// let fsn = require("fs-nextra");
// const deasync = require("deasync");
var github = require('octonode');



const ghrepoCreate = (repo, args) => {
  var client = github.client(args.token);
  var ghme = client.me();
  ghme.repo({
    "name": repo,
    "description": args.desc,
    "private": args.private
  }, (err, data, header) => {
    console.log("error: " + err);
    console.log("data: " + data);
    console.log("headers:" + header);

  }); //repo

}
const process = (obj) => {
  let play = obj.node['kalpa-github']

  //console.log(play)
  switch (play.action) {
    case 'create':
      let name = play.name
      let args = {
        token: play.token,
        opts: play.opts,
        desc: play.desc,
        private: play.private
      };
      ghrepoCreate(name, args)
      break;
    default:
      break;
  }

};
exports.process = process;
