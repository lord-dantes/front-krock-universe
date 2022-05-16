<template>
  <v-app-bar
    dark
    height="45"
    app
    color="grey lighten-3"
    class="header grey--text text--darken-2 no-print"
  >
    <v-app-bar-nav-icon
      v-if="isUserAuth"
      class="ml-1"
      style="width: 36px; height: 36px; color: #616161"
      @click="$emit('toggleSidebar')"
    />
    <router-link class="subtitle-2 text-decoration-none black--text" to="/universities">Krock.Universe | {{ $route.name }}</router-link>
    <v-spacer />
    <v-btn v-if="!isUserAuth" small color="white" class="mr-2">
      <router-link class="subtitle-2 text-decoration-none black--text" to="/login">Login to Krock</router-link>
    </v-btn>
    <v-btn v-if="!isUserAuth" small color="white">
      <router-link class="subtitle-2 text-decoration-none black--text" to="/register">Register to Krock</router-link>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: 'NavBar',
  props: ['is-user-auth'],
}
</script>