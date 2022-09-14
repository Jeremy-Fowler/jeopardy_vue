<template>
  <header>
    <Navbar />
  </header>
  <main>
    <router-view />
  </main>
  <footer>
    <div class="container-fluid">
      <div class="row">
        <div v-for="p in players" :key="p.name" class="col-3">
          <PlayerCard :player="p" />
        </div>
      </div>
    </div>
  </footer>
  <Modal id="clue-modal">
    <ClueDetails />
  </Modal>
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
