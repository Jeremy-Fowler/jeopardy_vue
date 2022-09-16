<template>
  <div v-if="clue" class="row bg-primary border border-5 border-dark justify-content-center align-items-center">
    <div class="col-12 text-center">
      <p class="mb-5 category">{{clue.category}}</p>
      <h1>{{clue.question}}</h1>
      <div class="mt-5">
        <button @click="clue.answered = true" :class="{'d-none' : clue.answered}">
          Reveal Answer
        </button>
        <p class="answer" v-if="clue.answered">{{clue.answer}}</p>
      </div>
    </div>
  </div>
</template>


<script>
import { computed } from '@vue/reactivity';
import { onUnmounted, watchEffect } from 'vue';
import { AppState } from '../AppState.js';
import { router } from '../router.js';

export default {
  setup() {
    watchEffect(() => {
      if (!AppState.clue) {
        router.push({ name: 'Home' })
      } else {
        console.log("Answer: ", AppState.clue.answer)
      }
      // if (AppState.clue.answered) {
      //   setTimeout(() => { router.push({ name: 'Home' }) }, 3000)
      // }
    })
    return {
      clue: computed(() => AppState.clue)
    }
  }
}
</script>


<style lang="scss" scoped>
.row {
  min-height: 75vh;
}

.category {
  font-size: 24pt;
  font-weight: bold;
}

.answer {
  font-size: 24pt;

}
</style>