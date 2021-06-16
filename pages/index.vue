<template>
	<v-container>
		<v-img
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
		/>
		<v-card class="back">
			<v-container fluid>
				<v-row class="pa-4">
					<navbar-card class="pa-4" />
					<v-col cols="12">
						<h1>This is a test</h1>
					</v-col>
					<v-col cols="12">
						<v-card-text>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book. It has
							survived not only five centuries, but also the leap into
							electronic typesetting, remaining essentially unchanged. It was
							popularised in the 1960s with the release of Letraset sheets
							containing Lorem Ipsum passages, and more recently with desktop
							publishing software like Aldus PageMaker including versions of
							Lorem Ipsum.
						</v-card-text>
					</v-col>
					<v-col>
						<nuxt-content :document="content" />
					</v-col>
					<!-- <v-col cols="4" v-for="i in 3" :key="i">
						<v-card style="border-radius: 0em">
							<v-card-title>Card Title!</v-card-title>
							<v-card-text>
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industry's standard dummy
								text ever since the 1500s, when an unknown printer took a galley
								of type and scrambled it to make a type specimen book. It has
								survived not only five centuries, but also the leap into
								electronic typesetting.
							</v-card-text>
						</v-card>
					</v-col> -->
				</v-row>
			</v-container>
		</v-card>
		<v-card id="card" class="ma-2 pa-2">
			<v-row justify="center" align="center" class="ma-2 pa-2">
				<v-col xl="12" lg="12" md="12" sm="12" xs="12" class="ma-2 pa-2">
					<nuxt-content :document="content" />
				</v-col>
			</v-row>
		</v-card>
	</v-container>
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

.v-card.v-sheet.back {
	backdrop-filter: blur(10px);
	border-radius: 0.5em;
	border: solid 0px transparent;
}

.v-main {
	background-image: url('~/static/1080.jpg');
	// background-image: url('https://picsum.photos/1920/1080.jpg');
}
</style>