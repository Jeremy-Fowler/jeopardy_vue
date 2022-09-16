<template>
  <div v-if="clue" class="row bg-primary border border-5 border-dark justify-content-center align-items-center">
    <div class="col-8 text-center">
      <p class="mb-5 category clue-text">{{clue.category}}</p>
      <h1 class="clue-text">{{clue.question}}</h1>
      <div class="mt-5">
        <button @click="answerClue" :class="{'d-none' : clue.answered}" class="clue-btn p-2 fw-bold">
          REVEAL ANSWER
        </button>
        <p class="answer text-warning fw-bold" v-if="clue.answered">{{clue.answer}}</p>
      </div>
    </div>
  </div>
</template>


<script>
import { computed } from '@vue/reactivity';
import { onUnmounted, watchEffect } from 'vue';
import { AppState } from '../AppState.js';
import { router } from '../router.js';
import { cluesService } from '../services/CluesService.js';

export default {
  setup() {
    watchEffect(() => {
      if (!AppState.clue) {
        router.push({ name: 'Home' })
      } else {
        console.log("Answer: ", AppState.clue.answer)
      }
      if (AppState.players.length == AppState.players.filter(p => p.guessed).length) {
        cluesService.answerClue()
      }
      if (AppState.clue.answered) {
        setTimeout(() => { router.push({ name: 'Home' }) }, 4000)
      }
    })
    onUnmounted(() => {
      console.clear()
    })
    return {
      clue: computed(() => AppState.clue),
      answerClue() {
        cluesService.answerClue()
      }
    }
  }
}
</script>


<style lang="scss" scoped>
* {
  font-family: "ITC-Korinna"
}

.row {
  min-height: 75vh;
}

.category {
  font-size: 24pt;
  font-weight: bold;
}

.clue-text {
  text-shadow: 2pt 2pt black;
}

.answer {
  font-size: 24pt;
  text-shadow: 2pt 2pt black, 0 0 15pt #dac585;
}

.clue-btn {
  background-color: #060ce9;
  border: .1em solid black;
  border-radius: .1em;
  //REVIEW white or yellow text here??
  color: white;
  outline: .1em solid white;
  box-shadow: 4px 5px 4px black;
}
</style>