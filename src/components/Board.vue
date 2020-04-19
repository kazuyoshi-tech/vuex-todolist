<template>
  <div>
    <header>
      Todo-List-vue
    </header>
    <main>
      <list-add />
      <div class="list-index">
        <list v-for="(item, index) in lists"
              :key="item.id"
              :title="item.title"
              :part="item.part"
              :priority="item.priority"
              :deadline="item.deadline"
              :listIndex="index"
        />
      </div>
      <input type="password" placeholder="password">
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