<template>
  <div class="goods">
    <div class="menu-wrapper" ref="menuw">
      <ul>
        <li v-for="(item,index) in goods" class="menu-item" :class="{'current':currentIndex===index}" @click="selectMenu(index)">
          <span class="text border-1px">
            <span v-show="item.type>0" class="icon" :class="classMap[item.type]"></span>
            {{item.name}}
          </span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper" ref="foodw">
      <ul>
        <li v-for="item in goods" class="food-list food-list-hook" >
          <h1 class="title">{{item.name}}</h1>
          <ul>
            <li v-for="food in item.foods" class="food-item">
              <div class="icon">
                <img :src="food.icon" width="57" height="57">
              </div>
              <div class="content">
                <h2 class="name">{{food.name}}</h2>
                <p class="desc">{{food.description}}</p>

                <div class="extra">
                  <span class="count">月售{{food.sellCount}}份</span><span>好评率{{food.rating}}%</span>
                </div>
                <div class="price">
                  <span class="now">¥{{food.price}}</span><span class="old" v-show="food.oldPrice">¥{{food.oldPrice}}</span>
                </div>
                <div class="cartcontrol-wrapper">
                  <cartcontrol :food="food"></cartcontrol>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <shopcar :select-foods="selectFoods" :delivery-price="seller.deliveryPrice" :min-price="seller.minPrice"></shopcar>
  </div>
  <!--<food :food="selectedFood" ref="food"></food>-->
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll';
  import shopcar from 'components/shopcar/shopcar';
  import cartcontrol from 'components/cartcontrol/cartcontrol';
  /*
  import food from 'components/food/food';
  */

  const ERR_OK = 0;

  export default {
      props: {
          seller: {
              type: Object
          }
      },
      data () {
          return {
              goods: [],
              listHeight: [],
              scrollY: 0
          };
      },
      created () {
        this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];

        this.$http.get('/api/goods').then((response) => {
          response = response.body;
          if (response.errno === ERR_OK) {
            this.goods = response.data;
            console.log(this.goods);
            this.$nextTick(() => {
              this._initScroll();
              this._calculateHeight();
            });
          }
        });
      },
      computed: {
        currentIndex () {
            for (let i = 0; i < this.listHeight.length; i++) {
                let height1 = this.listHeight[i];
                let height2 = this.listHeight[i + 1];
                if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
                    /*
                    console.log(i + 'fsdf');
                    console.log(this.scrollY + ' ' + height1 + ' ' + height2);
                    */
                    return i;
                }
            }
        },
        selectFoods () {
            let foods = [];
            this.goods.forEach((good) => {
                good.foods.forEach((food) => {
                  if (food.count && food.count > 0) {
                    foods.push(food);
                  }
                });
            });
            return foods;
        }
      },
      methods: {
          selectMenu (index) {
              if (!event._constructed) {
                  return;
              }
              let foodList = this.$refs.foodw.getElementsByClassName('food-list-hook');
              let el = foodList[index];
              this.foodsScroll.scrollToElement(el, 300);
              console.log(index);
          },
          _initScroll () {
              this.menuScroll = new BScroll(this.$refs.menuw, {
                  click: true
              });
              this.foodsScroll = new BScroll(this.$refs.foodw, {
                probeType: 3,
                click: true
              });
              this.foodsScroll.on('scroll', (pos) => {
                  this.scrollY = Math.abs(Math.round(pos.y));
              });
          },
          _calculateHeight () {
              let foodList = this.$refs.foodw.getElementsByClassName('food-list-hook');
              let height = 0;
              this.listHeight.push(height);
              for (let i = 0; i < foodList.length; i++) {
                  let item = foodList[i];
                  height += item.clientHeight;
                  this.listHeight.push(height);
              }
          }
      },
      components: {
          shopcar,
          cartcontrol
      }
  };
</script>

<style lang="less" rel="stylesheet/less">
  @import '../../common/less/usually';

  .goods{
    display: flex;
    position: absolute;
    top:174px;
    bottom: 46px;
    width: 100%;
    overflow: hidden;
    .menu-wrapper{
      flex:0 0 80px;
      width: 80px;
      background: #f3f5f7;
      .menu-item{
        display: table;
        height: 54px;
        width: 56px;
        //margin: auto 12px;
        padding: 0 12px;
        font-size: 14px;
        line-height: 14px;
        font-weight: 200;
        &.current{
          position: relative;
          z-index: 10;
          margin-top: -1px;
          background: #fff;
          font-weight: 700;
          .text {
            .border-none;
          }
        }
        .text{
          display: table-cell;
          font-size: 12px;
          width: 56px;
          .border-1px(rgba(7,17,27,0.1));
          vertical-align: middle;
          .icon{
            display: inline-block;
            vertical-align: top;
            width: 12px;
            height: 12px;
            margin-top: 1px;
            margin-right: -6px;
            font-size: 0;
            background-size: 12px 12px;
            background-repeat: no-repeat;
            &.decrease {
              .bg-image('../../components/goods/decrease_3')
            }
            &.discount {
              .bg-image('../../components/goods/discount_3')
            }
            &.guarantee {
              .bg-image('../../components/goods/guarantee_3')
            }
            &.invoice {
              .bg-image('../../components/goods/invoice_3')
            }
            &.special {
              .bg-image('../../components/goods/special_3')
            }
          }
        }


      }
    }
    .foods-wrapper{
      flex: 1;
      position: relative;
      .title{
        padding-left: 14px;
        height: 26px;
        line-height: 26px;
        font-size: 12px;
        font-weight: 700;
        border-left: 2px solid #d9dde1;
        color: rgb(147,153,159);
        background: #f3f5f7;
      }
      .food-item{
        //width:100%;
        display: block;
        margin: 18px 18px 0 18px;
        padding-bottom: 18px;
        //padding-right: 18px;
        font-size: 0;
        .border-1px(rgba(7,17,27,0.1));
        &:last-child{
          .border-none;
          //margin-bottom: 0;
        }
        .icon{
          height: 57px;
          width: 57px;
          display: inline-block;
          margin-right: 10px;
        }
        .content{
          display: inline-block;
          vertical-align: top;
          .name{
            //vertical-align: top;
            margin: 2px 0 8px 0;
            height: 14px;
            font-size: 14px;
            line-height: 14px;
            color: rgb(7,17,27);
            font-weight: 600;
          }
          .desc,.extra{
            //margin-bottom: 8px;
            line-height: 10px;
            font-size: 10px;
            color: rgb(147,153,159);
          }
          .desc{
            margin-bottom: 8px;
            //line-height: 12px;
          }
          .extra{
            .count{
              margin-right: 12px;
            }
          }
          .price{
            //font-weight: 700;
            //line-height: 24px;
            //margin-top: 4px;
            //margin-bottom: -6px;
            .now{
              font-size: 14px;
              font-weight: 700;
              line-height: 24px;
              //font-weight: 700;
              color: rgb(240,20,20);
              margin-right: 8px;
            }
            .old{
              text-decoration: line-through;
              font-size: 10px;
              color: rgb(147,153,159);
            }

          }
          .cartcontrol-wrapper{
            position: absolute;
            right:-6px;
            bottom: 12px;
          }
        }
      }
    }
  }
</style>
