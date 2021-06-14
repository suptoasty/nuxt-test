<template>
	<div>
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
		/>
		<v-card id="card" class="ma-2 pa-2" max-width="400px">
			<!-- <v-card-title>Title</v-card-title>
				<v-card-text>text</v-card-text>
				<v-card-actions
					><v-btn><v-icon>mdi-delete</v-icon></v-btn></v-card-actions
				> -->
			<v-row justify="center" align="center" class="ma-2 pa-2">
				<v-col xl="12" lg="12" md="12" sm="12" xs="12" class="ma-2 pa-2">
					<search-bar />
				</v-col>
				<v-col xl="12" lg="12" md="12" sm="12" xs="12" class="ma-2 pa-2">
					<nuxt-content :document="content" />
				</v-col>

				<!-- <v-col>
						<v-text-field solo background-color="linear-gradient(red, blue)" />

						<v-btn color="primary"><v-icon>mdi-delete</v-icon></v-btn>
					</v-col> -->
			</v-row>
		</v-card>
	</div>
</template>

<script>
export default {
	async asyncData({ $content, params }) {
		const content = await $content('home').fetch()
		return { content }
	},

	beforeMount() {
		// this.$anime
		// 	.timeline({
		// 		delay: 0,
		// 		duration: 0,
		// 	})
		// 	.add({
		// 		targets: '#card',
		// 		backdropFilter: 'blur(0px)',
		// 		opacity: 0,
		// 		duration: 500,
		// 	})
		// 	.add({ targets: '#img', translateX: '-20%', opacity: 0, duration: 0 })
	},

	mounted() {
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
						{ opacity: [0, 1], duration: 2000 },
						{
							backdropFilter: ['blur(0px)', 'blur(4.5px)'],
							translateX: '50%',
							duration: 2000,
						},
					],
					ease: 'easeOutExpo',
				},
				'-=2500'
			)
		// .add({
		// 	targets: '#card',
		// 	keyframes: [
		// 		{
		// 			translateX: '-20%',
		// 			opacity: [0, 1],
		// 			duration: 0,
		// 			backdropFilter: ['blur(0px)'],
		// 		},
		// 	],
		// })
		// .add({
		// 	targets: '#card',
		// 	keyframes: [
		// 		{
		// 			translateX: ['-20%', '0%'],
		// 			backdropFilter: ['blur(0px)', 'blur(4.5px)'],
		// 			duration: 500,
		// 			easing: 'easeOutInExpo',
		// 		},
		// 		{ translateY: '+20%', delay: 500, ease: 'linear' },
		// 	],
		// })
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

.v-main {
	background-image: url('https://picsum.photos/1920/1080.jpg');
}
</style>