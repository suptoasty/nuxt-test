<template>
	<v-row justify="center" align="center">
		<nuxt-content :document="content" />
	</v-row>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
	async asyncData({ $content, params }) {
		const content = await $content('home').fetch()
		return { content }
	},
	components: {
		Logo,
		VuetifyLogo,
	},
}
</script>
