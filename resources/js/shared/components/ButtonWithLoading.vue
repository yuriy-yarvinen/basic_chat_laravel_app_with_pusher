<template>
  <div>
    <button class="btn btn-secondary btn-block" :disabled="loading">
      <i v-if="loading" class="fas fa-circle-notch fa-spin"></i>
      <slot></slot>
    </button>
  </div>
</template>


<script>
export default {
  props: {
    loading: [Boolean]
  }
};
</script>