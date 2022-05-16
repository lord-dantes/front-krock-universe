<template>
  <v-list
    dense
    light
    class="pa-0"
  >
    <template v-if="deleteItemsMode">
      <v-list-item
        v-for="(item, key) in dataItems" :key="key"
        dense
        class="pa-0 pr-1"
      >
        <v-list-item-title class="pa-0">
          <router-link
            :to="{ name: 'University', params: { name: item.url, dataItem: item }}"
            class="pl-4 pb-3 pt-3 d-flex text-decoration-none caption black--text font-weight-medium"
          >
            {{ item.name }}
          </router-link>
        </v-list-item-title>
        <v-spacer />
        <v-btn icon @click="deleteItemsFn(item)">
          <v-icon small>mdi-close</v-icon>
        </v-btn>
      </v-list-item>
    </template>
    <template v-else>
      <v-list-item
        v-for="(item, key) in dataItems" :key="key"
        :to="{ name: 'University', params: { name: item.url, dataItem: item }}"
        dense
        class="pl-4 pb-0 pt-0"
      >
        <v-list-item-title class="caption">
          {{ item.name }}
        </v-list-item-title>
      </v-list-item>
    </template>
  </v-list>
</template>

<script>
export default {
  name: 'ItemsList',
  props: {
    dataItems: {
      type: Array,
      default() { return [] }
    },
    deleteItemsMode: {
      type: Boolean,
      default: false,
    },
    deleteItemsFn: {
      type: Function,
      default() { },
    }
  },
  data: () => ({}),
  methods: {}
}
</script>