<template>
	<v-app dark>
		<navbar />
		<v-main>
			<v-container fluid>
				<nuxt />
			</v-container>
		</v-main>
	</v-app>
</template>

<script>
export default {
	mounted() {
		this.$vuetify.theme.dark = this.$store.state.darkTheme
	},
}
</script>