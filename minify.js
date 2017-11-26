const { Transform } = require("stream");

let minify = new Transform( {
    transform(chank, trans, cb) {
        this.push(chank.toString().replace(/\s/g, ''));
        cb();
    }
});

module.exports = minify;