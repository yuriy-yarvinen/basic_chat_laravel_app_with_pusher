<template>
	<div>
		    <div class="container">
        <div class="row" id="app">
					<div class="offset-4 col-4">
								<li class="list-group-item active">Chat room</li>
            <ul v-chat-scroll class="list-group">
								<message v-for="(item, index) in chat.messages" :key="index" :value="item" :color="'success'"></message>
              </ul>
                <input @keyup.enter="send" v-model="message" type="text" class="form-control" placeholder="Type your message hire...">
					</div>
        </div>
    </div>
	</div>
</template>

<script>
import message from "./Message";
export default {
	components:{
		message
	},
	data(){
		return {
			message:"",
			chat:{
				messages:[]
			}
		}
	},
	methods:{
		async send() {
      // this.loading = true;
			if(this.message.length != 0){
				this.chat.messages.push(this.message);
				this.message = '';
			}
      let request = {
        message: this.message,

      };

      try {
        const response = await axios.post(
          "/api/sendChat",
          request
        );
      } catch (error) {
        this.error = error.response.data.message;

      }

      this.loading = false;

    },
	}
}
</script>
<style>
	.list-group{
		overflow-y: scroll;
		max-height: 200px;
	}
</style>