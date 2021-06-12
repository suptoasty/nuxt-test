<template>
	<v-container fluid fill-height>
		<v-row align="center" justify="center">
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
			<v-col>
				<nuxt-content :document="article" />
			</v-col>
			<v-col>
				<author :author="article.author" v-if="!!article.author" />
			</v-col>
		</v-row>

		<prev-next :next="next" :prev="prev" />
	</v-container>
</template>

<script>
import PrevNext from '~/components/global/PrevNext.vue'
export default {
	components: { PrevNext },
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
		formatDate(date) {
			const options = { year: 'numeric', month: 'long', day: 'numeric' }
			return new Date(date).toLocaleDateString('en', options)
		},
	},
}
</script>

<style>
</style>