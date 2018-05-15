<template>
<div id="app">
  <nav id='nav-top'>
    <div id='nav-left'>
      <span id='icon-top'></span>
      <span class='webDev'>Web-Develop</span>
      <span id='icon-bottom'></span>
      <span class='madeBy'>by</span>
      <span class='creator'>Sylvia</span>
      <span id='arrowWrapper' @click='showMeun()'><img src='../static/img/arrow-down.png' class='arrow-down'>
         <div id='meun' v-show='show' @mouseover='showMeun()' @mouseout='hiddenMeun()'>
         <NavList />
      </div>
      </span>
    </div>
    <div id='nav-right'>
      <NavList />
    </div>
  </nav>
  <header>
    <div id='headTitle'>
      <h1>Keep Walking..</h1>
    </div>
    <div id='head'>
      <img id='hero' src='/static/img/hero.jpg'>
    </div>
  </header>
  <main id='mainContent'>
  <div id='subtitleWrap'>
    <h4 id='subtitle'>BLOG POSTS</h4>
    <div id='linkWrapper'>
      <a href='https://github.com/SylviaTsui' target='_blank' class='link github'><img src='../static/img/github.png' class='link github'></a>
      <a href='https://codepen.io/Sylvia31/' target='_blank' class='link codepen'><img src='../static/img/codepen.png' class='link codepen'></a>
      <a class='wechat'><img src='../static/img/wechat.png' class='link wechat'></a>
      <a class='email'><img src='../static/img/email.png' class='link email'></a>
      <a><img src='../static/img/stackoverflow.png' class='link nohover'></a>
    </div>
  </div>
    <router-view />
  </main>
   <Footer />

</div>
</template>

<script>
import NavList from './components/NavList'
import Footer from './components/Footer'
import CSS from '../static/style/css/app.css'


export default {
  name: 'App',
  data(){
    return{
      show:false,

    }
  },
  methods:{
    showMeun(){
    this.show = true;
    },
    hiddenMeun(){
    this.show = false;
    }
  },

  components: {
    NavList,
    Footer,
  }

}
</script>

<style>
[v-cloak] {
  display: none;
}
</style>
