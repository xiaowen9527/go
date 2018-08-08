<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img" :src="bannerImg">
            <div class="banner-info">
                <div class="banner-title">{{this.sightName}}</div>
                <div class="banner-num">
                    <span class="iconfont banner-icon">&#xe601;</span>
                    {{this.bannerImgs.length}}
                </div>
            </div>
        </div>
        <fade-animation>
            <common-gallary @close="handleGallaryClose" :imgs="bannerImgs" v-show="showGallary"></common-gallary>
        </fade-animation>
    </div>
</template>

<script>
import CommonGallary from "common/gallary/Gallary";
import FadeAnimation from "common/fade/FadeAnimation";
    export default {
        name:"DetailBanner",
        props:{
            sightName: String,
            bannerImg: String,
            bannerImgs: Array
        },
        data() {
            return {
                showGallary:false
            }
        },
        methods: {
          handleBannerClick(){
              this.showGallary = true
          },
          handleGallaryClose(){
              this.showGallary = false
          },
        },
        computed: {
           
        },
        components: {
            CommonGallary,FadeAnimation
        }
    }
</script>

<style scoped lang="stylus">
.banner
    overflow hidden
    position relative
    height 0
    padding-bottom 56%
    .banner-img
        width 100%
    .banner-info
        position absolute
        left 0
        color #ffffff
        padding 0 .2rem
        right 0
        bottom 0
        line-height .6rem
        display flex
        background-image linear-gradient(top,rgba(0,0,0,0), rgba(0,0,0,0.8))
        .banner-title
            flex 1
            font-size .32rem
        .banner-num
            padding 0 .4rem
            padding-top .14rem
            line-height .2rem
            height .32rem
            border-radius .2rem
            background rgba(0,0,0, .8)
            font-size .24rem
            .banner-icon
                font-size .24rem
</style>