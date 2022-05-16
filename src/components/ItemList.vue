<template>
  <v-list-item
    :to="{ name: 'University', params: { name: dataItem.url, dataItem: dataItem }}"
    dense
    class="pl-4 pb-0 pt-0"
  >
    <v-list-item-title class="caption">
      {{ dataItem.name }}
    </v-list-item-title>
    <v-spacer></v-spacer>
    <img width="100px" height="90px" :src="dataItem.imageURL" alt="">
  </v-list-item>
</template>

<script>
export default {
  name: 'ItemList',
  props: {
    dataItem: {
      type: Object,
      default() { return {} }
    },
  },
  data: () => ({ }),
  methods: {}
}
</script>