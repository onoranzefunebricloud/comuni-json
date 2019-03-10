const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'data');
const files = fs.readdirSync(dataPath);

const data = [];

files.forEach(f => {
    const filePath = path.join(__dirname, 'data', f);
    const content = fs.readFileSync(filePath).toString();
    const obj = JSON.parse(content);
    data.push(obj);
});

data.sort((a, b) => {
    return a['nome'].localeCompare(b['nome']);
});

const outFilePath = path.join(__dirname, 'comuni.json');
fs.writeFileSync(outFilePath, JSON.stringify(data));
