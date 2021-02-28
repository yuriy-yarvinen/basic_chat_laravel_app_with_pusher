<template>
  <div>
    <div class="row m-0 mt-1">
      <div class="col-6">
       
      </div>
      <div class="col-6">
        <button class="btn btn-primary float-right" @click.prevent="logout">
          Logout
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    async logout() {
      try {
        axios.post("/logout").then(()=>{
          this.$store.dispatch("logout");
			
				});
      } catch (error) {
        this.$store.dispatch("logout");
      }
    },
  },
};
</script>