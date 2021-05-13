// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const path = require("path");
const { clear } = require("console");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message:
      "Write a short description about your project. Motivation? Why? What problems is solved? What did you learn? ",
    name: "description",
  },
  {
    type: "input",
    message:
      "(Installation) Provide a step-by-step description of how to get the dev environment running:",
    name: "installation",
  },
  {
    type: "input",
    message: "Provide instructions for use:",
    name: "usage",
  },
  //add screenshots???
  {
    type: "input",
    message: "List your collaborators with links to their GitHub profiles:",
    name: "credits",
  },
  {
    type: "input",
    message: "Test questions:",
    name: "tests",
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "github",
  },
  {
    type: "input",
    message: "What is your e-mail?",
    name: "email",
  },
  {
    type: "list",
    message: "Which license would you like to use?",
    choices: [
      "GNU AGPLv3",
      "GNU GPLv3",
      "GNU LGPLv3",
      "Mozilla Public 2.0",
      "Apache 2.0",
      "MIT",
      "Boost Software 1.0",
      "The Unlicense",
    ],
    name: "license",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  console.log(data);
  //path (shipped module) - join method
  return fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("Success!")
  );
}

// TODO: Create a function to initialize app
function init() {
  //
  inquirer
    .prompt(questions)
    .then((data) => {
      //figure out how to take user responses and write to README
      writeToFile("README.md", generateMarkdown(data));
    })
    .catch();
}

// Function call to initialize app
init();
