<template>
	<v-row class="unblurText">
		<v-row class="pa-2" v-if="!$vuetify.breakpoint.mobile">
			<v-btn icon nuxt :to="{ name: 'index' }" class="mr-2">
				<v-icon large>mdi-home</v-icon>
			</v-btn>
			<div>
				<h2>Jason Lonsinger</h2>
				<h5 class="subtitle-2">- Software Developer</h5>
			</div>
			<v-spacer />

			<v-btn
				v-for="route in routes"
				:key="route.to"
				color="primary"
				nuxt
				text
				tile
				:to="{ name: route.name }"
			>
				{{ route.title }}
			</v-btn>
		</v-row>
		<v-row class="pa-2" v-else>
			<v-btn icon nuxt :to="{ name: 'index' }" class="mr-2">
				<v-icon large>mdi-home</v-icon>
			</v-btn>
			<div>
				<h2>Jason Lonsinger</h2>
				<h5 class="subtitle-2">- Software Developer</h5>
			</div>
			<v-spacer />

			<v-menu bottom right offset-y>
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
						<v-icon dense class="mr-1">{{ route.icon }}</v-icon>
						<v-list-item-title>
							{{ route.title }}
						</v-list-item-title>
					</v-list-item>

					<v-divider></v-divider>
					<v-subheader>Actions</v-subheader>
					<v-list-item @click="toggleTheme">
						<v-list-item-icon class="mr-0">
							<v-icon>mdi-theme-light-dark</v-icon>
						</v-list-item-icon>
						<v-list-item-title>Toggle Theme</v-list-item-title>
					</v-list-item>
				</v-list>
			</v-menu>
		</v-row>
	</v-row>
</template>

<script>
export default {
	data() {
		return {
			isDarkTheme: this.$vuetify.theme.dark,
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
	methods: {
		toggleTheme() {
			this.$store.dispatch('toggleTheme')
			this.$vuetify.theme.dark = this.$store.state.darkTheme
		},
	},
}
</script>

<style lang="scss" scoped>
</style>