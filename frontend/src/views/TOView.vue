<template>
  <div class="home">
    {{ $store.state.tos }}
  </div>
</template>

<script>
export default {
  name: 'TOView',
  components: {
  },
  created() {
    this.$store.dispatch("fetchTOs")
  }
}
</script>
