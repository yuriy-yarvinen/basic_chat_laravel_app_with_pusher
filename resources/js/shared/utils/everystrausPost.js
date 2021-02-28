const everystrausPost = (url, body, callback) => {
	let xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function () {
		if (xhr.readyState == 4 && xhr.status == 200) {
			callback(JSON.parse(xhr.response));
		}
	}
	xhr.open("POST", url);
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	
	xhr.send(body);
}

export default everystrausPost;