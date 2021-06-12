<template>
	<v-app-bar app>
		<div v-for="item in items" :key="item.title">
			<v-btn text outlined nuxt :to="item.to">{{ item.title }}</v-btn>
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
					to: '/',
				},
				{
					title: 'Blog',
					to: 'blog',
				},
			],
		}
	},
}
</script>

<style>
</style>