<template>
	<div>
		<v-app-bar app v-if="!$vuetify.breakpoint.mobile">
			<v-tabs>
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
			<v-row>
				<v-switch :v-model="isDarkTheme" @click="toggleTheme" color="primary" />
			</v-row>
		</v-app-bar>
		<v-app-bar app v-else>
			<v-row align="center">
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

						<v-divider></v-divider>
						<v-subheader>Actions</v-subheader>
						<v-list-item @click="toggleTheme">
							<v-list-item-icon>
								<v-icon>mdi-theme-light-dark</v-icon>
							</v-list-item-icon>
							<v-list-item-title>Toggle Theme</v-list-item-title>
						</v-list-item>
					</v-list>
				</v-menu>
			</v-row>
		</v-app-bar>
	</div>
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

