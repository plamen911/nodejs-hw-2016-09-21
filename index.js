let http = require('http');
let fs = require('fs');

let images = require('./models/images');
let imageList = images.imageList;

let handlers = require('./handlers/index');

let port = 3000;

http
    .createServer((req, res) => {

        // Handler that catches a header with name "StatusHeader" and with value "Full"
        let statHeader = null;
        if (req.headers.hasOwnProperty('StatusHeader')) {
            statHeader = req.headers.StatusHeader;
        } else if (req.headers.hasOwnProperty('statusheader')) {
            statHeader = req.headers.statusheader;
        }

        if (statHeader && statHeader == 'Full') {
            fs.readFile('./content/status.html', (err, data) => {
                if (err) {
                    console.log(err);
                }

                data = data.toString().replace(/{{ imagesNum }}/, imageList.length);

                res.writeHead(200, {
                    'Content-Type': 'text/html',
                    'Content-Length': data.length
                });
                res.write(data);
                res.end();
            });

        } else {
            for (let handler of handlers) {
                let next = handler(req, res);
                if (!next) {
                    break;
                }
            }
        }

    })
    .listen(port);

console.log(`Server is listening on http://localhost:${port}`);