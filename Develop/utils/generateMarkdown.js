// This function is to generate markdown data for README
export default function markdown(data) {
  console.log(data);
  return `

#### Title of the Project ####
${data.Title}

## Table of Contents
1- [name](#Name) 
2- [Description](#Description)
3- [Installation](#Installation)
4- [Usage](#Usage)
5- [License](#License)
6- [Credits](#Credits)
7- [Testing](#Testing)
8- [Questions](#Questions)

## Title
${data.Title}

## Description
${data.Description}

## Installation
${data.Installation}

## Usage
${data.Usage}

## License
${data.License}

## Credits
${data.Credits}

## Testing
${data.Testing}

## Questions
Contact me using the following:

#Github url:[${data.Username}]

#Email Address:[${data.Email}]


                                                    All rights reserved ® ${data.Name} 2020 

`;}