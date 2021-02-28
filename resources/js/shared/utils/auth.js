export function b64EncodeUnicode(str) {
	// first we use encodeURIComponent to get percent-encoded UTF-8,
	// then we convert the percent encodings into raw bytes which
	// can be fed into btoa.
	return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
			function toSolidBytes(match, p1) {
					return String.fromCharCode('0x' + p1);
	}));
}

export function b64DecodeUnicode(str) {
	// Going backwards: from bytestream, to percent-encoding, to original string.
	return decodeURIComponent(atob(str).split('').map(function(c) {
			return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
	}).join(''));
}

function setCookie(name, value, days, path) {
	path = path || '/'; // заполняем путь если не заполнен
	days = days || 10;  // заполняем время жизни если не получен параметр
	var last_date = new Date();
	last_date.setDate(last_date.getDate() + days);
	var value = encodeURI(value) + ((days==null) ? "" : "; expires="+last_date.toUTCString());
	document.cookie = name + "=" + value + "; path=" + path; // вешаем куки
}

function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function deleteCookie(name) {
  setCookie(name, "", {
    'max-age': -1
  })
}

export function isLoggedIn() {
	let cookie = getCookie('chat_user');
	if(cookie){
		var json = b64DecodeUnicode(cookie);
		var data = JSON.parse(json);
	}
	else{
		data = {
			isLoggedIn: false
		};
	}

	return data.isLoggedIn === true;
}

export function setClientData(data) {

	setCookie('chat_user', data, 360, '/');
}

export function logOut() {
	deleteCookie('chat_user');
	
	if(window.location.href.indexOf('login') == -1 && window.location.href.indexOf('registration') == -1 && window.location.href.indexOf('password') == -1){
		window.location.href = document.location.origin + "/login";
	}

}

export function generatePassword() {
	let length = 8,
			charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!()",
			retVal = "";
	for (let i = 0, n = charset.length; i < length; ++i) {
			retVal += charset.charAt(Math.floor(Math.random() * n));
	}
	return retVal;
}

export function siteKey(){
	return '6Leid7cUAAAAANYT51j313_vRDm3OEW1o3CzKof0';
}


export function userRedirectTo(){

	let cookie = getCookie('chat_user');
	
	if(cookie){
		var json = b64DecodeUnicode(cookie);
		var data = JSON.parse(json);
	}
	else{
		data = {
			id: false,
		}
	}
	// const id =  localStorage.getItem("id");
	const id =  data.id;

	var obj = new Object();

	obj.path = '/chat/'+id;
		
	return obj;

}

export function getId(){
	let cookie = getCookie('chat_user');
	
	if(cookie){
		var json = b64DecodeUnicode(cookie);
		var data = JSON.parse(json);
	}
	else{
		data = {
			id: false,
		}
	}
	// const id =  localStorage.getItem("id");
	const id =  data.id;

	return id;
}