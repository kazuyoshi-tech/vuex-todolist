<template>
  <div class="list container">
    <h4>リストを追加</h4>
    <form :class="classList" @submit.prevent="addList">

      <div class="col-xs-4">
        <input v-model="title" type="text" class="text-input" placeholder="タイトル">
      </div>

      <div class="col-xs-4">
        <input v-model="author" type="text" class="" placeholder="作成者">
        <input v-model="responsiblePorson" type="text" class="" placeholder="担当">
      </div>

      <div class="col-xs-4">
        <button type="submit"
                class="add-button"
                v-if="isEditing || titleExists">
          Add
        </button>
      </div>

      <div class="col-xs-4">

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

      </div>

      <div class="col-xs-4">
        <br>
        <p>緊急度：</p>
        <input type="radio" v-model="priority" value="高" id="high" class="radio-input">
        <label for="high">高</label>
        <input type="radio" v-model="priority" value="中" id="middle" class="radio-input">
        <label for="middle">中</label>
        <input type="radio" v-model="priority" value="低" id="low" class="radio-input"> 
        <label for="low">低</label>
      </div>


      <div class="col-xs-3">
        <br>
        <p>期日を入力：<vuejs-datepicker v-model="deadline" :format="DatePickerFormat" placeholder="日付を入力"></vuejs-datepicker></p>
      </div>
      
      
      <!-- <input type="hidden" v-model="company" value="CYURICA"> -->
      
    </form>
  </div>
</template>


<script>
import vuejsDatepicker from "vuejs-datepicker";

export default {
  components: {
    vuejsDatepicker
  },
  
  data: function() {
    return {
      title: '',
      author: '',
      responsiblePorson: '',
      part: '',
      priority: '',
      company: 'CYURICA',
      DatePickerFormat: 'yyyy-MM-dd',
      deadline: '',
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
      this.$store.dispatch('addlist', { title: this.title, 
                                        part: this.part, 
                                        priority:this.priority, 
                                        company:this.company, 
                                        deadline:this.deadline, 
                                        author:this.author,
                                        responsiblePorson:this.responsiblePorson,  
                                        })
      this.title = ''
      this.author = ''
      this.responsiblePorson = ''
      this.part = ''
      this.priority = ''
      this.company = ''
      this.deadline = ''
    },
  }
}
</script>