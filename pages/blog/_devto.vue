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
				<div v-html="$md.render(article.body_markdown)"></div>
			</v-col>
			<v-col>
				<author :author="article.author" v-if="!!article.author" />
			</v-col>
		</v-row>

		<!-- <prev-next :next="next" :prev="prev" /> -->
	</v-container>
</template>

<script>
import { toPost, formatDate } from '@/utils/devto'

export default {
	async asyncData({ $axios, params }) {
		const article = toPost(
			await $axios.$get(`https://dev.to/api/articles/${params.devto}`)
		)

		return { article }
	},
	methods: {
		formatDate,
	},
}
</script>
