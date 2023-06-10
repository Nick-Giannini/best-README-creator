function genREADME(gitName, gitEmail, projName, projDescrp, projLicense, projDepend, projTest, projNTK, projContrib) {
    let content=`

# ${projName}

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







