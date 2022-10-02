const fs = require('fs');
const path = require('path')
const jsonsInDir = fs.readdirSync('/home/vsts/work/1/s/Tailspin.SpaceGame.Web/Aayush/')
let mergedString = '{'

jsonsInDir.forEach(file => {
    const fileData = fs.readFileSync(path.join('/home/vsts/work/1/s/Tailspin.SpaceGame.Web/Aayush/', file));
    const json = JSON.parse(fileData.toString());
    for (const [key, value] of Object.entries(json)) {
        console.log(`${key}: ${value}`);
        mergedString = `${mergedString}"${key}": ${value},`
      }
});
mergedString = mergedString.slice(0,-1)+'}'
console.log("mergedString: "+mergedString);
const mergedJson = JSON.stringify(mergedString);

// write file to disk
fs.writeFile('/home/vsts/work/1/s//DownloadedArtifacts/versions.json', mergedJson, 'utf8', (err) => {

    if (err) {
        console.log(`Error writing file: ${err}`);
    } else {
        console.log(`File is written successfully!`);
    }

});