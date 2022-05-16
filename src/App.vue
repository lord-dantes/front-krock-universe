<template>
  <v-app>
    <Navigation
      v-if="userAuth"
      :user-email="userEmail"
      :sidebar-mode="sidebarMode"
    />

    <Navbar
      :is-user-auth="userAuth"
      @toggleSidebar="toggleSidebar"
    />

    <v-main class="grey lighten-2">
      <v-container fluid>
        <router-view :key="$route.fullPath" />
      </v-container>
    </v-main>

    <v-footer
      app
      inset
      color="grey lighten-3"
      class="grey--text text--darken-2 no-print"
    >
      &nbsp;&copy; Krock.Universe 2022
    </v-footer>
  </v-app>
</template>

<script>
import Navigation from './components/Navigation'
import Navbar from './components/Navbar'

import { mapGetters } from 'vuex';

export default {
  name: 'App',
  components: { Navigation, Navbar },
  data: () => ({
    sidebarMode: false,
  }),
  computed: {
    ...mapGetters([
      'userEmail',
      'userAuth'
    ])
  },
  methods: {
    toggleSidebar() {
      this.sidebarMode = !this.sidebarMode;
    }
  },
  created() {
    // this.$store.dispatch('isUserAuth');
    this.$store.dispatch('getUniversitiesFromUkraine');
    this.$store.dispatch('getMyUniversities');
  }
};
</script>
