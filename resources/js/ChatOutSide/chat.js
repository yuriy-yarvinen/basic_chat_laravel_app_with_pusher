import Echo from 'laravel-echo';

window.Pusher = require('pusher-js');

window.Echo = new Echo({
    broadcaster: 'pusher',
    key: process.env.MIX_PUSHER_APP_KEY,
    cluster: process.env.MIX_PUSHER_APP_CLUSTER,
    forceTLS: true
});

let typing = false;
let chat = {
	messages: [],
	user: [],
	color: [],
	time: [],
};

function getTime() {
	let time = new Date();
	let month = time.getMonth() < 10 ? `0${time.getMonth()}` : time.getMonth();
	let minutes = time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes();
	let date = time.getDate() < 10 ? `0${time.getDate()}` : time.getDate();

	return `${date}.${month}.${time.getFullYear()} ${time.getHours()}:${minutes}`;
}

let request = {
	message: 'sdasdas',
};

fetch('https://chat.test/api/sendChat', {
	method: 'POST',
	headers: {
		'Access-Control-Allow-Origin': '*',
		'Content-Type': 'application/json',
	},
	body: JSON.stringify(request)
  })
  .then((data) => data.json())
  .then((resp) => console.log(resp))
  .catch((err) => console.log(err));
 

window.Echo.channel("chat_1_1")
	.listen(".ChatEvent", (e) => {
		// chat.user.push(e.user.name);
		chat.color.push("warning");
		chat.messages.push(e.message);
		chat.time.push(getTime());
	})
	.listenForWhisper('typing', (e) => {
		if (e.name != '') {
			typing = true;
		}
		else {
			typing = false;
		}
	});