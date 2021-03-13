<template>
  <div>
    <li class="list-group-item" :class="liClassName">{{ item.message }}</li>
    <small class="badge float-left" :class="badgeClassName">
      {{ item.created_at | formatDateAndTime }}</small
    >
    <small class="badge float-right" :class="badgeClassName">{{
      getName()
    }}</small>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {};
  },
  props: ["item"],
  computed: {
    ...mapState({
      user: "user",
    }),
    liClassName() {
      if (this.user.data) {
        return `list-group-item-${this.getColor()}`;
      }
    },
    badgeClassName() {
      if (this.user.data) {
        return `badge-${this.getColor()}`;
      }
    },
  },
  methods: {
    getColor() {
      if (this.item.user_id != this.user.data.id) {
        return "warning";
      } else {
        return "success";
      }
    },
    getName() {
      if (this.user.data) {
        if (this.item.user_id != this.user.data.id) {
          return this.item.user_name;
        } else {
          return "you";
        }
      }
    },
  },
};
</script>
