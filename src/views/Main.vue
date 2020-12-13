<template>
  <div class="mainWrap bg">
    <div class="mainContainer container">
      <section class="loginContent">
        <button class="loginBtn">로그인</button>
      </section>
      <section class="feedContent">
        <div class="topFilter">
          <div class="orderFilter">
            <ul>
              <li :class="[activeColor ? 'activeColor' : '']">오름차순</li>
              <li>내림차순</li>
            </ul>
          </div>
          <div class="mainFilter">
            <!--Filter Modal-->
            <ToggleBtn />
            <button class="filterBtn" @click="showModal = true">필터</button>
            <MainFilter v-show="showModal" v-on:close="showModal = false"/>
          </div>
        </div>
        <div>
          <div>
            <MainContents />
          </div>
        </div>
        
      </section>
    </div>
  </div>
</template>

<script>
import MainFilter from "../components/MainFilter.vue"
import MainContents from "../components/MainContents.vue"
import ToggleBtn from "../components/ToggleBtn.vue"


export default {
  name: "Main",
  components: {MainFilter, MainContents, ToggleBtn},
  data() {
    return {
      showModal: false,
      activeColor: true,
    }
  }
}
</script>

<style lang="scss" scoped>

  .mainContainer{
    display:flex;
    flex-wrap:wrap;
    justify-content: space-between;
    margin-top:50px;
  }

  .loginContent{
    margin-right:40px;
    
    .loginBtn{
      width: 235px;
      height: 60px;
      border-radius: 5px;
      background-color: #00c854;
      font-size: 22px;
      font-weight: bold;
      color:#fff;
    }
  }
  
  .feedContent{
    display: flex;
    flex-direction: column;
    flex: 1;
    width: calc(100% - 275px);
  }

  .topFilter{
    display:flex;
    justify-content: space-between;
    align-items:center;
    margin-bottom:12px;
  }

  .filterBtn{
    padding:4px 12px; 
    border-radius: 3px;
    border: solid 1px #e1e4e7;
    color: #adb5bd;
  }

  .orderFilter {
    
    ul{
      display:flex;

      li{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right:12px;
        font-size: 13px;
        color: #adb5bd;
        cursor: pointer;

        &:before{
          content:"";
          display: block;
          margin-right:5px;
          width:6px;
          height:6px;
          border-radius:6px;
          background-color: #e1e4e7;
        }
      }

      .activeColor{
         color: #495057;

         &:before{
           background-color:#00c854;
         }
      }

    }
  }

.mainFilter{
  display: flex;
  align-items:center;
}

@media screen and (max-width: 768px) {
  .mainContainer{
    flex-direction: column;
    margin-top:15px;
  }
  .loginContent{
    display:none;
  }
  .feedContent{
    background-color:#fff;
    width:100%;
  }
  .topFilter{
    padding:0 15px;
  }
}

</style>