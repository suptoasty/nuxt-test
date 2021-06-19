<template>
	<v-row>
		<v-card class="v-card--glass v-card-background">
			<v-container fluid>
				<v-row class="pa-4">
					<navbar-card class="pa-4" />
					<v-col cols="12">
						<h1>Personal Projects</h1>
					</v-col>
					<v-col>
						<search-bar />
					</v-col>
				</v-row>
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
							<devto-card
								v-if="!!article.id"
								:article="article"
								:id="article.id"
								:title="article.title"
								:description="article.description"
							/>
							<blog-card
								v-else
								:article="article"
								:route="article.slug"
								:title="article.title"
								:description="article.description"
							/>
						</v-lazy>
					</v-col>
				</v-row>
			</v-container>
		</v-card>
	</v-row>
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
			// articles = articles.concat(
			// 	devtoArticles.map((article) => toPost(article))
			// )
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

<style lang='scss'>
@import '@/assets/sass/overrides.scss';
</style>