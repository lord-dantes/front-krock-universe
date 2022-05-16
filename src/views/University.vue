<template>
  <v-card v-if="dataItem || currentUniversity">
    <v-card-title>Университет: {{ getTitle() }}</v-card-title>
    <v-card-subtitle>Страна: {{ getCountry() }}</v-card-subtitle>
    <v-card-text>
      Веб-ресурсы университета: 
      <v-list dense>
        <v-list-item
          v-for="(item, key) in getWebsiteLinks()"
          dense
          class="pa-0"
          :key="key"
        >
          <a :href="item" target="_blank">{{ item }}</a>
        </v-list-item>
      </v-list>
    </v-card-text>
    <v-img></v-img>
  </v-card>
</template>
<script>
export default {
  name: 'University',
  props: ['dataItem'],
  data: () => ({}),
  computed: {
    currentUniversity() {
      return this.$store.getters.allUniversities.filter(university => university.url === this.$route.params.name)[0]
    }
  },
  methods: {
    getTitle() {
      return this.dataItem?.name || this.currentUniversity?.name || 'Название университета';
    },
    getCountry() {
      return this.dataItem?.country || this.currentUniversity?.country || 'Страна университета';
    },
    getWebsiteLinks() {
      return this.dataItem?.web_pages || this.currentUniversity?.web_pages || ['Веб-ресурсы университета'];
    },
  },
}
</script>