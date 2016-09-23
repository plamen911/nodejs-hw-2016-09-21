let fs = require('fs');
let url = require('url');
let http = require('http');
let querystring = require('querystring');

let images = require('../models/images');
let imageList = images.imageList;
let getImageList = images.getImageList;

let errorMsg = [];

module.exports = (req, res) => {
    req.pathName = req.pathName || url.parse(req.url).pathname;

    if (req.pathName === '/form') {

        if (req.method.toLowerCase() == 'post') {
            let queryData = '';
            req.on('data', (chunk) => {
                // append the current chunk of data to the queryData variable
                queryData += chunk.toString();
            });
            req.on('end', () => {
                req.body = querystring.parse(queryData);

                let imageName = req.body.imageName || '';
                let imageUrl = req.body.imageUrl || '';

                if (!imageName) {
                    errorMsg.push('Image Name is Missing.');
                }
                if (!imageUrl) {
                    errorMsg.push('Image URL is Missing.');
                }

                if (errorMsg.length === 0) {
                    imageList.push({
                        imageName: imageName,
                        imageUrl: imageUrl
                    });
                }
            });
        }

        fs.readFile('./content/form.html', (err, data) => {
            if (err) {
                errorMsg.push(err.message);
            }

            data = data.toString().replace(/{{ errorMsg }}/, errorMsg.join('<br>'));
            data = data.toString().replace(/{{ imageList }}/, getImageList(imageList));

            res.writeHead(200, {
                'Content-Type': 'text/html',
                'Content-Length': data.length
            });
            res.write(data);
            res.end();
        });

    } else {
        return true;
    }
};