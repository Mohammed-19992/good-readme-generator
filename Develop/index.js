
// var writeFile = require("fs");
 // var generateMarkdown = require("./utils/generateMarkdown.js");
 // var pkg = require("inquirer");

// Import function to import generateMarkDown file from its directory
 import generateMarkdown from "./utils/generateMarkdown.js";
// Importing package from inquirer Library
 import pkg from 'inquirer';
// Importing from the File System
 import { writeFile } from "fs";

// prompt function
const { prompt } = pkg;

// arrays of questions for user
const statements = [
    {type: "input", name: "Name", message: "What is your name?"},
    {type: "input", name: "Title", message: "What is your project's title?"},
    {type: "input", name: "Description", message: "What is Your Project About?"},
    {type: "input", name: "Installation", message: "How did you install your project?"},
    {type: "input", name: "Usage", message: "How can users use your project?"},
    {type: "input", name: "License", message: "What is the license you wish to use in the project?"},
    {type: "input", name: "Credits", message: "Are there any Contributers to this Project?"},
    {type: "input", name: "Tests", message: "What should be done for your project to be tested?"},
    {type: "input", name: "Contact", message: "Contact info for further questions"}, 
];

// function to write README file
function writeToFile(fileName, data) {
    writeFile(fileName, data, error => {
    if (error) {

    throw error;
        }
      });
}

// function to initialize program
function init() {
prompt(statements).then(answers => {
        
        const response = generateMarkdown(answers);
        console.log(answers);
        writeToFile("README.md", response);
      
    })

}

// function call to initialize program
init();
