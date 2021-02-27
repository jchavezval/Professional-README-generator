const licenseBadge = choice => {
    return 
    `<div style="position: absolute; top: 20px; right: 40px">
    
    ![license: ${choice}](https://img.shields.io/badge/license-${choice.split('').join('%20')}-blue)</div>`
}

const listContributors = arr => {
    let list =[];
for (i=0; i < arr.length - 1; i++) {
    let item = `[${arr[i].contributorsGitHub}](https://github.com/${arr[i].contributorsGitHub})`
    list.push(item);
} if (list.length === 0) {
    return "";
}
let literal = "- " + list.join(`- `);
return literal;
};

module.exports = (promptData) => {
    const { projectName, gitHub, email, description, license, deployedLink, installationInstructions, usageInstructions} = promptData;
return `# ${projectName}

${licenseBadge(license)}

<a href = "#description"></a>
## Description
${description}
${deployedLink}
## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Tests](#tests)
  - [Contributing Guide Lines](#contributing)
  - [Questions](#questions)
<a href = "#installation"></a>
## Installation
${installationInstructions}
<a href = "#usage"></a>
## Usage
${usageInstructions}
<a href = "#credits"></a>
## Credits
- [${gitHub}](https://github.com/${gitHub})
${listContributors}
<a href = "#license"></a>
## License
${license}
<a href = "#contributing"></a>
### Contact information:
- GitHub: [${gitHub}](https://www.github.com/${gitHub})
- Email: [${email}](mailto:${email})
`
};
