<template>
	<div>
		<v-text-field
			v-model="searchQuery"
			type="search"
			solo
			label="Search Blog"
		/>
		<v-list dense v-if="!!articles.length">
			<template v-for="article of articles">
				<v-list-item
					:key="article.slug"
					:to="{ name: 'blog-slug', params: { slug: article.slug } }"
				>
					<v-list-item-content>
						<v-list-item-title>{{ article.title }}</v-list-item-title>
						<v-list-item-subtitle>
							{{ truncateText(article.description, 10) }}
						</v-list-item-subtitle>
					</v-list-item-content>
				</v-list-item>
			</template>
		</v-list>
	</div>
</template>

<script>
import { truncateText } from '@/utils/blog'

export default {
	data() {
		return {
			searchQuery: '',
			articles: [],
		}
	},
	methods: {
		truncateText,
	},
	watch: {
		async searchQuery(searchQuery) {
			if (!searchQuery) {
				this.articles = []
				return
			}

			this.articles = await this.$content('articles')
				.limit(6)
				.search(searchQuery)
				.fetch()
		},
	},
}
</script>

