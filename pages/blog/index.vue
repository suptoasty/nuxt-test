<template>
	<v-container>
		<v-card class="back">
			<v-container fluid>
				<v-row class="pa-4">
					<navbar-card class="pa-4" />
					<v-col cols="12">
						<h1>Personal Projects</h1>
					</v-col>
				</v-row>
			</v-container>
		</v-card>

		<v-card class="back" id="grid">
			<v-container fluid>
				<v-row class="ma-1">
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
		</v-card>
	</v-container>
</template>

<script>
import { toPost } from '@/utils/devto'
import anime from 'animejs'

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
	mounted() {
		anime
			.timeline({})
			.add({
				targets: '#grid',
				translateX: '-20%',
				opacity: [1, 0],
				duration: 0,
			})
			.add({
				targets: '#grid',
				opacity: [0, 1],
				translateX: ['-20%', '0%'],
				duration: 2000,
				delay: 500,
			})
		// anime.timeline({})
		// add({
		// 	targets: '#grid',
		// 	// opacity: 0,
		// 	translateX: '-20%',
		// 	druation: 0,
		// }).add({
		// 	targets: '#grid',
		// 	translateX: ['-20%', '0%'],
		// 	duration: 2000,
		// })
	},
	methods: {
		createPost() {
			console.log('figure out dynamic in ssg???')
		},
	},
}
</script>


<style lang="scss" scoped>
.v-card.v-sheet.back {
	backdrop-filter: blur(10px);
	border-radius: 0.5em;
	border: solid 0px transparent;
}
</style>