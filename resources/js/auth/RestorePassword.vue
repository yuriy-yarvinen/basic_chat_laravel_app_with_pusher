<template>
  <div>
    <div v-if="!isLoggedIn">
    <div class="main row align-items-center">

      <div class="w-50 mr-auto ml-auto justify-content-center">
        <div class="card card-body pt-4 enterFormLoginBlock">
          <h4 class="enterModalText pb-2">Восстановление пароля</h4>
          <form v-if="!loading && !restore">
            
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
              <label for="email">Email</label>
              <input
                type="text"
                name="email"
                class="form-control"
                v-model="email"
                :class="[{'is-invalid': errorFor('email')}]"
              />
              <v-errors :errors="errorFor('email')"></v-errors>
            </div>
            <div class="form-group">
              <label for="password">Новый пароль</label>
              <input
                type="text"
                name="password"
                class="form-control"
                v-model="password"
                :class="[{'is-invalid': errorFor('password')}]"
              />
              <v-errors :errors="errorFor('password')"></v-errors>
            </div>

            <button
              type="submit"
              class="mainButton mr-auto ml-auto mt-4 mb-4"
              :disabled="loading || restore"
              @click.prevent="reset_password"
            >Восстановить пароль</button>

            
            <hr />

            <div>
              Уже есть аккаунт?
              <router-link :to="{name: 'login'}" class="font-weight-bold">Войти</router-link>
            </div>

            <div>
              Еще нет аккаунта?
              <router-link :to="{name: 'registration'}" class="font-weight-bold">Регистрация</router-link>
            </div>
          </form>

            <div class="text-center" v-if="restore">{{this.restore}}</div>
            <div v-if="loading" class="text-center mb-4">
          
              <div>Загрузка...</div>
            </div>

        </div>
      </div>
    </div>

    </div>
  
  </div>
</template>

<script>
import validationErrors from "../shared/mixins/validationErrors";
import { isLoggedIn } from "./../shared/utils/auth";

export default {
  mixins: [validationErrors],
  data() {
    return {

      login: null,
      email: null,
      password: null,
      loading: false,
      restore: null,

      isLoggedIn: isLoggedIn()
    };
  },
  methods: {
    async reset_password() {
      this.loading = true;
      this.errors = null;
 
      try {
        const response = await axios.post("/password_reset", {
          email: this.email,
          name: this.login,
     
          password: this.password
        });
        if (200 == response.status && response.data == 1) {
          this.restore =
            "Пароль успешно изменен";
          this.email = null;
          this.name = null;
          this.password = null;
        }
      } catch (error) {
        this.errors = error.response && error.response.data.errors;
      }
      this.loading = false;
    }
  }
};
</script>