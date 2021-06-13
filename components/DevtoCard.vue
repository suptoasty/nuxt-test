<template>
	<v-card
		:to="{ name: 'blog-devto', params: { devto: id } }"
		nuxt
		outlined
		tile
		min-width="300"
		min-height="300"
	>
		<v-card-title>{{ title }}</v-card-title>
		<v-card-subtitle>{{ description }}</v-card-subtitle>
	</v-card>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: '',
		},
		subtitle: {
			type: String,
			default: '',
		},
		id: {
			type: Number,
			default: null,
		},
		description: {
			type: String,
			default: '',
		},
	},
}
</script>

<style>
</style>