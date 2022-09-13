<template>
{{clue}}
</template>


<script>
import { Clue } from '../models/Clue.js';

export default {
  props:{
    clue:{
      type: Clue, required: true
    }
  },
  setup(){
    return {}
  }
}
</script>


<style lang="scss" scoped>

</style>