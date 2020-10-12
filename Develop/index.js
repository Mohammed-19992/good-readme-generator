
// var writeFile = require("fs");
 // var generateMarkdown = require("./utils/generateMarkdown.js");
 // var pkg = require("inquirer");
//const fs = require("fs");
//const inquirer = require("inquirer");
//const generateMarkDown = require("./utils/generateMarkdown.js");


// Function to import generateMarkDown file from its directory
import markdown from "./utils/generateMarkdown.js";
// Importing package from inquirer Library
import pkg from 'inquirer';
// writeFile function 
 import { writeFile } from "fs";

// prompt function
const { prompt } = pkg;

// arrays of questions for user
const statements = [

    {type: "input", name: "Title", message: "What is the title of your project?"},
    {type: "input", name: "Author", message: "What is the name of the Author of this project?"},
    {type: "input", name: "Description", message: "What is Your Project About?"},
    {type: "input", name: "Installation", message: "How did you install your project?"},
    {type: "input", name: "Usage", message: "How can users use your project?"},
    {type: "input", name: "License", message: "Provide your License URL(type none if this project does not have a license)"},
    {type: "input", name: "Credits", message: "Are there any Contributers to this Project?"},
    {type: "input", name: "Testing", message: "What should be done for your project to be tested?"},
    {type: "input", name: "Questions", message: "Contact details for any questions. Press Enter!"}, 
    {type: "input", name: "Username", message: "What is your GitHub username?"},
    {type: "input", name: "Email", message: "What is your email Address?"},
        
];

// function to write README file
function writeToFile(fileName, data) {
    writeFile(fileName, data, error => {
    if (error) throw error;
    console.log('The file has been succeffuly saved!');

      });
}

// function to initialize program
function init() {
prompt(statements).then(answers => {
        
        const response = markdown(answers);
        console.log(answers);
        writeToFile("README.md", response);
      
    })

}

// function call to initialize program
init();
