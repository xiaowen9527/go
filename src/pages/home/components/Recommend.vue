<template>
    <div>
        <div class="title">
            热销推荐
        </div>
        <ul>
            <li class="item border-bottom" v-for="(item,index) in recommendList" :key="item.id">
                <img :src="item.imgUrl" class="item-img">
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>       
    </div>

</template>

<script>
    export default {
        name:'Recommend',
        data() {
            return {
                recommendList:[
                    {
                        id:'0001',
                        imgUrl:'https://gw.alicdn.com/bao/uploaded/i2/TB10pDHjY1YBuNjSszh1QIUsFXa_022624.jpg_400x400q75.jpg_.webp',
                        title:'东京 | 自由行',
                        desc:'暑期全国直飞日本东京5-7天往返含税单机票 自由行 赏樱日本旅游'
                    },
                    {
                        id:'0002',
                        imgUrl:'https://gw.alicdn.com/bao/uploaded/i2/TB10pDHjY1YBuNjSszh1QIUsFXa_022624.jpg_400x400q75.jpg_.webp',
                        title:'东京 | 自由行',
                        desc:'暑期全国直飞日本东京5-7天往返含税单机票 自由行 赏樱日本旅游'
                    },
                    {
                        id:'0003',
                        imgUrl:'https://gw.alicdn.com/bao/uploaded/i2/TB10pDHjY1YBuNjSszh1QIUsFXa_022624.jpg_400x400q75.jpg_.webp',
                        title:'东京 | 自由行',
                        desc:'暑期全国直飞日本东京5-7天往返含税单机票 自由行 赏樱日本旅游'
                    },
                    {
                        id:'0004',
                        imgUrl:'https://gw.alicdn.com/bao/uploaded/i2/TB10pDHjY1YBuNjSszh1QIUsFXa_022624.jpg_400x400q75.jpg_.webp',
                        title:'东京 | 自由行',
                        desc:'暑期全国直飞日本东京5-7天往返含税单机票 自由行 赏樱日本旅游'
                    },
                ]
            }
        },
    }
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title
    margin-top: .2rem
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item
    overflow: hidden
    display: flex
    height: 1.9rem
    .item-img
      width: 1.7rem
      height: 1.7rem
      padding: .1rem
    .item-info
      flex: 1
      padding: .1rem
      min-width: 0
      .item-title
        line-height: .54rem
        font-size: .32rem
        ellipsis()
      .item-desc
        line-height: .4rem
        color: #ccc
        ellipsis()
      .item-button
        line-height: .44rem
        margin-top: .16rem
        background: #ff9300
        padding: 0 .2rem
        border-radius: .06rem
        color: #fff
</style>
