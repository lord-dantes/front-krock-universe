<template>
  <section class="d-flex justify-center">
    <v-card
      width="500px"
    >
      <v-form
        v-model="formValid"
        v-if="!userLoggedIn"
        ref="form"
      >
        <v-container>
          <v-row class="d-flex flex-column">
            <v-col
              cols="12"
              md="12"
              class="pb-0 pt-0"
            >
              <v-text-field
                v-model="name"
                label="Имя"
                color="green"
              />
            </v-col>

            <v-col
              cols="12"
              md="12"
              class="pb-0 pt-0"
            >
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail*"
                color="green"
                required
              />
            </v-col>
            <v-col
              cols="12"
              md="12"
              class="pb-0 pt-0"
            >
              <v-text-field
                v-model="phone"
                :rules="phoneRules"
                v-mask="'(###) ## ## ###'"
                label="Мобильный телефон"
                color="green"
                class=""
              />
            </v-col>
            <v-col
              cols="12"
              md="12"
              class="pb-0 pt-0"
            >
              <v-text-field
                v-model="password"
                :rules="passwordRules"
                label="Пароль*"
                type="password"
                color="green"
                required
              />
            </v-col>
            <v-col
              cols="12"
              md="12"
              class="pb-0 pt-0"
            >
              <v-checkbox
                v-model="checkbox"
                :rules="checkboxRules"
                label="Я ничего не читал но со всем согласен."
                color="green"
                class="mt-0"
                required
              />
            </v-col>
            <v-col>
              <v-btn
                color="success"
                class="mr-4"
                @click="validate"
              >
                Регистрация
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
  name: 'Register',
  data: () => ({
    formValid: false,
    name: '',
    phone: '',
    phoneRules: [
      v => (!v.length || v.length == 15) || 'Извините, ваш номер неправильно набран.'
    ],
    email: '',
    emailRules: [
      v => !!v || 'Извините, но e-mail это обязательное поле.',
      v => /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(v) || 'Извините, ваш адрес e-mail, введён неверно.'
    ],
    password: '',
    passwordRules: [
      v => v.length > 6 || `Извините, ваш пароль должен быть более 6-и символов. ${v.length}/6.`
    ],
    checkbox: false,
    checkboxRules: [
      v => !!v || 'Извините, но чтобы продолжить, отметьте что вы со всем согласны.'
    ],
  }),
  methods: {
    validate() {
      this.$refs.form.validate();
      if (!this.formValid) {
        return;
      }
      this.registerUser();
    },
    registerUser() {
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