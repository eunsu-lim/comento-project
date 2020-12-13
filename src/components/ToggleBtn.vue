<template>
  <div class="toggleWrap">
    <div class="toggle">
      <input type="checkbox" name="checkbox" id="checkbox" class="ios-toggle" checked/>
      <label for="checkbox" class="checkbox-label" data-off="광고 가리기" data-on="광고 보이기"></label>
    </div>
  </div>
  
</template>

<script>
export default {
  name: "ToggleBtn"
}
</script>

<style lang="scss" scoped>
  .toggleWrap{
    margin-right:20px;
    width:100px;
  }
  .toggle{
    width:42px;
  }
  *,*:before,*:after{
  box-sizing:border-box;
  margin:0;
  padding:0;
  /*transition*/
  -webkit-transition:.25s ease-in-out;
    -moz-transition:.25s ease-in-out;
      -o-transition:.25s ease-in-out;
          transition:.25s ease-in-out;
  outline:none;
  font-family:Helvetica Neue,helvetica,arial,verdana,sans-serif;
  }
  .ios-toggle,.ios-toggle:active{
  position:absolute;
  top:-5000px;
  height:0;
  width:0;
  opacity:0;
  border:none;
  outline:none;
  }
  .checkbox-label{
  display:block;
  position:relative;
  padding:10px;
  font-size:12px;
  line-height:16px;
  width:100%;
  height:24px;
  /*border-radius*/
  -webkit-border-radius:18px;
    -moz-border-radius:18px;
          border-radius:18px;
  background:#f8f8f8;
  cursor:pointer;
  }
  .checkbox-label:before{
  content:'';
  display:block;
  position:absolute;
  z-index:1;
  line-height:24px;
  text-indent:40px;
  height:24px;
  width:24px;
  /*border-radius*/
  -webkit-border-radius:100%;
    -moz-border-radius:100%;
          border-radius:100%;
  top:0px;
  left:0px;
  right:auto;
  background:white;
  /*box-shadow*/
  -webkit-box-shadow:0 3px 3px rgba(0,0,0,.2),0 0 0 2px #dddddd;
    -moz-box-shadow:0 3px 3px rgba(0,0,0,.2),0 0 0 2px #dddddd;
          box-shadow:0 3px 3px rgba(0,0,0,.2),0 0 0 2px #dddddd;
  }
  .checkbox-label:after{
  content:attr(data-off);
  display:block;
  position:absolute;
  z-index:0;
  top:0;
  left:48px;
  padding:4px;
  height:100%;
  width:64px;
  text-align:right;
  color:#bfbfbf;
  white-space:nowrap;
  }
  .ios-toggle:checked + .checkbox-label{
  /*box-shadow*/
  -webkit-box-shadow:inset 0 0 0 20px rgba(19,191,17,1),0 0 0 2px rgba(19,191,17,1);
    -moz-box-shadow:inset 0 0 0 20px rgba(19,191,17,1),0 0 0 2px rgba(19,191,17,1);
          box-shadow:inset 0 0 0 20px rgba(19,191,17,1),0 0 0 2px rgba(19,191,17,1);
  }
  .ios-toggle:checked + .checkbox-label:before{
  left:calc(100% - 24px);
  /*box-shadow*/
  -webkit-box-shadow:0 0 0 2px transparent,0 3px 3px rgba(0,0,0,.3);
    -moz-box-shadow:0 0 0 2px transparent,0 3px 3px rgba(0,0,0,.3);
          box-shadow:0 0 0 2px transparent,0 3px 3px rgba(0,0,0,.3);
  }
  .ios-toggle:checked + .checkbox-label:after{
  content:attr(data-on);
  left:48px;
  width:64px;
  }
  /* GREEN CHECKBOX */

  #checkbox + .checkbox-label{
  /*box-shadow*/
  -webkit-box-shadow:inset 0 0 0 0px rgba(19,191,17,1),0 0 0 2px #dddddd;
    -moz-box-shadow:inset 0 0 0 0px rgba(19,191,17,1),0 0 0 2px #dddddd;
          box-shadow:inset 0 0 0 0px rgba(19,191,17,1),0 0 0 2px #dddddd;
  }
  #checkbox:checked + .checkbox-label{
  /*box-shadow*/
  -webkit-box-shadow:inset 0 0 0 18px rgba(19,191,17,1),0 0 0 2px rgba(19,191,17,1);
    -moz-box-shadow:inset 0 0 0 18px rgba(19,191,17,1),0 0 0 2px rgba(19,191,17,1);
          box-shadow:inset 0 0 0 18px rgba(19,191,17,1),0 0 0 2px rgba(19,191,17,1);
  }
  #checkbox:checked + .checkbox-label:after{
  color:rgba(19,191,17,1);
  }



</style>