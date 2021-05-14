// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");
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
      "Write a short description about your project. Motivation? What problems are solved? What did you learn? ",
    name: "description",
  },
  {
    type: "input",
    message: "Provide step-by-step installation instructions:",
    name: "installation",
  },
  {
    type: "input",
    message: "Provide detailed instructions for use:",
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
      "AGPLv3",
      "GPLv3",
      "LGPLv3",
      "Mozilla",
      "Apache",
      "MIT",
      "Boost",
      "Unlicense",
      "DWTFUW",
    ],
    name: "license",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
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
