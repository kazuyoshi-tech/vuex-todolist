<template>
  <div class="list">
    <h2>リストを追加</h2>
    <form :class="classList" @submit.prevent="addList">

      <input v-model="title" type="text" class="text-input" placeholder="タイトル">

      <button type="submit"
              class="add-button"
              v-if="isEditing || titleExists">
        Add
      </button>

      <div class="selectdiv">
        <select v-model="part" class="select-input">
          <option disabled value="">部署を選択</option>
          <option>営業</option>
          <option>人事</option>
          <option>総務</option>
          <option>カスタマーサポート</option>
          <option>開発</option>
        </select>
      </div>

      <div class="md-radio">
        <input type="radio" v-model="priority" value="高" id="high" class="radio-input">
        <label for="high">重要：高</label>
      </div>
      <div class="md-radio">
        <input type="radio" v-model="priority" value="中" id="middle" class="radio-input">
        <label for="middle">重要：中</label>
      </div>
      <div class="md-radio">
        <input type="radio" v-model="priority" value="低" id="low" class="radio-input"> 
        <label for="low">重要：低</label>
      </div>
      
      <!-- <input type="hidden" v-model="company" value="CYURICA"> -->
      
    </form>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      title: '',
      part: '',
      priority: '',
      company: 'CYURICA',
      isEditing: true,
    }
  },
  computed: {
    classList() {
      const classList = ['addlist']
      if (this.isEditing) {
        classList.push('active')
      }
      if (this.titleExists) {
        classList.push('addable')
      }
      return classList
    },
    titleExists() {
      return this.title.length > 0
    },
  },
  methods: {
    addList: function() {
      this.$store.dispatch('addlist', { title: this.title, part: this.part, priority:this.priority, company:this.company })
      this.title = ''
      this.part = ''
      this.priority = ''
      this.company = ''
    },
  }
}
</script>