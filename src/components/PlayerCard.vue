<template>
  <div class="text-center" :id="'score-' + player.name">
    <h3 @click="openMenu" :class="`selectable bg-primary p-3 ${player.points < 0 ? 'text-danger' : ''}`">
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
    }
  }
}
</script>


<style lang="scss" scoped>
.indie-flower {
  font-family: 'Indie Flower', cursive;
}
</style>