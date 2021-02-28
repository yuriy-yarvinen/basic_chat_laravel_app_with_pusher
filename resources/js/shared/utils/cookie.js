export const setCookie = (name, value) => {
	var value = encodeURI(value);
	document.cookie = name + "=" + value + "; max-age=3600 ; path=/"; // вешаем куки
}

export const getCookie = (name) => {
	let matches = document.cookie.match(new RegExp(
		"(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
	));
	return matches ? decodeURIComponent(matches[1]) : undefined;
}

