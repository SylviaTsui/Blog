<template>
<div>
  <article v-for='item in dataGroup' v-cloak id='page'>
    <span class='pageDate'>{{item.date}}</span>
    <h3>{{item.title}}</h3>
    <div v-html='item.content'></div>
  </article>
  <Comment :getID='ID' />
</div>
</template>

<script>
import Comment from './Comment'

export default {
  name: 'page',
  data() {
    return {
      dataGroup: [],

      ID: this.$route.params.id,

    }
  },
  components: {
    Comment,

  },

  created() {
    this.$axios.get('/page', {
      params: {
        ID: this.$route.params.id
      }
    }).then((res) => {

      this.dataGroup = res.data;


    }, (res) => {
      alert(res.status)
    })
  }
}
</script>

<style>
[v-cloak] {
  display: none;
}
</style>
