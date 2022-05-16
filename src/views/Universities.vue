<template>
	<v-card>
		<v-virtual-scroll
			:items="allUniversities"
			height="800px"
			item-height="100"
		>
			<template #default="{ item }">
				<ItemList :dataItem="item" />
			</template>
		</v-virtual-scroll>
	</v-card>
</template>

<script>
import ItemList from '../components/ItemList'

export default {
	name: 'Universities',
	components: { ItemList },
	data: () => ({}),
	methods: {},
	computed: {
		allUniversities() {
			return this.$store.getters.allUniversities;
		}
	}
}
</script>