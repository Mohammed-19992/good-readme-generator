// This function is to generate markdown data for README
export default function generateMarkdown(data) {
  console.log(data);
  return `
## Name
${data.Name}

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

## Test
${data.Tests}

# Contact
${data.Contact}

`;}