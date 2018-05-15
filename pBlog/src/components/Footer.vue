<template>
<div>
  <footer>
    <div class='cityAndDate'>
      <span>Canton</span>
      <span>{{date}}</span>
    </div>
    <div class='amPm'>
      <img :src='icon'>
    </div>
    <div class='temperature'>
      <span>{{tem}}</span>
    </div>
    <a href='http://localhost:8090/admin' target='_blank' id='admin-login'>
    <img src='../../static/img/key.png' title='admin login!' id='admin-pic'>
    </a>

  </footer>
</div>
</template>

<script>
export default {
  name: 'footer',
  data() {
    return {
      icon:'',
      date: '',
      tem:''
    }
  },
  methods: {
    getWeather() {
      this.$axios.get('/weather', {

      }).then((res) => {
        this.icon = res.data.icon;
        this.date = res.data.date;
        this.tem = res.data.tem;

      }, (res) => {
        alert(res.status)
      })
    }
  },
  created() {
    this.getWeather()
  }

}
</script>
