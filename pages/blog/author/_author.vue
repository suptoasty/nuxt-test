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
import { toPost, formatDate } from '@/utils/devto'

export default {
	async asyncData({ $content, $axios, params }) {
		let articles = await $content('articles', params.slug)
			.where({
				'author.name': {
					$regex: [params.author, 'i'],
				},
			})
			.without('body')
			.sortBy('createdAt', 'asc')
			.fetch()

		let devtoArticles = await $axios.$get(
			'https://dev.to/api/articles/?username=suptoasty'
		)

		if (devtoArticles.length > 0) {
			articles = articles.concat(
				devtoArticles.map((article) => toPost(article))
			)
		}

		return { articles }
	},
	methods: {
		formatDate,
	},
}
</script>

<style>
</style>