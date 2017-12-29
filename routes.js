const fs = require('fs');
const path = require('path');
const router = require('koa-router')();

router.get('/earth', indexView);
function chooseFile(url){
    return (url) => {
        var html = yield readFileThunk(path.join(__dirname, url));
        this.body = html;
    }
}
var readFileThunk = function(src) {
    return new Promise(function(resolve, reject) {
        fs.readFile(src, {
            'encoding': 'utf8'
        }, function(err, data) {
            if (err) return reject(err);
            resolve(data);
        });
    });
}

function* indexView(next) {
    var html = yield readFileThunk(path.join(__dirname, '/earth/index.html'));
    this.body = html;
}

module.exports = router;
