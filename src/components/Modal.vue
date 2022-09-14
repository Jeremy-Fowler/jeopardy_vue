<template>
  <div class="modal fade" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" ref="elem">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <slot></slot>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { onMounted, ref } from 'vue';
import { AppState } from '../AppState.js';
export default {
  setup() {
    const elem = ref()
    let modal = null
    onMounted(() => {
      modal = elem.value
      modal.addEventListener('hidden.bs.modal', setActiveAnswered)
    })

    function setActiveAnswered() {
      if (AppState.clue) {
        AppState.clue.answered = true
      }
    }

    return {
      elem
    }
  }
}
</script>


<style lang="scss" scoped>

</style>