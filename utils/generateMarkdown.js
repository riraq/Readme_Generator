// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license){
    case 'Apache License 2.0': 
      const licenseBadge = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
      break;
    case 'GNU GPLv3': 
      const licenseBadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
      break;
    case 'Mozilla Public License 2.0': 
      const licenseBadge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
      break;
    case 'MIT License': 
      const licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
      break;
    default: 
      const licenseBadge = "";
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license){
    case 'Apache License 2.0': 
      const licenseLink = `https://opensource.org/licenses/Apache-2.0`;
      break;
    case 'GNU GPLv3': 
      const licenseLink = `https://www.gnu.org/licenses/gpl-3.0`;
      break;
    case 'Mozilla Public License 2.0': 
      const licenseLink = `https://opensource.org/licenses/MPL-2.0`;
      break;
    case 'MIT License': 
      const licenseLink = `https://opensource.org/licenses/MIT`;
      break;
    default: 
      const licenseLink = "";
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch(license){
    case 'Apache License 2.0': 
      const licenseSection = `   Licensed under the ${license}; You may obtain a copy of the License at https://opensource.org/licenses/Apache-2.0`;
      break;
    case 'GNU GPLv3': 
      const licenseSection = `   Licensed under the ${license}; You may obtain a copy of the License at https://www.gnu.org/licenses/gpl-3.0`;
      break;
    case 'Mozilla Public License 2.0': 
      const licenseSection = `   Licensed under the ${license}; You may obtain a copy of the License at https://opensource.org/licenses/MPL-2.0`;
      break;
    case 'MIT License': 
      const licenseSection = `   Licensed under the ${license}; You may obtain a copy of the License at https://opensource.org/licenses/MIT`;
      break;
    default: 
      const licenseSection = "";
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${licenseBadge}/n
  ## Description/n
  ${data.description}/n
  ## Installation/n
  ${data.installation}/n
  ## Usage/n
  ${data.usage}/n
  ## Contributors/n
  ${data.contribution}/n
  ## Contact/n
  ${data.github}/n
  ## Questions/n
  ${data.email}/n
  ## License/n
  ${licenseSection}/n
`;
};

module.exports = {
  generateMarkdown,
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection
}
