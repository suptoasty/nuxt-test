<template>
	<v-row justify="center" align="center">
		<v-col xl="12" lg="12" md="12" sm="12" xs="12">
			<search-bar />
		</v-col>
		<v-col>
			<nuxt-content :document="content" />
		</v-col>
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
