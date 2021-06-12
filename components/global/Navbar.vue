<template>
	<v-app-bar app>
		<div v-for="item in items" :key="item.title">
			<v-btn text outlined nuxt :to="{ name: item.name }">{{
				item.title
			}}</v-btn>
		</div>
	</v-app-bar>
</template>

<script>
export default {
	data() {
		return {
			items: [
				{
					title: 'Home',
					name: 'index',
					to: '/',
				},
				{
					title: 'Blog',
					name: 'blog',
					to: '/blog',
				},
			],
		}
	},
}
</script>

<style>
</style>