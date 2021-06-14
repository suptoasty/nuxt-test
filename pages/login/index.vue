<template>
	<v-row>
		<v-card>
			<v-toolbar dark color="primary" dense flat>
				<v-toolbar-title class="text-body-2 font-weight-bold white--text">
					Login Form:
				</v-toolbar-title>
			</v-toolbar>
			<v-form class="ma-2 pa-2">
				<v-text-field label="Email" type="email"></v-text-field>
				<v-text-field label="Password" type="password"></v-text-field>
			</v-form>
			<v-card-actions>
				<v-spacer />
				<v-btn @click="login">Login</v-btn>
			</v-card-actions>
		</v-card>
	</v-row>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
	methods: {
		login() {
			this.$store.dispatch('login')
			this.$router.push('/')
		},
	},
}
</script>

