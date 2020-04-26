<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <board />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Board from './components/Board.vue'

export default {
  name: 'App',
  components: {
    Board,
  }
}
</script>
