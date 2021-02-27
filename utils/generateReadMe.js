// TODO: Create a function that returns a license badge based on which license is passed in
const fs = require('fs');

const writeReadMe = fileContents => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/README.md', fileContents, err => {
      if(err) {
        reject(err);
        return;
      }
      resolve({
        ok:true,
        message: 'README.md file created. Check dist directory for output.'
      });
    });
  });
};



// // If there is no license, return an empty string
// renderLicenseBadge(license) => {
//   return inquirer.prompt 
// }

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// // TODO: Create a function to generate markdown for README
// function generateReadMe(data) {
//   return `# ${data.title}

// `;
// }

module.exports = writeReadMe;
