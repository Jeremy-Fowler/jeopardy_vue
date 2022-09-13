<template>
  <div v-if="clue" class="container-fluid">
    <div class="row">
      <div class="col-12">
        {{clue.question}}
      </div>
    </div>
  </div>
</template>


<script>
import { computed } from '@vue/reactivity';
import { AppState } from '../AppState.js';

export default {
  setup() {
    return {
      clue: computed(() => AppState.clue)
    }
  }
}
</script>


<style lang="scss" scoped>

</style>