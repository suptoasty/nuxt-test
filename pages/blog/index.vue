<template>
	<v-row>
		<v-card
			v-for="article in articles"
			:key="article.slug"
			:to="'blog/' + article.slug"
			nuxt
		>
			<v-card-title>{{ article.title }}</v-card-title>
			<v-card-subtitle>{{ article.description }}</v-card-subtitle>
		</v-card>
	</v-row>
</template>

<script>
export default {
	layout: 'blog',

	async asyncData({ $content, params }) {
		const articles = await $content('articles').fetch()
		return { articles }
	},
}
</script>

<style>
</style>