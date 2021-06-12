<template>
	<v-row>
		<v-col>
			<h1>
				{{ article.title }}
			</h1>
			<h4>{{ article.description }}</h4>
		</v-col>
		<v-col>
			<nuxt-content :document="article" />
		</v-col>
	</v-row>
</template>

<script>
export default {
	async asyncData({ $content, params }) {
		const article = await $content('articles', params.slug).fetch()
		return { article }
	},
}
</script>

<style>
</style>