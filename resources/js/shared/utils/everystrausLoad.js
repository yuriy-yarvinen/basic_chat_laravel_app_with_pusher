import { concat } from "lodash";

function getTimezoneOffset() {
	var offset = new Date().getTimezoneOffset();
	var sign = offset < 0? '+' : '-';
	return encodeURIComponent(sign + (Math.abs(offset) / 60));
}

const everystrausLoad = (url, api_path, obj, callback) => {

	var everyXhr = new XMLHttpRequest();

	everyXhr.onreadystatechange = function () {
		if (everyXhr.readyState == 4 && everyXhr.status == 200) {
			callback(JSON.parse(everyXhr.response));
		}
	}

	if(obj.type === 'callback'){
		everyXhr.open("GET", url + api_path + obj.everystraus_id + '/' + obj.everystraus_callback_id + "?" + "user_gmt=" + getTimezoneOffset(), true);
	}
	if(obj.type === 'callback_prev'){
		everyXhr.open("GET", url + api_path, true);
	}

	everyXhr.send();
}

export default everystrausLoad;