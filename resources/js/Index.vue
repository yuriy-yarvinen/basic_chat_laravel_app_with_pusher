<template>
  <div>
      <router-view></router-view>
  </div>
</template>

<script>

import { mapState } from "vuex";

export default {
  data() {
    return {
      loading: true,
   
    };
  },
  computed: {
    ...mapState({
      user: "user",
    })
  },
  beforeCreate() {
    this.$store.dispatch("loadUser").then(() => {
    this.$store.dispatch("setUser",this.$route.params.user_id);
      this.loading = false;
    });
  },
};
</script>