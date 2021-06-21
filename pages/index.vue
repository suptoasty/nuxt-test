<template>
	<v-row style="height: 100%">
		<!-- <v-img
			id="img"
			src="https://assets.codepen.io/2621168/abstract.jpg"
			style="
				height: 100%;
				width: 45%;
				position: fixed;
				display: block;
				top: 0;
				left: 0;
			"
			v-if="!$vuetify.breakpoint.mobile"
		/> -->
		<v-card class="v-card--glass v-card-background pa-4">
			<v-container fluid>
				<v-row>
					<v-col>
						<navbar-card />
					</v-col>
				</v-row>
				<v-row>
					<v-col>
						<nuxt-content :document="content" />
					</v-col>
				</v-row>
			</v-container>
		</v-card>
		<!-- <v-card id="card" class="ma-2 pa-2">
			<v-row justify="center" align="center" class="ma-2 pa-2">
				<v-col xl="12" lg="12" md="12" sm="12" xs="12" class="ma-2 pa-2">
					<nuxt-content :document="content" />
				</v-col>
			</v-row>
		</v-card> -->
	</v-row>
</template>

<script>
export default {
	async asyncData({ $content, params }) {
		const content = await $content('home').fetch()
		return { content }
	},
	mounted() {
		if (!this.$vuetify.breakpoint.mobile) {
			this.$anime
				.timeline({
					delay: 0,
					duration: 0,
				})
				.add({
					targets: '#card',
					backdropFilter: 'blur(0px)',
					opacity: 0,
					maxWidth: '50vw',
					translateX: '-20%',
					duration: 0,
				})
				.add({ targets: '#img', translateX: '-20%', opacity: 0, duration: 0 })

			this.$anime
				.timeline({
					delay: 750,
				})

				.add({
					targets: '#img',
					translateX: ['-20%', '0%'],
					opacity: [0, 1],
					duration: 3000,
					easing: 'easeOutExpo',
				})
				.add(
					{
						targets: '#card',
						keyframes: [
							{
								opacity: [0, 1],
								translateX: ['-20%', '0%'],
								duration: 2000,
							},
							{
								backdropFilter: ['blur(0px)', 'blur(4.5px)'],
								maxWidth: ['50vw', '100vw'],
								duration: 1500,
							},
						],
						easing: 'easeOutExpo',
					},
					'-=2500'
				)
		} else {
			this.$anime
				.timeline({
					delay: 0,
					duration: 0,
				})
				.add({
					targets: '#card',
					backdropFilter: 'blur(0px)',
					opacity: 0,
					duration: 0,
				})

			this.$anime
				.timeline({
					easing: 'easeOutExpo',
					delay: 500,
				})
				.add({
					targets: '#card',
					keyframes: [
						{
							opacity: [0, 1],
							duration: 1500,
						},
						{
							backdropFilter: ['blur(0px)', 'blur(4.5px)'],
							duration: 1500,
						},
					],
				})
		}
	},
	methods: {
		lighten() {
			const el = document.getElementById('card').style
			this.$anime.timeline({}).add({
				targets: '.v-card',
				background: [
					!!el.background
						? el.background
						: 'linear-gradient(45deg, rgba(0, 0, 0, 0.4) 0%, rgba(255, 255, 255, 0.1) 100%) padding-box',
					'linear-gradient(45deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.1) 100%) padding-box',
				],
				backdropFilter: [
					!!el.backdropFilter ? el.backdropFilter : 'blur(10px)',
					'blur(4.5px)',
				],
				duration: 2000,
				easing: 'easeOutQuart',
				delay: 500,
			})
		},
		darken() {
			const el = document.getElementById('card').style
			this.$anime.timeline({}).add({
				targets: '.v-card',
				background: [
					!!el.background
						? el.background
						: 'linear-gradient(45deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.1) 100%) padding-box',
					'linear-gradient(45deg, rgba(0, 0, 0, 0.4) 0%, rgba(255, 255, 255, 0.1) 100%) padding-box',
				],
				backdropFilter: [
					!!el.backdropFilter ? el.backdropFilter : 'blur(4.5px)',
					'blur(10px)',
				],
				duration: 2000,
				easing: 'easeOutQuart',
				delay: 500,
			})
		},
	},
}
</script>


<style lang='scss'>
@import '@/assets/sass/overrides.scss';

// .v-main {
// 	background-image: url('~/static/1080.jpg');
// 	background-repeat: no-repeat;
// 	background-size: cover;
// 	background-attachment: fixed;
// }
</style>