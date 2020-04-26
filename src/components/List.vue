<template>
  <div class="container">
    <div class="row">
      <table class="table">
        <colgroup>
          <col style="width:10%;">
          <col style="width:40%;">
          <col style="width:20%;">
          <col style="width:10%;">
          <col style="width:20%;">
        </colgroup>
        <thead>
          <tr>
            <th>消化</th>
            <th>タイトル</th>
            <th>部署</th>
            <th>重要度</th>
            <th>期日</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input type="checkbox"  v-model="logicaldelet" class="checkbox-todo"></td>
            <td :class="tododisplay">{{ title }}</td>
            <td :class="tododisplay">{{ part }}</td>
            <td :class="tododisplay">{{ priority }}</td>
            <td :class="tododisplay">{{ deadline | moment }}</td>
            <td class="deletelist" @click="removeList"><button type="button" class="btn btn-danger">削除</button></td>
          </tr>
        </tbody>
      </table>
      <aaaaaa v-for="(item, index) in contents"
          :body="item.body"
          :key="item.id"
          :contentIndex="index"
          :listIndex="listIndex"
      />
      <content-add :listIndex="listIndex" />
    </div>
  </div>

  <!-- <div class="list">
      <input type="checkbox"  v-model="logicaldelet" class="checkbox-todo"> リストを消化する
      <p :class="tododisplay">タイトル：{{ title }}</p>
      <p :class="tododisplay">部署：{{ part }}</p>
      <p :class="tododisplay">重要度：{{ priority }}</p>
      <p :class="tododisplay">期日：{{ deadline | moment }}</p>
      <div class="deletelist" @click="removeList">×</div>
  </div> -->
</template>

<script>
import moment from 'moment';
import ContentAdd from './ContentAdd'
import Aaaaaa from './Content'

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
  components: {
    ContentAdd,
    Aaaaaa
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
    author: {
      type: String,
      required: true
    },
    responsiblePorson: {
      type: String,
      required: true
    },
    deadline: {
      type: Date,
      required: true,
    },
    contents: {
      type: Array,
      required: true
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