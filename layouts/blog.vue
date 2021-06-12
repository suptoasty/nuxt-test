<template>
	<v-app dark>
		<navbar />
		<v-main>
			<v-container>
				<nuxt />
			</v-container>
		</v-main>
	</v-app>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
export default {
	components: { Navbar },
}
</script>

<style>
</style>