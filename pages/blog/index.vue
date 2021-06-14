<template>
	<v-container>
		<v-row>
			<v-col xl="12" lg="12" md="12" sm="12" xs="12" class="ma-2 pa-2">
				<search-bar />
			</v-col>
			<v-col v-for="article in articles" :key="article.slug">
				<devto-card
					v-if="!!article.id"
					:id="article.id"
					:title="article.title"
					:description="article.description"
				/>
				<blog-card
					v-else
					:route="article.slug"
					:title="article.title"
					:description="article.description"
				/>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import { toPost } from '@/utils/devto'

export default {
	// layout: 'blog',
	async asyncData({ $content, $axios }) {
		let articles = await $content('articles')
			.without(['body', 'dir', 'toc'])
			.sortBy('createdAt', 'desc')
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
		createPost() {
			console.log('figure out dynamic in ssg???')
		},
	},
}
</script>
