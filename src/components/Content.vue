<template>
  <div class="container">
    <div class="row">
      <table class="table">
        <colgroup>
          <col style="width:80%;">
          <col style="width:5%;">
        </colgroup>
        <tbody>
            <tr>
                <td>{{ body }}</td>
                <td @click="removeContenFromList"><button type="button" class="btn btn-danger">×</button></td>
            </tr>
        </tbody>
      </table>
    <!-- <button class="close-button" @click="removeContenFromList">
      ×
    </button>
    <div class="body">
      {{ body }}
    </div> -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    body: {
      type: String,
      required: true
    },
    listIndex: {
      type: Number,
      required: true
    },
    contentIndex: {
      type: Number,
      required: true
    }
  },
  methods: {
    removeContenFromList() {
      if(confirm('本当にこのカードを削除しますか？')) {
        this.$store.dispatch('removeContentFromList', { contentIndex: this.contentIndex, listIndex: this.listIndex })
      }
    }
  },
}
</script>