<template>
  <div>
    <!--<div class="header">-->
      <!--header-->
    <!--</div>-->
    <v-header :seller="seller"></v-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评价</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <!--<div class="content">-->
      <!--content-->
    <!--</div>-->
    <router-view :seller="seller"></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import header from './components/header/header.vue';

  const ERR_OK = 0;

  export default {
      data () {
          return {
            seller: {}
          };
      },
      created () {
          this.$http.get('/api/seller').then((response) => {
              response = response.body;
              if (response.errno === ERR_OK) {
                  this.seller = response.data;
                  console.log(this.seller);
              }
          });
      },
      components: {
          'v-header': header
      }
  };

</script>

<style lang="less" rel="stylesheet/less">
  @import "./common/less/usually";

/*#app {*/
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
/*}*/
 .tab{
   display: flex;
   width:100%;
   height:40px;
   line-height: 40px;
   //border-bottom: 1px solid rgba(7,17,27,0.1);
   .border-1px(rgba(7,17,27,0.1));
   .tab-item{
     flex:1;
     text-align: center;
     &>a{
       display: block;
       font-size: 14px;
       color: rgb(77,85,93);
       //line-height: 14px;
       &.active{
         color: rgb(240,20,20);
       }
     }
   }
 }


  /*.tab{*/
    /*display: flex;*/
    /*width:100%;*/
    /*height:40px;*/
    /*line-height: 40px;*/
  /*}*/

</style>
