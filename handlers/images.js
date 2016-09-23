let fs = require('fs');
let url = require('url');

let images = require('../models/images');
let imageList = images.imageList;
let getImageListByName = images.getImageListByName;
let getImageDetails = images.getImageDetails;

let errorMsg = [];

module.exports = (req, res) => {
    req.pathName = req.pathName || url.parse(req.url).pathname;

    let re = /(\d+)$/;
    let m;

    if (req.pathName.startsWith('/images/details/') && ((m = re.exec(req.pathName)) !== null)) {

        let idx = m[0];

        fs.readFile('./content/image-details.html', (err, data) => {
            if (err) {
                errorMsg.push(err.message);
            }

            data = data.toString().replace(/{{ errorMsg }}/, errorMsg.join('<br>'));
            data = data.toString().replace(/{{ imageName }}/, getImageDetails(idx).imageName);
            data = data.toString().replace(/{{ imageUrl }}/, getImageDetails(idx).imageUrl);

            res.writeHead(200, {
                'Content-Type': 'text/html',
                'Content-Length': data.length
            });
            res.write(data);
            res.end();
        });

    } else if (req.pathName === '/images' || req.pathName === '/images/all') {
        fs.readFile('./content/images.html', (err, data) => {
            if (err) console.log(err);

            let listContent = getImageListByName(imageList);
            if (!listContent) {
                listContent = 'No Images';
            }

            data = data.toString().replace(/{{ imageListByName }}/, listContent);

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