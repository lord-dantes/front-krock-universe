<template>
  <v-navigation-drawer
    v-model="sidebarMode"
    fixed
    app
    class="no-print"
  >
    <v-list subheader class="py-1">
      <v-list-item>
        <v-list-item-action>
          <v-icon class="hover-icon" @click="logout">
            mdi-exit-to-app
          </v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title class="title-list">
            {{ userEmail }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-divider />
    <v-list
      dense
      light
      class="pt-0"
    >
      <v-list-item
        to="/universities"
      >
        <v-list-item-title class="pl-4">Все университеты Украины</v-list-item-title>
      </v-list-item>
      <v-list-item
        @click="addRandomUniversity"
      >
        <v-list-item-title class="pl-4">Добавить университет</v-list-item-title>
      </v-list-item>
      <v-list-item
        to="/"
      >
        <v-list-item-title class="pl-4">Мои университеты</v-list-item-title>
      </v-list-item>
      <ItemsList v-if="myUniversities.length" :dataItems="myUniversities" />
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import ItemsList from './ItemsList';

export default {
  name: 'Navigation',
  props: ['sidebar-mode', 'user-email'],
  components: { ItemsList },
  data: () => ({}),
  computed: {
    myUniversities() {
      return this.$store.getters.myUniversities;
    }
  },
  methods: {
    async addRandomUniversity() {
      let randomCount = (Math.random() * (70 - 1) + 1).toFixed(0);
      const universities = this.$store.getters.allUniversities;
      const randomUniversity = universities.slice(randomCount, ++randomCount);
      this.$store.commit('addMyUniversity', randomUniversity[0]);
    },
    logout() {
      this.$store.commit('logout');
    }
  }
}
</script>