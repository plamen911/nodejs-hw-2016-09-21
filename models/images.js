let imageList = [];

module.exports.imageList = imageList;

module.exports.getImageList = (imageList) => {
    let str = '<ul>';
    if (imageList.length > 0) {
        for (let i = 0; i < imageList.length; i++) {
            let imageName = imageList[i].imageName;
            let imageUrl = imageList[i].imageUrl;
            str += '<li><a href="/images/details/' + i + '" title="' + imageName + '">' +
                '<img src="' + imageUrl + '" width="120" alt="' + imageName + '" border="0"></a>' +
                '</li>';
        }
    } else {
        str += '<li><i>(empty)</i></li>';
    }

    return str + '</ul>';
};

module.exports.getImageListByName = (imageList) => {
    let str = '<ul>';
    if (imageList.length > 0) {
        for (let i = 0; i < imageList.length; i++) {
            let imageName = imageList[i].imageName;
            let imageUrl = imageList[i].imageUrl;
            str += '<li><a href="/images/details/' + i + '" title="' + imageName + '">' +
                imageName + '</a></li>';
        }
    } else {
        str += '<li><i>(empty)</i></li>';
    }

    return str + '</ul>';
};


module.exports.getImageDetails = (idx) => {
    if (typeof imageList[idx] === 'undefined') {
        return {
            imageName: 'Not Found',
            imageUrl: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=Not+Found&w=350&h=150'
        }
    }

    return {
        imageName: imageList[idx].imageName,
        imageUrl: imageList[idx].imageUrl
    }
};