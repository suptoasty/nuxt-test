<template>
	<v-app dark>
		<!-- <navbar /> -->
		<v-main>
			<v-container fluid style="height: 100%">
				<nuxt />
			</v-container>
		</v-main>
	</v-app>
</template>

<script>
export default {
	beforeMount() {
		this.$vuetify.theme.dark = this.$store.state.darkTheme
	},
}
</script>


<style lang="scss" scoped>
@import '~/assets/sass/variables.scss';
@import '~/assets/sass/overrides.scss';
</style>