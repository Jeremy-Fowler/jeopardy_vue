<template>
  <div>
    <h3 :class="`bg-primary p-3 ${player.points < 0 ? 'text-danger' : ''}`">
      {{player.points}}
    </h3>
    <h3 class="bg-primary indie-flower p-3">
      {{player.name}}
    </h3>
  </div>
</template>


<script>
export default {
  props: {
    player: {
      type: Object, required: true
    }
  },
  setup() {
    return {}
  }
}
</script>


<style lang="scss" scoped>

</style>