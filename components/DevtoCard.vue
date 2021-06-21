<template>
	<v-card
		:to="{ name: 'blog-devto-slug', params: { slug: id } }"
		nuxt
		outlined
		tile
		min-width="300"
		min-height="300"
	>
		<v-img
			max-height="25%"
			:src="article.image"
			v-if="article && article.image"
		></v-img>
		<v-card-title>{{ title }}</v-card-title>
		<v-card-subtitle>{{ description }}</v-card-subtitle>
	</v-card>
</template>

<script>
export default {
	props: {
		article: {
			type: Object,
			default: () => null,
		},
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


<style lang="scss" scoped>
.v-card.v-sheet {
	border-radius: 1em;
}
</style>