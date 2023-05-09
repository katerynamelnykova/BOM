<template>
  <div class="home">
    {{ $store.state.dzos }}
  </div>
</template>

<script>
export default {
  name: 'DZOView',
  components: {
  },
  created() {
    this.$store.dispatch("fetchDZOs")
  }
}
</script>
