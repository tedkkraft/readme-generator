// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description

${data.description}

## Installation

\`\`\`
${data.installation}
\`\`\`

## Usage

${data.usage}

## License

${data.license}

## Contributors

${data.contributors}

## Tests

\`\`\`
${data.tests}
\`\`\`

## Questions

If you have any questions about this project, please direct them here:

${data.questions}

`;
}

module.exports = generateMarkdown;
