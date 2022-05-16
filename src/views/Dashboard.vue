<template>
  <v-card v-if="myUniversities.length">
    <v-card-subtitle class="pb-1">Ваш список университетов:</v-card-subtitle>
    <ItemsList :dataItems="myUniversities" :deleteItemsMode="true" :deleteItemsFn="deleteMyUniversity" />
  </v-card>
  <v-card v-else>
    <v-card-subtitle>Ваш список университетов - пуст.</v-card-subtitle>
  </v-card>
</template>

<script>
import ItemsList from '../components/ItemsList'

export default {
	name: 'Dashboard',
	components: { ItemsList },
	data: () => ({}),
  computed: {
    myUniversities() {
      return this.$store.getters.myUniversities;
    },
  },
  methods: {
    deleteMyUniversity(item) {
      this.$store.commit('deleteMyUniversity', item);
    }
  }
}
</script>

