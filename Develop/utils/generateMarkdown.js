// This function is to generate markdown data for README
export default function markdown(data) {
  console.log(data);
  return `
  
${data.License}




#### Title of the Project ####
${data.Title}

## Table of Contents
* [Author](#Author) 
* [Description](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Credits](#Credits)
* [Testing](#Testing)
* [Questions](#Questions)

## Author
${data.Author}

## Title
${data.Title}

## Description
${data.Description}

## Installation
${data.Installation}

## Usage
${data.Usage}

## License
This project is licensed under the ${data.License}

## Credits
${data.Credits}

## Testing
${data.Testing}

## Questions
Contact me using the following:

#Github url:[https://github.com/${data.Username}]

#Email Address:[${data.Email}]


                                                    All rights reserved ® ${data.Author} 2020 

`;}