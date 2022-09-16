<template>
  <header>
  </header>
  <main class="bg-dark container-fluid pt-5">
    <router-view />
  </main>
  <footer class="container-fluid bg-dark">
    <div class="row">
      <div v-for="p in players" :key="p.name" class="col-3">
        <PlayerCard :player="p" />
      </div>
    </div>
  </footer>
</template>

<script>
import { computed } from 'vue';
import { AppState } from './AppState';

export default {
  name: 'App',
  setup() {
    return {
      appState: computed(() => AppState),
      players: computed(() => AppState.players)
    }
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";
</style>
