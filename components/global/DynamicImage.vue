<template>
	<v-img :src="image" :contain="contain"></v-img>
</template>

<script>
export default {
	props: {
		src: {
			type: String,
			required: true,
		},
		contain: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		image() {
			return require(`~/assets/images/${this.src}`)
		},
	},
}
</script>

<style>
</style>