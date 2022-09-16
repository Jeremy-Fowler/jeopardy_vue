<template>
  <div class="row">
    <div v-for="c in clues" :key="c.id" class="col-md-3 p-2">
      <ClueCard :clue="c" />
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue';
import { logger } from '../utils/Logger.js';
import { cluesService } from '../services/CluesService.js';
import Pop from '../utils/Pop.js';
import { computed } from '@vue/reactivity';
import { AppState } from '../AppState.js';

export default {
  name: 'Home',
  setup() {
    async function getClues() {
      try {
        await cluesService.getClues()
      } catch (error) {
        logger.error(error)
        Pop.error(error.message)
      }
    }

    onMounted(() => {
      let clues = AppState.clues
      if (clues.length == 0) {
        getClues()
      }
      else if (clues.length == clues.filter(c => c.answered).length) {
        AppState.doubleJeopardy = true
        getClues()
      }
      AppState.players.forEach(p => p.guessed = false)
    })
    return {
      clues: computed(() => AppState.clues)
    }
  }
}
</script>

<style scoped lang="scss">
* {
  font-family: Helvetica;
}
</style>
