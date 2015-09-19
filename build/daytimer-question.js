// Generated by CoffeeScript 1.9.3
var input, program, question, tag;

tag = "daytimer-question:%s =>";

program = require("commander");

question = require("./question/question");

input = {};

program.option("-n, --name <name>", "title of the question").option("-t, --type <type>", "type of question, can be boolean, number, list, etc.").option("-q, --question <question>", "the question to ask").parse(process.argv);

if (program.name) {
  input.name = program.name;
}

if (program.type) {
  input.type = program.type;
}

if (program.question) {
  input.question = program.question;
}

question(input);
