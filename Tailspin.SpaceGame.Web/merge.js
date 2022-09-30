const fs = require('fs');
const jsonsInDir = fs.readdirSync('./Tailspin.SpaceGame.Web/Aayush')
let mergedString = '{'

jsonsInDir.forEach(file => {
    const fileData = fs.readFileSync(path.join('./Aayush', file));
    const json = JSON.parse(fileData.toString());
    for (const [key, value] of Object.entries(json)) {
        console.log(`${key}: ${value}`);
        mergedString = `${mergedString}"${key}": ${value}},`
      }
});
mergedString = mergedString.slice(0,-1)+'}'
const mergedJson = JSON.stringify(mergedString);

// write file to disk
fs.writeFile('./Tailspin.SpaceGame.Web/DownloadedArtifacts/versions.json', mergedJson, 'utf8', (err) => {

    if (err) {
        console.log(`Error writing file: ${err}`);
    } else {
        console.log(`File is written successfully!`);
    }

});