const fs = require('fs');
const path = require('path')
//const jsonsInDir = '/home/vsts/work/1/s/Tailspin.SpaceGame.Web/Aayush/'
const jsonsInDir = '$(Build.SourcesDirectory)/Tailspin.SpaceGame.Web/CDVersion/'
let mergedString = '{'

jsonsInDir.forEach(file => {
    const fileData = fs.readFileSync(path.join(jsonDir, file));
    const json = JSON.parse(fileData.toString());
    for (const [key, value] of Object.entries(json)) {
        console.log(`${key}: ${value}`);
        mergedString = `${mergedString} "${key}": "${value}",`
      }
});
mergedString = mergedString.slice(0,-1)+'}'
console.log("mergedString: ", mergedString);
//const mergedJson = JSON.stringify(mergedString, null, 4);

// write file to disk
fs.writeFile('/home/vsts/work/1/s//DownloadedArtifacts/versions.json', mergedString, 'utf8', (err) => {

    if (err) {
        console.log(`Error writing file: ${err}`);
    } else {
        console.log(`File is written successfully!`);
    }

});