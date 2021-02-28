export default {
	methods: {
		async logout() {
			try {
				axios.post("/logout");
				this.$store.dispatch("logout");
			} catch (error) {
				this.$store.dispatch("logout");
			}

			this.$router.push({ name: 'home' });
		}
	}
}