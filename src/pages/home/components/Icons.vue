<template>
    <div class="icons">
        <div class="icon">
            <div class="icon-img">
                <img class="icon-img-content" src="https://gw.alicdn.com/tfs/TB1lw9HfgoQMeJjy0FpXXcTxpXa-225-183.png" alt="">
            </div>
            <p class="icon-desc">热门景点</p>
        </div>
    </div>
</template>

<script>
export default {
  name: "HomeIcons",
  data() {
    return {
        
    }
  }
};
</script>

<style lang="stylus" scoped>
.icons
    width 100%
    height 50vw
    background #cccccc
    .icon
        overflow hidden
        position relative
        width 25%
        float left
        height 25vw
        .icon-img
            position absolute
            top 0
            left 0
            right 0
            bottom .44rem
            .icon-img-content
                height 100%
                position absolute
                bottom 0
                left 0
                color #fff
        .icon-desc
            position absolute
            left 0
            right 0
            bottom 0
            color #ffffff
            text-align center
            line-height .44rem
</style>
