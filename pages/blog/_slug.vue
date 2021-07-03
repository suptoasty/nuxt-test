<template>
	<div class="unblurText">
		<navbar-card class="pa-4" />
		<v-container fluid>
			<v-row align-content="center" align="center" justify="center">
				<v-col lg="12" md="12" sm="12" xs="12">
					<h1>
						{{ article.title }}
					</h1>
					<span>
						<h4>{{ article.description }}</h4>
						<h4>Created On: {{ formatDate(article.createdAt) }}</h4>
					</span>
				</v-col>
			</v-row>
			<v-divider class="ma-1"></v-divider>
			<v-container>
				<v-row justify="center">
					<v-col cols="12">
						<nuxt-content :document="article" />
					</v-col>
				</v-row>
			</v-container>
			<v-spacer></v-spacer>
			<v-divider class="ma-1"></v-divider>
			<v-row justify="center" align="center" align-content="center">
				<v-col cols="6">
					<author :author="article.author" v-if="!!article.author" />
				</v-col>
				<v-col cols="6">
					<prev-next :next="next" :prev="prev" />
				</v-col>
			</v-row>
		</v-container>
	</div>
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

<style lang="scss" scoped>
@import '~/assets/sass/variables.scss';
@import '~/assets/sass/overrides.scss';
</style>