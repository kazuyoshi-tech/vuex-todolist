<template>
  <div class="list">
      <input type="checkbox"  v-model="logicaldelet" class="checkbox-todo"> リストを消化する
      <p :class="tododisplay">タイトル：{{ title }}</p>
      <p :class="tododisplay">部署：{{ part }}</p>
      <p :class="tododisplay">重要度：{{ priority }}</p>
      <p :class="tododisplay">期日：{{ deadline | moment }}</p>
      <div class="deletelist" @click="removeList">×</div>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  filters: {
    moment: function (deadline) {
      return moment(deadline).format('YYYY-MM-DD');
    }
  },
  data: function() {
    return {
      logicaldelet: false,
    }
  },
  props: {
    title: {
      type: String,
      required: true
    },
    part: {
      type: String,
      required: true
    },
    priority: {
      type: String,
      required: true
    },
    deadline: {
      type: String,
      required: true,
    },
    listIndex: {
      type: Number,
      required: true
    }
  },
  computed: {
    tododisplay() {
      const tododisplay = ['list-title']
      if (this.logicaldelet) {
        tododisplay.push('done')
      }
      // console.log(tododisplay)
      return tododisplay
    },
  },
  methods: {
    removeList: function() {
      if(confirm('本当にこのリストを削除しますか？')){
        this.$store.dispatch('removelist', { listIndex: this.listIndex })
      }
    },
  }
}
</script>