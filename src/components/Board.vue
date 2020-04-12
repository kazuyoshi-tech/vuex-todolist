<template>
  <div>
    <header>
      Todo-List
    </header>
    <main>
      <list-add />
      <div class="list-index">
        <list v-for="(item, index) in lists"
              :key="item.id"
              :title="item.title"
              :listIndex="index"
        />
      </div>
    </main>
  </div>
</template>

<script>
import ListAdd from './ListAdd.vue'
import List from './List'
import { mapState } from 'vuex'

export default {
  components: {
    ListAdd,
    List,
  },
  computed: {
    ...mapState([
      'lists'
    ]),
  },
}
</script>