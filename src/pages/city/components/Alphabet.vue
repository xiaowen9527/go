<template>
    <div>
        <ul class="list">
            <li class="item">A</li>
            <li class="item">A</li>
            <li class="item">A</li>
            <li class="item">A</li>
            <li class="item">A</li>
            <li class="item">A</li>
            <li class="item">A</li>
            <li class="item">A</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name:"CityAlphabet"
    }
</script>

<style scoped lang="stylus">
@import '~styles/varibles.styl'
.list
    position absolute 
    right 0
    bottom 0
    width .4rem
    top 1.58rem
    display flex
    flex-direction column
    justify-content center
    .item
        text-align center
        line-height .4rem
        color $bgColor

</style>