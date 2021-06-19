<template>
	<v-card
		:to="{ name: 'blog-slug', params: { slug: route } }"
		nuxt
		min-width="250px"
		:min-height="'calc(250px + ' + minImageHeight + ')'"
		:max-height="'calc(50vh + ' + maxImageHeight + ')'"
		:max-width="$vuetify.breakpoint.mdAndUp ? '50vw' : ''"
		ref="card"
	>
		<v-img
			:max-height="maxImageHeight"
			:src="article.image"
			v-if="article && article.image"
		></v-img>
		<v-card-title>{{ title }}</v-card-title>
		<v-card-subtitle>
			{{ truncateText(article.description, 15) }}
		</v-card-subtitle>
	</v-card>
</template>

<script>
import { truncateText } from '@/utils/blog.js'

export default {
	props: {
		article: {
			type: Object,
			default: () => null,
		},
		title: {
			type: String,
			default: '',
		},
		subtitle: {
			type: String,
			default: '',
		},
		description: {
			type: String,
			default: '',
		},
		route: {
			type: String,
			default: '',
		},
	},
	data() {
		return {
			minImageHeight: '100px',
			maxImageHeight: '300px',
		}
	},
	methods: {
		truncateText,
	},
}
</script>

<style lang="scss" scoped>
.v-card.v-sheet {
	border-radius: 1em !important;
}
</style>