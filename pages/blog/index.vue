<template>
	<v-row>
		<v-col v-for="article in articles" :key="article.slug">
			<blog-card
				:route="article.slug"
				:title="article.title"
				:description="article.description"
			/>
		</v-col>
	</v-row>
</template>

<script>
import BlogCard from '@/components/BlogCard.vue'

export default {
	layout: 'blog',
	async asyncData({ $content }) {
		const articles = await $content('articles')
			.without(['body', 'dir', 'toc'])
			.sortBy('createdAt', 'desc')
			.fetch()

		return { articles }
	},
	components: {
		BlogCard,
	},
}
</script>

<style>
</style>