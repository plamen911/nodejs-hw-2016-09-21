let fs = require('fs');
let url = require('url');

function getContentType(url) {
    let contentType = 'text/plain';
    if (url.endsWith('.css')) {
        contentType = 'text/css';
    } else if (url.endsWith('.ico')) {
        contentType = 'image/x-icon';
    } else if (url.endsWith('.js')) {
        contentType = 'application/javascript';
    } else if (url.endsWith('.jpg')) {
        contentType = 'image/jpeg';
    } else {
        contentType = 'text/html';
    }

    return contentType;
}

module.exports = (req, res) => {
    req.pathName = req.pathName || url.parse(req.url).pathname;

    // Restrict the handler to serve only files from the ‘content’ folder. Restrict it to server only html, css, js and jpg
    if (req.pathName.startsWith('/content/') &&
        (
            req.pathName.endsWith('.html') ||
            req.pathName.endsWith('.css') ||
            req.pathName.endsWith('.js') ||
            req.pathName.endsWith('.jpg')
        )
    ) {
        fs.readFile('.' + req.pathName, (err, data) => {
            if (err) {
                res.writeHead(404);
                res.write('Not Found.');
                res.end();
                return true;
            }

            res.writeHead(200, {
                'Content-Type': getContentType(req.pathName)
            });
            res.write(data);
            res.end();
        });
    }

};