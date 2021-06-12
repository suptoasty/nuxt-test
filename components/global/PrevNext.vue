<template>
	<v-row>
		<v-btn
			nuxt
			v-if="prev"
			:to="{ name: 'blog-slug', params: { slug: prev.slug } }"
		>
			{{ prev.title }}
		</v-btn>
		<span v-else>&nbsp;</span>
		<v-btn
			nuxt
			v-if="next"
			:to="{ name: 'blog-slug', params: { slug: next.slug } }"
		>
			{{ next.title }}
		</v-btn>
	</v-row>
</template>

<script>
export default {
	props: {
		prev: {
			type: Object,
			default: () => null,
		},
		next: {
			type: Object,
			default: () => null,
		},
	},
}
</script>

<style>
</style>