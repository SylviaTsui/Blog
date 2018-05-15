<template>
  <div id='listWrapper'>
    <router-link to='/all' class='type'>Home</router-link>
    <router-link to='/js' class='type'>Javascript</router-link>
    <router-link to='/node' class='type'>Node.js</router-link>
    <router-link to='/vue' class='type'>Vue</router-link>
    <router-link to='/react' class='type'>React</router-link>
    <router-link to='/css' class='type'>CSS/SASS</router-link>
    <router-link to='/mysql' class='type'>MySQL</router-link>
  </div>

</template>


<script>
export default{
   name:'navlist'

}

</script>
