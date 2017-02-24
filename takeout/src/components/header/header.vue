<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img :src="seller.avatar" width="64" height="64">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">
          {{seller.description}}/{{seller.deliveryTime}}分钟送达
        </div>
        <div v-if="seller.supports" class="support">
          <span class="icon" :class="classMap[seller.supports[0].type]"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <div v-if="seller.supports" class="support-count" @click="showDetail">
        <span class="count">{{seller.supports.length}}个</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <div class="bulletin-wrapper">
      <span class="bulletin-title"></span>
      <span class="bulletin-text" @click="showDetail">{{seller.bulletin}}</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
    <div class="background">
      <img :src="seller.avatar" width="100%" height="100%">
    </div>
    <transition name="fade">
    <div v-show="detailShow" class="detail">
      <div class="detail-wrapper clearfix">
        <div class="detail-main">
          <h1 class="name">{{seller.name}}</h1>
          <div class="star-wrapper">
            <star :size="48" :score="seller.score"></star>
          </div>
          <div class="title">
            <div class="line"></div>
            <div class="text">优惠信息</div>
            <div class="line"></div>
          </div>
          <ul v-if="seller.supports" class="supports">
            <li class="support-item" v-for="item in seller.supports">
              <span class="icon" :class="classMap[item.type]"></span>
              <span class="text">{{item.description}}</span>
            </li>
          </ul>
          <div class="title">
            <div class="line"></div>
            <div class="text">商家公告</div>
            <div class="line"></div>
          </div>
          <div class="bulletin">
            <p class="content">{{seller.bulletin}}</p>
          </div>
        </div>
      </div>
      <div class="detail-close" @click="hideDetail">
        <i class="icon-close"></i>
      </div>
    </div>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
  import star from '../star/star.vue';
  export default {
      props: {
          seller: {
              type: Object
          }
      },
      data () {
          return {
              detailShow: false
          };
      },
      methods: {
        showDetail () {
            this.detailShow = true;
        },
        hideDetail () {
            this.detailShow = false;
        }
      },
      created () {
        this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
      },
      components: {
        star
      }
  };
</script>

