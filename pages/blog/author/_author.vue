<template>
	<div class="unblurText">
		<navbar-card class="pa-4" />
		<v-col cols="12">
			<h1>Author: {{ articles[0].author.name }}</h1>
			<v-avatar rounded>
				<v-img :src="articles[0].author.image"></v-img>
			</v-avatar>
			<p>Bio: {{ articles[0].author.bio }}</p>
			<h3>Here are a list of articles by {{ articles[0].author.name }}</h3>
		</v-col>
		<v-col>
			<search-bar />
		</v-col>
		<v-row justify="center" align="center" align-content="center">
			<v-col
				align-self="center"
				xl="2"
				lg="4"
				md="6"
				sm="12"
				xs="12"
				v-for="article in articles"
				:key="article.slug"
			>
				<v-lazy>
					<!-- <devto-card
						v-if="!!article.id"
						:article="article"
						:id="article.id"
						:title="article.title"
						:description="article.description"
					/> -->
					<blog-card
						:article="article"
						:route="article.slug"
						:title="article.title"
						:description="article.description"
					/>
				</v-lazy>
			</v-col>
		</v-row>
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
			// articles = articles.concat(
			// 	devtoArticles.map((article) => toPost(article))
			// )
		}

		return { articles }
	},
	methods: {
		formatDate,
	},
}
</script>

