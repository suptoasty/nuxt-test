<template>
	<v-card
		:to="{ name: 'blog-slug', params: { slug: route } }"
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
		description: {
			type: String,
			default: '',
		},
		route: {
			type: String,
			default: '',
		},
	},
}
</script>

<style>
</style>