<template>
	<v-app-bar app>
		<v-tabs v-if="!$vuetify.breakpoint.mobile">
			<v-tab
				v-for="route in routes"
				:key="route.title"
				text
				outlined
				nuxt
				:to="{ name: route.name }"
			>
				<v-icon dense>{{ route.icon }}</v-icon>
				<span>{{ route.title }}</span>
			</v-tab>
		</v-tabs>
		<v-row align="center" v-else>
			<v-btn text nuxt :to="{ name: 'index' }">
				<v-icon dense>mdi-home</v-icon>
				<span>Home</span>
			</v-btn>

			<v-spacer />

			<v-menu bottom right open-on-hover offset-y>
				<template v-slot:activator="{ on, attrs }">
					<v-btn icon v-bind="attrs" v-on="on">
						<v-icon dense>mdi-dots-vertical</v-icon>
					</v-btn>
				</template>

				<v-list>
					<v-list-item
						v-for="route in routes"
						:key="route.to"
						nuxt
						:to="{ name: route.name }"
					>
						<v-icon dense>{{ route.icon }}</v-icon>
						<v-list-item-title>
							{{ route.title }}
						</v-list-item-title>
					</v-list-item>
				</v-list>
			</v-menu>
		</v-row>
	</v-app-bar>
</template>

<script>
export default {
	data() {
		return {
			routes: [
				{
					title: 'Home',
					name: 'index',
					to: '/',
					icon: 'mdi-home',
				},
				{
					title: 'Blog',
					name: 'blog',
					to: '/blog',
					icon: 'mdi-newspaper',
				},
			],
		}
	},
}
</script>

<style>
</style>