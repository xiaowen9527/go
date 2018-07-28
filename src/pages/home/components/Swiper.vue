<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for="(item,index) in swiperList" :key="index">
          <img class="weiper-img" :src="item.imgUrl" alt="">
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>    
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  data () {
    return {
      swiperOption: {
        pagination:'.swiper-pagination',
        loop:'auto',
        autoplay: 3000,
      },
      swiperList:[
        {
        id:'0001',
        imgUrl:'https://source.qunarzz.com/site/images/wap/home/recommend/iphoneplus/dujia_shuqi_banner_20180710.jpg',
        },
        {
          id:'0002',
          imgUrl:'https://source.qunarzz.com/site/images/wap/home/recommend/iphoneplus/anquan_20180716.png',
        }
      ]

    };
  }
};
</script>

<style lang="stylus" scoped>
.wrapper>>>.swiper-pagination-bullet-active {
  background: #fff !important;
}

.wrapper {
  width: 100%;
  height: 24.53vw;
  background: #cccccc;

  .weiper-img {
    width: 100%;
  }
}
</style>
