<template>
  <div v-if="!clue.answered" class="bg-primary selectable h-100 py-2 text-center" data-bs-target="#clue-modal"
    :data-bs-toggle="clue.answered ? '' : 'modal'" @click="setActiveClue">
    <h2 class="text-light">
      {{clue.category}}
    </h2>
    <h2 class="text-warning">
      {{clue.points}}
    </h2>
  </div>
  <div v-else class="bg-danger h-100 py-2 text-center">
    <h2 class="text-light">
      {{clue.category}}
    </h2>
    <h2 class="text-warning">
      {{clue.points}}
    </h2>
  </div>
</template>


<script>
import { AppState } from '../AppState.js';
import { Clue } from '../models/Clue.js';

export default {
  props: {
    clue: {
      type: Clue, required: true
    }
  },
  setup(props) {
    return {
      setActiveClue() {
        AppState.clue = props.clue
      }
    }
  }
}
</script>


<style lang="scss" scoped>

</style>