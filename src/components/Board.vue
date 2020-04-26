<template>
  <div>
    <header>
      Todo-List-vue
    </header>
    <main>
      <br>
      <list-add />
      <div class="list-index">
        <list v-for="(item, index) in lists"
              :key="item.id"
              :title="item.title"
              :part="item.part"
              :priority="item.priority"
              :author="item.author"
              :responsiblePorson="item.responsiblePorson"
              :deadline="item.deadline"
              :contents="item.contents"
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