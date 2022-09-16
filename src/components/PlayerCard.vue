<template>
  <div class="text-center" :id="'score-' + player.name">
    <h3 v-if="route.name == 'Clue' && !player.guessed"
      class="bg-primary p-3 d-flex justify-content-between align-items-center"
      :class="{'text-danger' : player.points < 0}">
      <button title="Increase Points" class="btn selectable" @click="answer(true)">
        <i class="mdi mdi-check text-success"></i>
      </button>
      <span>${{player.points}}</span>
      <button title="Decrease Points" class="btn selectable" @click="answer(false)">
        <i class="mdi mdi-close text-danger"></i>
      </button>
    </h3>
    <h3 v-else class="bg-primary p-3" :class="{'text-danger' : player.points < 0}">
      ${{player.points}}
    </h3>
    <h3 class="bg-primary indie-flower p-3">
      {{player.name}}
    </h3>
  </div>
</template>


<script>
import { createPopper } from '@popperjs/core';
import { watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import { playersService } from '../services/PlayersService.js';

export default {
  props: {
    player: {
      type: Object, required: true
    }
  },
  setup(props) {
    const route = useRoute()
    return {
      route,
      answer(bool) {
        playersService.answer(bool, props.player.name)
      }
    }
  }
}
</script>


<style lang="scss" scoped>
.indie-flower {
  font-family: 'Indie Flower', cursive;
}
</style>