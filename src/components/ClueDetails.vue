<template>
  <div v-if="clue" class="container-fluid">
    <div class="row">
      <div class="col-12">
        <div>
          {{clue.question}}
        </div>
        <div class="on-hover">
          {{clue.answer}}
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { computed } from '@vue/reactivity';
import { onUnmounted } from 'vue';
import { AppState } from '../AppState.js';

export default {
  setup() {
    onUnmounted(() => {
      AppState.clue.answered = true
    }
    )
    return {
      clue: computed(() => AppState.clue)
    }
  }
}
</script>


<style lang="scss" scoped>

</style>