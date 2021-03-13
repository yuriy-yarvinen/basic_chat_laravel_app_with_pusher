<template>
  <div>
    <header-vue></header-vue>
    <div class="container">
      <div class="row" id="app">
        <div class="offset-4 col-4">
          <li class="list-group-item active">
            Chat room
            <span class="badge badge-success badge-pill">{{
              users_number
            }}</span>
          </li>
          <div class="badge badge-pill">{{ typing ? "typing..." : "" }}</div>
          <ul v-chat-scroll class="list-group">
            <message
              v-for="(item, index) in chat"
              :key="index"
              :item="item"
            ></message>
          </ul>
          <input
            @keyup.enter="send"
            v-model="message"
            type="text"
            class="form-control"
            placeholder="Type your message hire..."
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import message from "./Message";
import Header from "../Header";
import { mapState } from "vuex";

export default {
  components: {
    message,
    "header-vue": Header,
  },
  data() {
    return {
      message: "",
      chat: [],
      typing: false,
      users_number: 0,
    };
  },
    computed: {
    ...mapState({
      user: "user",
    }),
  },
  methods: {
    async send() {
      this.loading = true;
      if (this.message.length != 0) {
        let chat_obj = {
          message:this.message,
          user_name: 'you',
          user_id:this.user.data.id,
          created_at:new Date(),
        };

        this.chat.push(chat_obj);

        let request = {
          message: this.message,
        };

        try {
          await axios.post("/api/sendChat", request);
        } catch (error) {
          this.error = error.response.data.message;
        }

        this.loading = false;
        this.message = "";
      }
    },
  },
  watch: {
    message() {
      window.Echo.private("chat").whisper("typing", {
        name: this.message,
      });
    },
  },
  mounted() {
    axios.get("/api/getChat").then((response) => {
      this.chat = response.data;
    });

    window.Echo.private("chat")
      .listen(".ChatEvent", (e) => {

        let chat_obj = {
          message:e.message,
          user_id:e.user_id,
          user_name: e.user.name,
          created_at:new Date(),
        };
        this.chat.push(chat_obj);

      })
      .listenForWhisper("typing", (e) => {
        if (e.name != "") {
          this.typing = true;
        } else {
          this.typing = false;
        }
      });

    window.Echo.join("chat")
      .here((users) => {
        this.users_number = users.length;
      })
      .joining((user) => {
        this.$toaster.success(`${user.name} join chat.`);
        this.users_number += 1;
      })
      .leaving((user) => {
        this.$toaster.info(`${user.name} leave chat.`);
        this.users_number -= 1;
      });
  },
};
</script>
<style>
.list-group {
  overflow-y: scroll;
  max-height: 200px;
}
</style>