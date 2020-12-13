<template>
  <header class="header">
    <div class="container">
      <h1>[2020.12.14] 임은수</h1>
    </div>
  </header>
</template>

<script>
export default {
  name: "Mainheader"
}
</script>

<style lang="scss" scoped>
  .header{
    display:flex;
    align-items:center;
    height:70px;
    box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.07);
    h1{
      font-size: 16px;
      font-weight:normal;
    }
  }
@media screen and (max-width: 768px) {
  .header{
    height:45px;
    padding:0 15px;
  }
}
  
</style>