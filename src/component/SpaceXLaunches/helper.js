import { ACCEPTED_IMAGE_HEIGHT, ACCEPTED_IMAGE_WIDTH, RESIZED_IMAGES_DIMENSION } from "./constants"

export const checkIfAcceptedImage = (image) => {
    const width = image.width;
    const height = image.height;
    if(width !== ACCEPTED_IMAGE_WIDTH && height !== ACCEPTED_IMAGE_HEIGHT) return false;
    return true;
}

export const getResizedImages = (image) => {
    const resizedImages = [];
    RESIZED_IMAGES_DIMENSION.forEach(dimension => {
        const canvas = document.createElement('canvas');

        canvas.width = dimension.w;
        canvas.height = dimension.h;
        canvas.getContext('2d').drawImage(image, 0, 0, dimension.w, dimension.h);
        const dataUrl = canvas.toDataURL('image/jpeg');
        resizedImages.push({ blob: dataURLToBlob(dataUrl), type: dimension.type})
    });
    return resizedImages;
}

var dataURLToBlob = function(dataURL) {
    var BASE64_MARKER = ';base64,';
    if (dataURL.indexOf(BASE64_MARKER) == -1) {
        var parts = dataURL.split(',');
        var contentType = parts[0].split(':')[1];
        var raw = parts[1];

        return new Blob([raw], {type: contentType});
    }

    var parts = dataURL.split(BASE64_MARKER);
    var contentType = parts[0].split(':')[1];
    var raw = window.atob(parts[1]);
    var rawLength = raw.length;

    var uInt8Array = new Uint8Array(rawLength);

    for (var i = 0; i < rawLength; ++i) {
        uInt8Array[i] = raw.charCodeAt(i);
    }

    return new Blob([uInt8Array], {type: contentType});
}