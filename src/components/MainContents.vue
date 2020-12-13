<template>
    <ul id="scrollLine">  
        <li v-for="(feed,index) in contents" v-bind:key="index">
          <router-link :to="{ name: 'Detail', params: { id: feed.id } }" :key="feed.id" class="link">
            <div class="feedItems">
              <div class="itemContent">
                <div class="cardHeader">
                  <span>{{feed.category_id === 1 && "apple" || feed.category_id === 2 && "banana" || feed.category_id === 3 && "coconut" }}</span>
                  <span>{{feed.id}}</span>
                </div>
                <div class="cardContent">
                  <div class="cardInfo">
                    <span class="userId">{{feed.user_id}}</span>
                    <span class="createAt">{{feed.created_at.substr(0, 10)}}</span>
                  </div>
                </div>
                <h3>{{feed.title}}</h3>
                <p>{{feed.contents}}</p>
              </div>
            </div>
          </router-link>
            <div v-if="(index + 1) % 5 === 0">
              <div class="feedItems">
                <div class="adsContainer">
                  <div class="cardHeader">
                    <span>sponsored</span>
                  </div>
                  <div class="adsBody">
                    <div class="adsImg">
                      <img :src="'https://cdn.comento.kr/assignment/' + contentsAd[((index+1) / 5) - 1].img" alt="광고이미지"/>
                    </div>
                    <div class="adsContent">
                      <h3>{{contentsAd[((index+1) / 5) - 1].title}}</h3>
                      <p>{{contentsAd[((index+1) / 5) - 1].contents}}</p>
                    </div>
                  </div>
                  
                </div>
              </div>
          </div>
            
        </li>

    </ul>
</template>

<script>

export default {
  name: "MainContents",
  data(){
    return{
      list: [],
      ads: [],
      adsIdx: 0,
      page: 1,
      limit: 10,
    }
  },
  computed:{
    contents(){
      return this.$store.state.list;
    },
    contentsAd(){
      return this.$store.state.ads;
    },
  },
  created() {
    this.$store.dispatch("FETCH_LIST");
    this.$store.dispatch("FETCH_ADS");
  },
  
}
</script>

<style lang="scss" scoped>

  .feedItems{
    margin-bottom:30px;
    padding: 0 30px;
    width:100%;
    border-radius: 5px;
    -webkit-backdrop-filter: blur(30px);
    backdrop-filter: blur(30px);
    border: solid 1px #e1e4e7;
  }

  .itemContent{

    h3{
      margin-top:25px;
      font-size:18px;
      color:#282c30;
      white-space:nowrap; 
      overflow:hidden; 
      text-overflow:ellipsis;
    }
    
    p{
      margin:15px 0 21px 0;
      font-size:16px;
      color: #495057;
      white-space:nowrap; 
      overflow:hidden; 
      text-overflow:ellipsis;
    }
  }

  .cardHeader{
    display: flex;
    justify-content: space-between;
    padding:25px 0 12px 0;
    height:50px;
    border-bottom:1px solid #e1e4e7;

    span {
      font-size:13px;
      color:#7e848a;
    }
  }

  .cardContent{
    margin:20px 0;
    
    .userId{
      position: relative;
      color:#00c854;
      font-size:13px;
      padding-right:12px;
      margin-right:10px;
      &:after{
        display: block;
        margin-left:12px;
        content:"|";
        position: absolute;
        top:0;
        right:0;
        color:#e1e4e7;
      }
    }

    .createAt{
      color:#495057;
      font-size:13px;
    }

    
  }

  .adsContainer{
    display:flex;
    flex-direction: column;
  }

  .adsBody{
    margin:18px 0 21px 0;
    display:flex;

    .adsImg{
      display:block;
      margin-right:30px;
      width: 310px;
      /* border: solid 1px #e1e4e7; */
      object-fit: contain;

      img{
        width:100%;
      }

    }
    
    

    .adsContent{
      display:flex;
      flex-direction: column;
      width: calc(100% - 340px);
      
      h3{
        display:-webkit-box;
        -webkit-line-clamp:2;
        -webkit-box-orient:vertical;
        height:48px;
        font-size:18px;
        line-height:1.5;
        color:#282c30;
        overflow:hidden; 
        text-overflow:ellipsis;
      }
      
      p{
        display:-webkit-box;
        -webkit-line-clamp:4;
        -webkit-box-orient:vertical;
        height:90px;
        margin:15px 0 21px 0;
        font-size:16px;
        line-height:1.5;
        color: #495057;
        overflow:hidden; 
        text-overflow:ellipsis;
      }

    }
    

    
  }

@media screen and (max-width: 768px) {
  .feedItems{
    padding:0 15px;
    margin-bottom:10px;
    border:none;
    border-radius: unset;
    border-top:solid 1px #e1e4e7;
    border-bottom:solid 1px #e1e4e7;
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.05);
  }
  .cardContent{
    margin:10px 0;
  }
  .adsContent{
    margin:10px 0;
    width:auto;
  }
  .adsBody{
    flex-direction: column;
    .adsContent{
      width:auto;
    }
    .adsImg{
      width:auto;
      height:180px;
      overflow: hidden;
      img{
          object-fit: contain;
      }
    }
    h3,p{
      width:auto;
    }
  }
}

</style>