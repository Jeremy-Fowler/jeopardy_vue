<template>
  <div class="container-fluid">
      <div class="row">
        <div v-for="c in clues" :key="c.id" class="col-md-3 p-2">
          <ClueCard :clue="c"/>
        </div>
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
  setup(){
    onMounted(async()=>{
      try {
        await cluesService.getClues()
      } catch (error) {
        logger.error(error)
        Pop.error(error.message)
      }
    })
    return{
      clues: computed(()=> AppState.clues)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
