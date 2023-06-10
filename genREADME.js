function genREADME(gitName, gitEmail, projName, projDescrp, projLicense, projDepend, projTest, projNTK, projContrib) {
    let content=`
    ${gitName} ${gitEmail}, ${projName}, ${projDescrp}, ${projLicense}, ${projDepend}, ${projTest}, ${projNTK}, ${projContrib}
#${projName}

## Description
${projDescrp}

## Table of Contents

*[Installation](#installation)
*[Usage](#usage)
*[License](#license)
*[Contributing](#contributing)
*[Tests](#tests)
*[Questions](#questions)

## Installation

To install the necessary dependencies, run the following command: ``` ${projDepend} ```

## Usage



## License
${projLicense}























    `










    return content;
};

module.exports = genREADME;







