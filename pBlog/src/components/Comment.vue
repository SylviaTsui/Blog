<template>
<div>
  <section id='userComment'>
    <h4 id='comTitle'>Comments</h4>
    <p v-show='dataGroup.length == 0' class='discussComment'>no comment</p>
    <div v-for='item in dataGroup' v-cloak class='eachCommentWrap'>
     <div class='userPicWrap'>
      <span><img src='../../static/img/user.png' class='userPic'></span>
    </div>
    <div class='userMsgWrap'>
      <p class='userName'>{{item.name}}</p>
      <p class='postTime'>{{item.post_time}}</p>
    </div>
    <div class='userWrap'>
      <p class='eachComment'>{{item.comment}}</p>
    </div>
  </div>
  </section>
  <div id='inputDiscuss'>
    <h3>Leave a reply</h3>
    <textarea rows='10' cols='100' name='newComment' v-model='newComment' placeholder='Comment......'></textarea><br>
    <input type='hidden' name='post_time' v-model='post_time' />
    <input type='text' name='username' v-model='name' class='nickname' placeholder='Nickname(require)'/><br/>
    <input type='text' disabled="disabled" placeholder='Mail(will not be published)'><br/>
    <input type='text' disabled="disabled" placeholder='Github'><br/>
    <input type='submit' value='Publish' @click='submitComment()' class='btn'/><br>
  </div>

</div>
</template>

<script>


export default {
  name: 'comment',
  props: ['getID'],
  data() {
    return {
      name: '',
      newComment: '',
      commentID: this.getID,
      dataGroup: [],
      post_time:'',
      noComment: true,


    }
  },
  methods: {
    submitComment() {

      let time = new Date().getTime();
      this.post_time = (time.toString().slice(0,-3));

      this.$axios.get('/comment', {
        params: {
          username: this.name,
          comment: this.newComment,
          post_time:this.post_time,
          ID: this.commentID,
        }
      }).then((res) => {
        const json = res.data;
        let i = json.length;
        let pTime = json[i-1].post_time;

        let outputTime = this.$time(pTime*1000);

        this.dataGroup.unshift({
          name: json[i - 1].name,
          comment: json[i - 1].comment,
          post_time:outputTime
        })

        this.name = '';
        this.newComment = '';
      }, (res) => {
        alert(res.statue)
      })
    },
    getData() {
      this.$axios.get('/comment', {
        params: {
          get: true,
          ID: this.commentID,
        }
      }).then((res) => {
        const json = res.data;
        for (let i = 0; i < json.length; i++) {
        let pTime = json[i].post_time;

        let outputTime = this.$time(pTime*1000);

          this.dataGroup.unshift({
            name: json[i].name,
            comment: json[i].comment,
            post_time:outputTime

          })
        }
        this.name = '';
        this.newComment = '';
      }, (res) => {
        alert(res.statue)
      })
    }
  },
  created() {
    this.getData();
  }

}
</script>

<style>
[v-cloak]{
  display:none;
}

li{
list-style:none;
}

</style>
