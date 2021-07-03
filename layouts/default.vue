<template>
	<v-app dark>
		<!-- <navbar /> -->
		<v-main>
			<v-card
				id="background-card"
				class="v-card--glass v-card-background"
				style="height: 100%; width: 100%; position: absolute"
			></v-card>
			<v-container fluid>
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