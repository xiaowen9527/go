<template>
    <div class="header">
        城市选择
        <router-link to="/">
            <div class="iconfont icon-fanhui header-back"></div>
        </router-link>
    </div>
</template>

<script>
    export default {
        name:"CityHeader",
    }
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'

.header
    height $headerHeight
    line-height $headerHeight
    overflow hidden
    text-align center
    color #ffffff
    font-size .36rem
    background $bgColor
    position relative
    .header-back
        position absolute
        width .64rem
        top 0
        left 0
        text-align center
        font-size .4rem
        color #ffffff
</style>