<template>
	<span>
		<!-- <v-autocomplete
			v-model="select"
			:loading="loading"
			:items="articles"
			:search-input.sync="searchQuery"
			item-text="title"
			solo
		>
			<v-list-item slot="prepend-item">
				{{ articles.length }} Items Found
			</v-list-item>
			<template slot="selection" slot-scope="{ item }">
				{{ item }}
			</template>
		</v-autocomplete> -->
		<v-text-field
			v-model="searchQuery"
			type="search"
			hide-details
			solo
			label="Search Blog"
			class="mb-0 pb-0"
			ref="blogSearchField"
		>
		</v-text-field>
		<v-card
			v-if="!!articles.length && !!searchQuery"
			style="position: absolute; z-index: 10"
			v-resize="resize"
			:width="resultsBoxWidth"
			:height="
				clamp(articles.length * resultsItemHeight, 0, resultsBoxMaxHeight)
			"
		>
			<v-virtual-scroll
				bench="10"
				:height="
					clamp(articles.length * resultsItemHeight, 0, resultsBoxMaxHeight)
				"
				:item-height="resultsItemHeight"
				:items="articles"
			>
				<template v-slot:default="{ item }">
					<v-list-item
						v-if="!!item"
						:key="item.slug"
						:to="{ name: 'blog-slug', params: { slug: item.slug } }"
					>
						<v-list-item-content>
							<v-list-item-title>{{ item.title }}</v-list-item-title>
							<v-list-item-subtitle>
								{{ truncateText(item.description, 10) }}
							</v-list-item-subtitle>
						</v-list-item-content>
					</v-list-item>
				</template>
			</v-virtual-scroll>
		</v-card>
	</span>
</template>

<script>
import { truncateText, clamp } from '@/utils/blog'

export default {
	data() {
		return {
			loading: false,
			searchQuery: '',
			articles: [],
			select: null,
			resultsBoxWidth: '100%',
			resultsItemHeight: 50,
			resultsBoxMaxHeight: 600,
		}
	},
	methods: {
		truncateText,
		clamp,
		resize() {
			this.resultsBoxWidth = this.$refs.blogSearchField.$el.clientWidth
		},
	},
	watch: {
		async searchQuery(searchQuery) {
			this.loading = true
			if (!searchQuery) {
				this.articles = []
				this.loading = false
				return
			}

			this.articles = await this.$content('articles')
				// .limit(6)
				.search(searchQuery)
				.fetch()

			this.loading = false
		},
	},
}
</script>

