<template>
  <div>
    <h1>CHATROOM</h1>
    <input type='button' value='button' @click='getSocket()'>
  </div>
</template>

<script src='http://localhost:3000/socket.io/socket.io.js'></script>
<script>
  export default{
    name:'chatroom',
    data(){
     return{

     }
    },
    methods:{
      connectRoom(){
        this.$axios.get('/chatroom',{
          params:{

          }
        }).then((res)=>{
           alert(res.data)
        },(res)=>{
           alert(res.status)
        })
      },
      getSocket(){
        let sock = io.connect('ws://localhost:3000/')
        sock.emit('a',12,5);
      }

    },
    created(){
      this.connectRoom();

    }
  }

</script>
