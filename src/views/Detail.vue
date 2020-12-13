<template>
  <div class="detailContainer container">
    <div class="detailItems detail">
      <h3>{{ detail.title }}</h3>
      <p>{{ detail.contents }}</p>
      <span class="createAt">{{detail.create_At}}</span>
    </div>
    <div class="detailReply">
      <p class="replyNum">답변 <span>{{detail.reply && detail.reply.length}}</span></p>
      <div v-for="(reply, index) in detail.reply" v-bind:key="index">
        <div class="detailItems replyItems">
          <h5 class="replyUserId">{{reply.user.name}}</h5>
          <p class="replyContent">{{reply.contents}}</p>
          <span class="createAt">{{reply.created_at.substr(0,10)}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Detail",
  computed:{
    detail(){
      return this.$store.state.detail;
    }
  },
  created() {
    const feedId = this.$route.params.id;
    this.$store.dispatch("FETCH_DETAIL", feedId);
  }
}

</script>

<style lang="scss" scoped>

.detailContainer{
  margin-top:50px;
}

.detailItems{
  padding:28px 93px 22px 30px;
  border-radius: 5px;
  -webkit-backdrop-filter: blur(30px);
  backdrop-filter: blur(30px);
  border: solid 1px #e1e4e7;

  h3{
    font-size:18px;
    color:#282c30;
    line-height:1.5;
  }
  
  p{
    margin-top:15px;
    font-size:16px;
    color: #495057;
    line-height:1.5;
  }

}

.detail{
  border: 1px solid #00c854;
}

.detailReply{
  margin-top:36px;
  margin-bottom:12px;
  padding-bottom:24px;

  .replyItems{
    margin-top:11px;

    h5{
      padding-bottom:12px;
      font-size:16px;
      color: #7e848a;
      border-bottom:1px solid #e1e4e7;
    }

    p{
      font-size:16px;
      color: #495057;
      
      span{
        color: #495057;
      }
    }
  }
  .replyNum{
    span{
      color:#00c854;
    }
  }
}

.createAt{
  display:block;
  margin-top:21px;
  color:#adb5bd;
  font-size:13px;
  font-weight:normal;
}

@media screen and (max-width: 768px) {
  .detailItems{
    padding-left:0;
    padding-right:0;
    margin:0 15px;
    border:none;
    border-radius: unset;
    border-top:solid 1px #e1e4e7;
    border-bottom:solid 1px #e1e4e7;
  }
  .detail{
    border-top: solid 1px #00c854;
    border-bottom: solid 1px #00c854;
  }
  .replyNum{
    margin-left:15px;
  }

}

</style>