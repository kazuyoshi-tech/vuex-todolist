<template>
  <form :class="classList" @submit.prevent="addList">
    <input type="checkbox" v-model="checkValue">

    <input v-model="title" type="text" class="text-input" placeholder="title">
    <input v-model="title" type="password" class="text-input" placeholder="password">

    <select v-model="part">
      <option disabled value="">部署を選択</option>
      <option>営業</option>
      <option>カスタマーサポート</option>
      <option>開発</option>
    </select>

    <input type="radio" v-model="priority" value="高"> 重要：高
    <input type="radio" v-model="priority" value="中"> 重要：中
    <input type="radio" v-model="priority" value="低"> 重要：低

    <button type="submit"
            class="add-button"
            v-if="isEditing || titleExists">
      Add
    </button>
  </form>
</template>

<script>
export default {
  data: function() {
    return {
      title: '',
      part: '',
      priority: '',
      checkValue: false,
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
      this.$store.dispatch('addlist', { title: this.title, part: this.part, priority:this.priority })
      this.title = ''
      this.part = ''
      this.priority = ''
    },
    // startEditing() {
    //   this.isEditing = true
    // },
    // finishEditing() {
    //   this.isEditing = false
    // },
    // @focusin="startEditing"
    // @focusout="finishEditing"
  }
}
</script>