<template>
    <div class="header">
        <div class="header-left">
            <div class="iconfont icon-fanhui back-icon"></div>    
        </div>
        <div class="header-input">
           <span class="iconfont icon-sousuo"></span>
            输入城市/景点/游玩主题    
        </div>
        <div class="header-right">
            {{this.city}}   
           <span class="iconfont icon-xiangxia arrow-icon"></span>
        </div>
    </div>
</template>

<script>
    export default {
        name:'HomeHeader',
        props:{
            city:String
        }
    }
</script>

<style lang="stylus" scoped>
 @import '~styles/varibles.styl' 
.header
    line-height .86rem
    display flex
    background $bgColor
    color #fff
    .header-left
        widows .64rem
        float:left
        .back-icon
            text-align center
            font-size .4rem
    .header-input
        flex:1
        color #ccc
        padding-left 0.2rem
        line-height .7rem
        margin-top 0.12rem
        height 0.64rem
        margin-left .2rem
        background #ffffff
        border-radius .1rem
    .header-right
        float:right
        width : 1.24rem
        text-align  center
        .arrow-icon
            font-size .24rem
            margin-left -.04rem
</style>
