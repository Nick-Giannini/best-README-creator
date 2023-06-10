function genREADME(gitName, gitEmail, projName, projDescrp, projLicense, projDepend, projTest, projNTK, projContrib) {
    let badge = '';
    switch (projLicense) {
        case 'MIT':
            badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
            break;
        case 'APACHE 2.0':
            badge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
            break;
        case 'GPL 3.0':
            badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'

            break;
        case 'BSD 3':
            badge = '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
            break;
        default:
            break;
    }

    let content =`# ${projName}
${badge}

## Description
${projDescrp}

## Table of Contents
*[Installation](#installation)\n
*[Usage](#usage)\n
*[License](#license)\n
*[Contributing](#contributing)\n
*[Tests](#tests)\n
*[Questions](#questions)\n

## Installation

To install the necessary dependencies run the following command:
${projDepend}

## Usage
${projNTK}

## License
This project is licensed under the ${projLicense} license.

## Contributing
To contribute to this project please contact me at ${gitEmail}
Also be aware that you must do the followed to contribute:${projContrib}

## Tests
${projTest}

## Questions
Contact me at ${gitEmail} or ${gitName}`;

    return content;
};

module.exports = genREADME;







