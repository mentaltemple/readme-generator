// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const path = require("path");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the name of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "Write a description about your project",
    name: "description",
  },
  {
    type: "list",
    message: "Which license would you like to use?",
    choices: ["MIT", "ISC", "GPL"],
    name: "license",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  //path (shipped module) - join method
  return fs.writeFile();
}

// TODO: Create a function to initialize app
function init() {
  //
  inquirer.prompt(questions).then((data) => {
    //figure out how to take user responses and write to README
    writeToFile("README.md", generateMarkdown(data));
  });
}

// Function call to initialize app
init();
