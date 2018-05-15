window.onload = () => {
  const vm = new Vue({
    el: '#app',
    data: {
      message: 'hello vue',
      url:'/home',
      dataGroup:[],
    },
    methods:{
      get(){
        // alert(1)
        this.$http.get(this.url,{

          data:'cat'


        }).then((res)=>{
          // alert(res.data)
          this.dataGroup = res.data;
          // alert(this.dataGroup)
        },(res)=>{
          alert(res.status)
        })
      }
    },
    created(){
      this.get()
    }

  })
}
