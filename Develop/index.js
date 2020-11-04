const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },{
        type: "input",
        name: "description",
        message: "Give a quick description of your project."
    },{
        type: "input",
        name: "installation",
        message: "What is required to install your project?"
    },{
        type: "input",
        name: "usage",
        message: "What is the primary function of your application?"
    },{
        type: "input",
        name: "license",
        message: "What license would you like on your project?"
    },{
        type: "input",
        name: "contributors",
        message: "Who contributed to this project?"
    },{
        type: "input",
        name: "tests",
        message: "How can users test your application?"
    },{
        type: "input",
        name: "questions",
        message: "Where can users direct questions about this project?"
    }
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then((userResponses) => {
      console.log("Generating your README...");
      writeToFile("README.md", generateMarkdown({...userResponses}));
    })
}

// function call to initialize program
init();
