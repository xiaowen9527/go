<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for="(item,index) in list" :key="index">
          <img class="weiper-img" :src="item.imgUrl" alt="">
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>    
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  props:{
    list:Array
  },
  data () {
    return {
      swiperOption: {
        pagination:'.swiper-pagination',
        loop:'auto',
        autoplay: 3000,
      },
      

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
  height: 30vw;
  background: #cccccc;

  .weiper-img {
    width: 100%;
  }
}
</style>
