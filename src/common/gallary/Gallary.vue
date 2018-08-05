<template>
    <div class="container" @click="handleGallaryClick">
        <div class="wrapper">
            <swiper :options="swiperOptions">
                <swiper-slide v-for="(item,index) in imgs" :key="item.index">
                    <img class="gallary-img" :src="item" />
                </swiper-slide>
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
    export default {
        name:"CommonGallary",
        props:{
            imgs:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        data() {
            return {
                swiperOptions: {
                    pagination: '.swiper-pagination',
                    paginationType: 'fraction',
                    observeParents: true,
                    observer: true
                }
            }
        },
        methods: {
            handleGallaryClick(){
                this.$emit('close')
            }
        }

    }
</script>

<style scoped lang="stylus">
.container >>> .swiper-container
    overflow: inherit
.container >>> .swiper-pagination-bullet-active
    background: #fff    
.container
    position fixed
    display flex
    flex-direction column
    justify-content center
    top 0
    bottom 0
    left 0
    right 0
    background #000
    z-index 99
    .wrapper
        background #000
        width 100%
        height 0
        overflow hidden
        padding-bottom 65%
        .gallary-img
            width 100%
    .swiper-pagination
        color: #000
        top: .2rem 
        font-size .32rem              
</style>