<style lang="less" rel="stylesheet/less">
  @import "../../common/less/usually";

  .header{
    position: relative;
    overflow: hidden;
    color:#fff;
    background: rgba(7,17,27,0.5);
    //background-color: #555555;
    .content-wrapper{
      position: relative;
      padding:24px 12px 18px 24px;
      font-size: 0;
      vertical-align: top;
      .avatar {
        display: inline-block;
        //vertical-align: top;
        img{
          border-radius: 2px;
        }
      }
      .content{
        vertical-align: top;
        display: inline-block;
        font-size: 14px;
        margin-left: 16px;
        .title{
          margin:2px 0 8px 0;
          .brand{
            display: inline-block;
            vertical-align: top;
            width: 30px;
            height: 18px;
            .bg-image('../../components/header/brand');
            background-size: 30px 18px;
            background-repeat: no-repeat;
          }
          .name{
            margin-left: 6px;
            font-size: 16px;
            line-height: 18px;
            font-weight: bold;
          }
        }
        .description {
          margin-bottom: 10px;
          line-height: 12px;
          font-size: 12px;
        }
        .support {
          .icon {
            display: inline-block;
            vertical-align: top;
            width: 12px;
            height: 12px;
            margin-right: 4px;
            background-size: 12px 12px;
            background-repeat: no-repeat;
            &.decrease {
              .bg-image('../../components/header/decrease_1')
            }
            &.discount {
              .bg-image('../../components/header/discount_1')
            }
            &.guarantee {
              .bg-image('../../components/header/guarantee_1')
            }
            &.invoice {
              .bg-image('../../components/header/invoice_1')
            }
            &.special {
              .bg-image('../../components/header/special_1')
            }

          }



          .text{
            vertical-align: top;
            box-sizing: border-box;
            //display: inline-block;
            //height: 12px;
            line-height:12px;
            font-size: 10px;
          }
        }
      }
      .support-count {
        position: absolute;
        right: 12px;
        bottom: 14px;
        padding: 0 8px;
        height: 24px;
        line-height: 24px;
        border-radius: 14px;
        background: rgba(0, 0, 0, 0.2);
        text-align: center;
        .count {
          vertical-align: top;
          font-size: 10px;
        }
        .icon-keyboard_arrow_right {
          margin-left: 2px;
          line-height: 24px;
          font-size: 10px;
        }
      }

    }
    .bulletin-wrapper{
      position: relative;
      background-color: rgba(7,17,27,0.2);
      height:28px;
      color: rgb(255,255,255);
      line-height: 28px;
      padding: 0 22px 0 12px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      //font-size: 0;
      .bulletin-title{
        display: inline-block;
        margin-top: 8px;
        vertical-align: top;
        width: 22px;
        height: 12px;
        .bg-image('../../components/header/bulletin');
        background-size: 22px 12px;
        background-repeat: no-repeat;
      }
      .bulletin-text{
        vertical-align: top;
        margin: 0 4px;
        font-size: 10px;
      }
      .icon-keyboard_arrow_right {
        position: absolute;
        font-size: 10px;
        right: 12px;
        top: 8px;
      }
    }
    .background{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      filter: blur(10px);
      //back
    }
    .fade-enter-active, .fade-leave-active{
      opacity: 1;
      background: rgba(7,17,27,0.8);
    }
    .fade-enter, .fade-leave-active{
      opacity: 0;
      background: rgba(7,17,27,0);
    }
    .detail{
      position:fixed;
      z-index: 100;
      width: 100%;
      height: 100%;
      top:0;
      left:0;
      overflow: auto;
      background: rgba(7,17,27,0.8);
      -webkit-transition: all 0.5s;
      -moz-transition: all 0.5s;
      -ms-transition: all 0.5s;
      -o-transition: all 0.5s;
      transition: all 0.5s;
      /*&.fade-transition{*/
        /*opacity: 1;*/
        /*background: rgba(7,17,27,0.8);*/
      /*}*/
      /*&.fade-enter,&.fade-leave{*/
        /*opacity: 0;*/
        /*//background: rgba(7,17,27,0);*/
      /*}*/
      .detail-wrapper{
        width: 100%;
        min-height: 100%;
        .detail-main{
          margin-top: 64px;
          padding-bottom: 64px;
          .name{
            line-height: 16px;
            font-weight: 700;
            font-size: 16px;
            text-align: center;
          }
          .star-wrapper{
            margin-top: 18px;
            padding: 2px 0;
            text-align: center;
          }
          .title{
            display: flex;

            //width:100%;
            margin: 28px 36px 24px 36px;
            .line{
              flex:1;
              position: relative;
              top:-6px;
              border-bottom: 1px solid rgba(255,255,255,0.2);
            }
            .text{
              padding: 0 12px;
              font-size: 14px;
              font-weight: 700;
            }
          }
          .supports{
            //width: 80%;
            margin: 0 48px;
            .support-item{
              padding:0 12px;
              margin-bottom: 12px;
              font-size: 0;
              &:last-child{
                margin-bottom: 0;
              }
              .icon{
                display: inline-block;
                background-size: 16px 16px;
                background-repeat: no-repeat;
                width: 16px;
                height: 16px;
                vertical-align: top;
                margin-right: 6px;
              }
              .decrease {
                .bg-image('../../components/header/decrease_2')
              }
              .discount {
                .bg-image('../../components/header/discount_2')
              }
              .guarantee {
                .bg-image('../../components/header/guarantee_2')
              }
              .invoice {
                .bg-image('../../components/header/invoice_2')
              }
              .special {
                .bg-image('../../components/header/special_2')
              }
              .text{
                line-height: 16px;
                font-size: 12px;
              }
            }
          }
          .bulletin{
            margin: 0 48px;
            .content{
              padding: 0 12px;
              line-height: 24px;
              font-size: 12px;
            }
          }
        }

      }
      .detail-close{
        position: relative;
        width:32px;
        height:32px;
        margin: -64px auto 0 auto;
        font-size: 32px;
        clear: both;

      }
    }
  }

</style>
