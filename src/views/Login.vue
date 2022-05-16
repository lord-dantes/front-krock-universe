<template>
  <section class="d-flex justify-center">
    <v-card width="500px">
      <v-form
        v-if="!userLoggedIn"
        v-model="formValid"
        ref="form"
      >
        <v-container>
          <v-row class="d-flex flex-column">
            <v-col
              cols="12"
              md="12"
              class="pb-0"
            >
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                color="green"
                required
              ></v-text-field>
            </v-col>
            <v-col
              cols="12"
              md="12"
              class="pt-0 pb-0"
            >
              <v-text-field
                v-model="password"
                :rules="passwordRules"
                label="Пароль"
                color="green"
                required
              ></v-text-field>
            </v-col>
            <v-col>
              <v-btn
                color="success"
                class="mr-4"
                @click="validate"
              >
                Авторизация
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-card>
  </section>
</template>

<script>
export default {
  name: 'Login',
  data: () => ({
      formValid: false,
      email: '',
      emailRules: [
        v => !!v || 'Извините, но e-mail это обязательное поле.',
        v => /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(v) || 'Извините, ваш адрес e-mail, введён неверно.'
      ],
      password: '',
      passwordRules: [
        v => v.length > 6 || `Извините, ваш пароль должен быть более 6-и символов. ${v.length}/6.`
      ],
  }),
  methods: {
    validate() {
      this.$refs.form.validate();
      if (!this.formValid) {
        return;
      }
      this.login();
    },
    login() {
      this.$store.commit('setUserEmail', this.email);
      this.$store.commit('setUserPassword', this.password);
      this.name ? this.$store.commit('setUserName', this.name) : false;
      this.phone ? this.$store.commit('setUserPhone', this.phone) : false;
      this.$store.commit('setUserAuth', true);
      this.$router.push('/')
    },
  },
  computed: {
    userLoggedIn () {
      return this.$store.getters.userAuth
    }
  },
}
</script>