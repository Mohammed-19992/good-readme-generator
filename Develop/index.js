// const fs = require("fs");
// const inquirer = require("inquirer");
// const generateMarkdown = require("./utils/generateMarkdown");
// console.log(inquirer)

// Import function to import generateMarkDown file from its directory
import generateMarkdown from "./utils/generateMarkdown.js";
// Importing package from inquirer Library
import pkg from 'inquirer';
// Importing from the File System
import { writeFile } from "fs";



// prompt function
const { prompt } = pkg;

// array of questions for user
const questions = [
    {
        type: "input",
        name: "Name",
        message: "What is your name?"
    },
    {
        type: "input",
        name: "Name",
        message: "What is your GitHub username?"
    },

    {
        type: "input",
        name: "title",
        message: "What is your project's title?"
    },
    {
        type: "input",
        name: "Description",
        message: "What is Your Project About?"
    },
    {
        type: "input",
        name: "Installation",
        message: "How did you install your project?"
    },
    {
        type: "input",
        name: "Usage",
        message: "How can users use your project?"
    },
    {
        type: "list",
        name: "License",
        message: "Select one of the following licenses used in your project",
        choices: [
            "MIT",
            "GVL-GPL 3.0",
            "APACHE 2.0",
            "BSD 3",
            "GPL 3.0",
            "No License",
        ]
    },
    {
        type: "input",
        name: "Contributing",
        message: "Are there any Contributers to this Project?"
    },
    {
        type: "input",
        name: "Tests",
        message: "What should be done for your project to be tested?"
    },
    
    {
        type: "input",
        name: "Questions",
        message: "Contact info for further questions"
    },
    
];

// function to write README file
function writeToFile(fileName, data) {
    writeFile(fileName, data, err => {
        if (err) {
          throw err;
        }
      });
}

// function to initialize program
function init() {
prompt(questions).then(answers => {
        
        const response = generateMarkdown(answers);
        console.log(answers);
       
        writeToFile("README.md", response);
      
    })

}

// function call to initialize program
init();
