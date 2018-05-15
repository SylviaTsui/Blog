<template>
<div>
  <article v-for='item in dataGroup' v-cloak>
    <div id='articleWrap'>
      <div id='circle'>
        <span>{</span>
        <span>}</span>
      </div>
      <div id='eachArticle'>
        <router-link :to="{name:'page',params:{id:item.ID}}">
          <p>{{item.intro}}</p>
          <h3>{{item.title}}</h3>
          <span>Date</span>
          <span class='dots sub'></span>
          <span>{{item.date}}</span>
          <span class='dots sub'></span>
          <span>Type</span>
          <span class='dots sub'></span>
          <span>{{item.type}}</span>

        </router-link>

      </div>
    </div>
  </article>
  <div>
    <div id='num'>
    <div>
      <input type='button' @click='pageTurn($event)' v-for='num in pageCount' :value='num' class='pageBtn'>
      <span>Pages</span>
    </div>
    </div>
  </div>

</div>
</template>

<script>
export default {
  name: 'node',
  data() {
    return {
      dataGroup: [],
      pageCount: 1,
      pageNum: 0,
    }
  },
  methods: {
    pageTurn(ev) {
      this.pageNum = ev.target.value;
      this.$axios.get('/node', {
        params: {
          num: this.pageNum,
        }
      }).then((res) => {
        this.dataGroup = res.data;
      }, (res) => {
        alert(res.status);
      })
    },
    getData() {
      this.$axios.get('/node', {
        params: {
          num: this.pageNum,
        }
      }).then((res) => {
        this.dataGroup = res.data;
      }, (res) => {
        alert(res.status)
      })
    }
  },
  created() {
    this.getData();
    this.getPageMount();
  }
  }
</script>

<style>
[v-cloak] {
  display: none;
}
</style>
