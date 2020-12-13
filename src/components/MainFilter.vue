<template>
  <div class="modalContainer">
    <div class="modalBg" v-on:click.self="$emit('close')"></div>
    <div class="modalContent">
      <div class="closeWrap">
        <button class="closeBtn" v-on:click.self="$emit('close')">닫기</button>
      </div>
      <div class="modalFilter">
        <p>필터</p>
        <ul class="filterList">
          <li v-for="(filter, index) in category" v-bind:key="index">
            <input type="checkbox" class="checkBox"/>
            <span>{{filter.name}}</span>
          </li>
        </ul>
        <div class="saveWrap">
          <button class="saveBtn" v-on:click="$emit('close')">저장하기</button>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "MainFilter",
  data(){
    return {
    }
  },
  computed:{
    category(){
      return this.$store.state.filter;
    }
  },
  created() {
    this.$store.dispatch("FETCH_FILTER")
  }
}
</script>

<style lang="scss" scoped>

  .modalContainer{
    .modalBg{
      z-index: 8;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      opacity: 0.7;
      background-color: #000000;
    }

    .closeWrap{
      display:flex;
      justify-content: flex-end;
      align-items: center;
      .closeBtn{
        margin:15px;
        width:12px;
        height:12px;
        font-size:0;
        cursor: pointer;
        &:before{
          content: "";
          position: absolute;
          width: 12px;
          height: 2px;
          background: #adb5bd;
          transform: rotate(45deg);
        }
        &:after{
          content: "";
          position: absolute;
          width: 12px;
          height: 2px;
          background: #adb5bd;
          transform: rotate(-45deg);
        }
      }
    }
    }

  .modalContent{
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 9;
    transform: translate(-230px, -50%);
    width: 460px;
    height: auto;
    background-color: #fff;
    
}
    
    .modalFilter{
      margin:0 30px 30px 30px;

    }
    p{
      font-size: 22px;
      font-weight: bold;
      line-height: 1.45;
      color: #212529;
    }

    .filterList{
      margin-top:13px;

      li{
        display:flex;
        align-items: center;
        margin-bottom:8px;

        .checkBox{
          margin-right:5px;
          width:20px;
          height:20px;
          border: solid 1px #e1e4e7;
        }
      }
      
    }

    .saveWrap{
      display:flex;
      justify-content: flex-end;
      .saveBtn{
        align-items:center;
        margin-top:32px;
        width: 99px;
        height: 40px;
        font-size: 16px;
        line-height: 2;
        color: #ffffff;
        border-radius: 3px;
        background-color: #00c854;
      }
    }
    
    
@media screen and (max-width: 768px) {
  .saveWrap{
    .saveBtn{
      width:100%;
    }
  }
  
}
  

</style>