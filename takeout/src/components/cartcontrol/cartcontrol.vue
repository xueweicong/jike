<template>
  <div class="cartcontrol">
    <transition name="swipper">
      <div class="cart-decrease icon-remove_circle_outline" v-show="food.count>0" @click="decreaseCart"></div>
    </transition>
    <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
    <div class="cart-add icon-add_circle" @click="addCart"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Vue from 'vue';

  export default {
      props: {
          food: {
              type: Object
          }
      },
      created () {
          console.log(this.food);
      },
      methods: {
          addCart () {
              console.log(3333);
              if (!this.food.count) {
                  /*
                  this.food.count = 1;
                  */
                  Vue.set(this.food, 'count', 1);
              } else {
                  this.food.count++;
              }
          },
          decreaseCart () {
              if (this.food.count) {
                  this.food.count--;
              }
          }
      }
  };
</script>

<style lang="less" rel="stylesheet/less">
  .cartcontrol{
    font-size: 0;
    .cart-decrease{
      display: inline-block;
      padding: 6px;
      line-height: 24px;
      font-size: 24px;
      color: rgb(0,160,220);
      -webkit-transition: all 0.4s linear 0s;
      -moz-transition: all 0.4s linear 0s;
      -ms-transition: all 0.4s linear 0s;
      -o-transition: all 0.4s linear 0s;
      transition: all 0.4s linear 0s;
      //transform: rotate(0);
      transform: translate3d(0, 0, 0);
      //transform: translate3d(24px, 0, 0);
      //opacity: 1;
    }
    .swipper-enter-active, .swipper-leave-active{
      //transform: translate3d(0, 0, 0);
      //transform: rotate(180deg);
      transform: translate3d(24px, 0, 0);
      opacity: 1;
    }
    .swipper-enter, .swipper-leave-active{
      opacity: 0;
      //transform: translate3d(0, 0, 0);
    }
    .cart-count{
      display: inline-block;
      vertical-align: top;
      width: 12px;
      padding-top: 6px;
      line-height: 24px;
      text-align: center;
      font-size: 10px;
      color: rgb(147, 153, 159);
    }
    .cart-add{
      display: inline-block;
      padding: 6px;
      line-height: 24px;
      font-size: 24px;
      color: rgb(0, 160, 220);
    }
  }
</style>
