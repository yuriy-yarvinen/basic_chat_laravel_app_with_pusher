<template>
  <div>
    <div v-if="!isLoggedIn">
      <home-header></home-header>

      <div class="main row align-items-center m-0">
        <div class="w-50 mr-auto ml-auto justify-content-center">
          <div class="card card-body pt-4 enterFormLoginBlock">
            <h4 class="enterModalText">Регистрация</h4>
            <form v-if="!loading">
              <div class="form-group">
                <label for="email">Email</label>
                <input
                  type="text"
                  name="email"
                  class="form-control"
                  v-model="user.email"
                  :class="[{ 'is-invalid': errorFor('email') }]"
                />
                <v-errors :errors="errorFor('email')"></v-errors>
              </div>

              <div class="form-group">
                <label for="login">Придумайте Login</label>
                <input
                  type="text"
                  name="name"
                  class="form-control"
                  v-model="user.name"
                  :class="[{ 'is-invalid': errorFor('name') }]"
                />
                <v-errors :errors="errorFor('name')"></v-errors>
              </div>
              <div class="form-group">
                <label for="login">Придумайте Пароль</label>
                <input
                  type="password"
                  name="password"
                  class="form-control"
                  v-model="user.password"
                  :class="[{ 'is-invalid': errorFor('password') }]"
                />
                <v-errors :errors="errorFor('password')"></v-errors>
              </div>


              <button
                type="submit"
                class="m-auto mainButton"
                :disabled="loading"
                @click.prevent="registration"
              >
                <span class="text-white" v-if="loading">Загрузка</span>
                <span class="text-white" v-if="!loading">Регистрация</span>
              </button>

              <hr />

              <div>
                Уже есть аккаунт?
                <router-link :to="{ name: 'login' }" class="font-weight-bold"
                  >Войти</router-link
                >
              </div>
              <div>
                Забыли пароль?
                <router-link :to="{ name: 'restore_password' }" class="font-weight-bold"
                  >Восстановить пароль</router-link
                >
              </div>
            </form>
            <div class="text-center mb-4" v-if="loading && !errors">
              <div>Загрузка...</div>
            </div>
          </div>
        </div>
       
      </div>

      <home-footer></home-footer>
    </div>
  </div>
</template>

<script>
import validationErrors from "../shared/mixins/validationErrors";
import {
  userRedirectTo,
  isLoggedIn,
} from "./../shared/utils/auth";
export default {
  mixins: [validationErrors],
  data() {
    return {
      user: {
        name: null,
        email: null,
        password: null, 
      },
      loading: false,
      isLoggedIn: isLoggedIn(),
    };
  },
  methods: {
    async registration() {
      this.loading = true;
      this.errors = null;

      try {
        const response = await axios.post("/register", this.user);
        if (201 == response.status) {
          this.$store.dispatch("loadUser").then(() => {        
            this.$router.push(userRedirectTo());
          });
        }
      } catch (error) {
        this.errors = error.response && error.response.data.errors;
      }
      this.loading = false;
   
    },

  },
};
</script>
