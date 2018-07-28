<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li
        class="item border-bottom"
        v-for="item of recommendList"
        :key="item.id"
      >
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
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
                        imgUrl:'https://ugc.qunarzz.com/4/19674c7d.JPEG_r_1500x_cc71e7da.jpeg',
                        title:'东京 | 自由行',
                        desc:'暑期全国直飞日本东京5-7天往返含税单机票 自由行 赏樱日本旅游'
                    },
                    {
                        id:'0002',
                        imgUrl:'https://ugc.qunarzz.com/4/19674c7d.JPEG_r_1500x_cc71e7da.jpeg',
                        title:'东京 | 自由行',
                        desc:'暑期全国直飞日本东京5-7天往返含税单机票 自由行 赏樱日本旅游'
                    },
                    {
                        id:'0003',
                        imgUrl:'https://ugc.qunarzz.com/4/19674c7d.JPEG_r_1500x_cc71e7da.jpeg',
                        title:'东京 | 自由行',
                        desc:'暑期全国直飞日本东京5-7天往返含税单机票 自由行 赏樱日本旅游'
                    },
                    {
                        id:'0004',
                        imgUrl:'https://ugc.qunarzz.com/4/19674c7d.JPEG_r_1500x_cc71e7da.jpeg',
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
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item-img-wrapper
    overflow: hidden
    height: 0
    padding-bottom: 51.6%
    .item-img
      width: 100%
  .item-info
    padding: .1rem
    .item-title
      line-height: .54rem
      font-size: .32rem
      ellipsis()
    .item-desc
      line-height: .4rem
      color: #ccc
      ellipsis()
</style>
