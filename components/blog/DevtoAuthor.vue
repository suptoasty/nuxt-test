<template>
	<nuxt-link :to="`/blog/author/${author.name}`">
		<v-avatar>
			<v-img :src="author.image" :alt="author.name + 'image'" />
		</v-avatar>
		<div>
			<h4>Author</h4>
			<p>{{ author.name }}</p>
			<p>{{ author.bio }}</p>
		</div>
	</nuxt-link>
</template>

<script>
export default {
	props: {
		author: {
			type: Object,
			required: true,
		},
	},
}
</script>

