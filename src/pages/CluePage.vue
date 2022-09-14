<template>
  <div class="component korinna">

    test
  </div>
</template>


<script>
import { computed } from '@vue/reactivity';
import { onUnmounted, watchEffect } from 'vue';
import { AppState } from '../AppState.js';
import { router } from '../router.js';

export default {
  setup() {
    onUnmounted(() => {
      if (AppState.clue) {
        AppState.clue.answered = true
      }
    })
    watchEffect(() => {
      if (!AppState.clue) {
        router.push({ name: 'Home' })
      }
    })
    return {
      clue: computed(() => AppState.clue)
    }
  }
}
</script>


<style lang="scss" scoped>

</style>