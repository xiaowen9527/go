<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img" src="https://img1.qunarzz.com/p/tts2/1808/3a/2b8fa80a3815de02.jpg_r_640x420x90_8b6ef55c.jpg">
            <div class="banner-info">
                <div class="banner-title">产品编号2122620764</div>
                <div class="banner-num">
                    <span class="iconfont banner-icon">&#xe601;</span>
                    39
                </div>
            </div>
        </div>
        <common-gallary @close="handleGallaryClose" :imgs="imgs" v-show="showGallary"></common-gallary>
    </div>
</template>

<script>
import CommonGallary from "common/gallary/Gallary";
    export default {
        name:"DetailBanner",
        data() {
            return {
                showGallary:false,
                imgs:[
                    'https://img1.qunarzz.com/p/tts2/1808/3a/2b8fa80a3815de02.jpg_r_640x420x90_8b6ef55c.jpg','https://img1.qunarzz.com/p/tts1/1808/7e/bf3ce7d3a7d62702.jpg_r_1280x840x90_e42d33ed.jpg','https://img1.qunarzz.com/p/tts8/1807/ef/7eeaf07f984c802.jpg_r_1280x840x90_efb0133d.jpg'
                ]
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
            CommonGallary
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