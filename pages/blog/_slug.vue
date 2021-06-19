<template>
	<v-row class="height: 100% !important">
		<v-card
			class="v-card--glass v-card-background"
			style="height: 100% !important"
		>
			<v-container fluid>
				<v-row class="ma-1">
					<navbar-card class="pa-4" />
				</v-row>
				<v-row align-content="center" align="center" justify="center">
					<v-col lg="12" md="12" sm="12" xs="12">
						<h1>
							{{ article.title }}
						</h1>
						<span>
							<h4>{{ article.description }}</h4>
							<h4>Created On: {{ formatDate(article.createdAt) }}</h4>
						</span>
						<v-divider inset />
					</v-col>
				</v-row>
				<v-row justify="center">
					<v-col cols="12">
						<nuxt-content :document="article" />
					</v-col>
				</v-row>
				<v-row justify="center" align="center" align-content="center">
					<v-col cols="12">
						<author :author="article.author" v-if="!!article.author" />
					</v-col>
				</v-row>

				<!-- <v-row>
					<prev-next :next="next" :prev="prev" />
				</v-row> -->
			</v-container>
		</v-card>
	</v-row>
</template>

<script>
import { formatDate } from '@/utils/devto'

export default {
	async asyncData({ $content, params }) {
		const article = await $content('articles', params.slug).fetch()

		const [prev, next] = await $content('articles')
			.only(['title', 'slug'])
			.sortBy('createdAt', 'asc')
			.surround(params.slug)
			.fetch()

		return { article, prev, next }
	},
	methods: {
		formatDate,
	},
}
</script>

<style lang='scss'>
@import '@/assets/sass/overrides.scss';
</style>