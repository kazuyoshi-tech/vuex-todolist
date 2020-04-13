<template>
  <div class="list">
    <div class="listheader">
      <p class="list-title">タイトル：{{ title }}</p>
      <p class="list-part">部署：{{ part }}</p>
      <p class="list-part">重要度：{{ priority }}</p>
      <div class="deletelist" @click="removeList">×</div>
    </div>
  </div>
</template>

<script>
export default {
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
    listIndex: {
      type: Number,
      required: true
    }
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