var mimeTypeLookup = function (url) {
	var contentType;
	var extension = url.split('.').pop();
	switch (extension) {
		case 'html':
			contentType = 'text/html';
			break;
		case 'js':
			contentType = 'text/javascript';
			break;
		case 'jsx':
			contentType = 'text/javascript';
			break;
		case 'css':
			contentType = 'text/css';
			break;
		case 'jpg':
			contentType = 'image/jpeg';
			break;
		case 'jpeg':
			contentType = 'image/jpeg';
			break;
		default:
			contentType = 'text/plain';
	}

	return {'Content-Type': contentType};
}

module.exports = mimeTypeLookup;