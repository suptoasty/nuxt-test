<template>
	<div>
		<h1>Author: {{ articles[0].author.name }}</h1>
		<p>Bio: {{ articles[0].author.bio }}</p>
		<h3>Here are a list of articles by {{ articles[0].author.name }}</h3>
		<ul>
			<li v-for="article in articles" :key="article.slug">
				<nuxt-link :to="{ name: 'blog-slug', params: { slug: article.slug } }">
					<img src="article.image" alt="article.alt" />
					<div>
						<h2>{{ article.title }}</h2>
						<p>{{ article.description }}</p>
						<p>{{ formatDate(article.updatedAt) }}</p>
					</div>
				</nuxt-link>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	async asyncData({ $content, params }) {
		const articles = await $content('articles', params.slug)
			.where({
				'author.name': {
					$regex: [params.author, 'i'],
				},
			})
			.without('body')
			.sortBy('createdAt', 'asc')
			.fetch()

		return { articles }
	},
	methods: {
		formatDate(date) {
			const options = { year: 'numeric', month: 'long', day: 'numeric' }
			return new Date(date).toLocaleDateString('en', options)
		},
	},
}
</script>

<style>
</style>