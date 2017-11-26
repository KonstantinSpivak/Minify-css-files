const path = require("path");
const minify = require("./minify");
const fs = require("fs");

const config = require("./cofig");

fs.readdir(config.scanPath, (err, files) => {
    let clearFiles = files.filter(file => path.extname(file) === '.css');

    clearFiles.forEach(file => {
        let readFile = fs.createReadStream(`${config.scanPath}/${file}`);
        readFile.pipe(minify).pipe(fs.createWriteStream(`${config.distPath}/out.css`));
    });
});

