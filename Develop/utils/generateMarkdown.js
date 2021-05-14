// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let license = data.license;

  let badge;
  let licenseLink;

  //Create a function that returns a license badge based on which license is passed in
  // If there is no license, return an empty string

  function renderLicenseBadge(license) {
    switch (license) {
      case "AGPLv3":
        badge =
          "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
        break;
      case "GPLv3":
        badge =
          "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
        break;
      case "LGPLv3":
        badge =
          "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
        break;
      case "Mozilla":
        badge =
          "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
        break;
      case "Apache":
        badge =
          "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
        break;
      case "MIT":
        badge =
          "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
        break;
      case "Boost":
        badge =
          "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
        break;
      case "Unlicense":
        badge =
          "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
        break;
      case "DWTFUW":
        badge =
          "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)";
        break;
      default:
        badge = "";
    }
    return badge;
  }
  renderLicenseBadge(license);
  //Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
    switch (license) {
      case "AGPLv3":
        licenseLink = "https://choosealicense.com/licenses/agpl-3.0/#";
        break;
      case "GPLv3":
        licenseLink = "https://choosealicense.com/licenses/gpl-3.0/";
        break;
      case "LGPLv3":
        licenseLink = "https://choosealicense.com/licenses/lgpl-3.0/";
        break;
      case "Mozilla":
        licenseLink = "https://choosealicense.com/licenses/mpl-2.0/";
        break;
      case "Apache":
        licenseLink = "https://choosealicense.com/licenses/apache-2.0/";
        break;
      case "MIT":
        licenseLink = "https://choosealicense.com/licenses/mit/";
        break;
      case "Boost":
        licenseLink = "https://choosealicense.com/licenses/bsl-1.0/";
        break;
      case "Unlicense":
        licenseLink = "https://choosealicense.com/licenses/unlicense/";
        break;
      case "DWTFUW":
        licenseLink = "http://www.wtfpl.net/about/";
        break;
      default:
        licenseLink = "";
    }
    console.log(licenseLink);
    return licenseLink;
  }
  renderLicenseLink(license);

  return `# ${data.title}
  
  ${badge}

  ## Description

  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Credits

  ${data.credits}

  ## Tests

  ${data.tests}

  ## Questions

  For additional questions, you can check out my GitHub profile: https://github.com/${data.github} or email me at ${data.email} 

  ## License
  This software is covered by the ${data.license} license. Please see more info here: ${licenseLink}
`;
}

module.exports = generateMarkdown;
