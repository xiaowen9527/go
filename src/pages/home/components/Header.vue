<template>
    <div class="header">
        <div class="header-left">
            <div class="iconfont icon-fanhui back-icon"></div>    
        </div>
        <div class="header-input">
           <span class="iconfont icon-sousuo"></span>
            输入城市/景点/游玩主题    
        </div>
        <router-link to="/city">
            <div class="header-right">
                {{this.city}}   
            <span class="iconfont icon-xiangxia arrow-icon"></span>
            </div>
        </router-link>
    </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
    export default {
        name:'HomeHeader',
        computed: {
            ...mapState(['city']),
            ...mapGetters(['doubleCity'])
        }
    }
</script>

<style lang="stylus" scoped>
 @import '~styles/varibles.styl' 
 @import '~styles/mixins.styl'      
.header
    line-height $headerHeight
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
        minwidth : 1.04rem
        padding-left .1rem
        text-align  center
        color #ffffff
        .arrow-icon
            font-size .24rem
            margin-left -.04rem
</style>
