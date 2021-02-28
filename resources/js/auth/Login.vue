<template>
  <div>
    <div v-if="!isLoggedIn">
    <div class="main row align-items-center">
      <div class="w-50 mr-auto ml-auto justify-content-center">
        <div class="card card-body pt-4 enterFormLoginBlock">
          <form v-if="!loading">
            <h4 class="enterModalText pb-2">Вход</h4>
            <div class="form-group">
              <label for="login">Логин</label>
              <input
                type="text"
                name="login"
                class="form-control"
                v-model="login"
                :class="[{'is-invalid': errorFor('login')}]"
              />
              <v-errors :errors="errorFor('login')"></v-errors>
            </div>

            <div class="form-group">
              <label for="password">Пароль</label>
              <input
                type="password"
                name="password"
                class="form-control"
                v-model="password"
                :class="[{'is-invalid': errorFor('password')}]"
              />
              <v-errors :errors="errorFor('password')"></v-errors>
            </div>

            <div class="form-group">
              <div class="enterFormLoginBlock">
                <div>
                  <input type="checkbox" style="height:40px;margin-top:-8px;" name="remember" v-model="remember" class="politics" />
                  <span>Оставаться в системе</span>
                </div>
              </div>
            </div>

            <button
              type="submit"
              class="mainButton mr-auto ml-auto mt-4 mb-4"
              :disabled="loading"
              @click.prevent="loginin"
            >Войти</button>

            <hr />

            <div>
              Еще нет аккаунта?
              <router-link :to="{name: 'registration'}" class="font-weight-bold">Регистрация</router-link>
            </div>

            <div>
              Забыли пароль?
              <router-link
                :to="{name: 'restore_password'}"
                class="font-weight-bold"
              >Восстановить пароль</router-link>
            </div>
          </form>
            <div class="text-center mb-4" v-if="loading && !errors">
              <img class="load" :src="imgLoading" alt="Загрузка" />
              <div>Вход...</div>
            </div>
        </div>
      </div>
    </div>

    </div>
  
  </div>
</template>

<script>
import validationErrors from "../shared/mixins/validationErrors";
import { userRedirectTo,getCookie, isLoggedIn } from "./../shared/utils/auth";
import { mapState } from "vuex";
import { imgLoading } from "../shared/utils/variables";
import showPassBind from "../shared/mixins/showPassBind";

export default {
  mixins: [validationErrors,showPassBind],
  data() {
    return {
      imgLoading: imgLoading,
      login: null,
      password: null,
      remember: null,
      loading: false,
      isLoggedIn: isLoggedIn()
    };
  },
  computed: {
    ...mapState({
      user: "user"
    })
  },
  methods: {
    async loginin() {
      this.loading = true;
      this.errors = null;
      try {
        await axios.get("/sanctum/csrf-cookie");
        await axios.post("/login", {
          name: this.login,
          password: this.password,
          remember: this.remember
        });
        this.$store.dispatch("loadUser").then(() => {
          this.$router.push(userRedirectTo());
        });
      } catch (error) {
        this.errors = error.response && error.response.data.errors;
      }
      this.loading = false;
    }
  },
  mounted(){
    this.bindPassInpuntsAndAddBlock();
  }
};
</script>