<template>
    <div class="icons">

        <swiper>
        <!-- slides -->
            <swiper-slide v-for="(page,index) of pages" :key="index">
                <div class="icon" v-for="item of page" :key="item.id">
                    <div class="icon-img">
                        <img class="icon-img-content" :src="item.imgUrl" >
                    </div>
                    <p class="icon-desc">{{item.desc}}</p>
                </div>
            </swiper-slide>
        </swiper> 
    </div>
</template>

<script>
export default {
  name: "HomeIcons",
  data() {
    return {
        iconList:[
            {
                id:'0001',
                imgUrl:'https://gw.alicdn.com/tfs/TB1lw9HfgoQMeJjy0FpXXcTxpXa-225-183.png', 
                desc:'机票'
            },
            {
                id:'0002',
                imgUrl:'https://gw.alicdn.com/tfs/TB1KsxcbjihSKJjy0FiXXcuiFXa-225-183.png', 
                desc:'酒店客栈'
            },
            {
                id:'0003',
                imgUrl:'https://gw.alicdn.com/tfs/TB1YxNfbjihSKJjy0FlXXadEXXa-225-183.png', 
                desc:'火车票'
            },
            {
                id:'0004',
                imgUrl:'https://gw.alicdn.com/tfs/TB1A0hdbaagSKJjy0FhXXcrbFXa-225-183.png', 
                desc:'汽车票'
            },
            {
                id:'0005',
                imgUrl:'https://gw.alicdn.com/tfs/TB1G_E.a6ihSKJjy0FeXXbJtpXa-227-183.png', 
                desc:'用车'
            },
            {
                id:'0006',
                imgUrl:'https://gw.alicdn.com/tfs/TB1YhCPfgMPMeJjy1XcXXXpppXa-225-183.png', 
                desc:'旅游路线'
            },
            {
                id:'0007',
                imgUrl:'https://gw.alicdn.com/tfs/TB1NBJibaagSKJjy0FcXXcZeVXa-225-183.png', 
                desc:'周边游'
            },
            {
                id:'0008',
                imgUrl:'https://gw.alicdn.com/tfs/TB1wtlcbjihSKJjy0FfXXbGzFXa-225-183.png', 
                desc:'门票'
            },
            {
                id:'0009',
                imgUrl:'https://gw.alicdn.com/tfs/TB13_9IfgoQMeJjy0FpXXcTxpXa-225-183.png', 
                desc:'领里程'
            },
        ]
    }
  },
  computed:{
    pages(){
        const pages = []
        this.iconList.forEach((item,index)=>{
            const page = Math.floor(index/8)
            if(!pages[page]){
                pages[page] = []
            }
            pages[page].push(item)
        })
        return pages
    }

  }
};
</script>

<style lang="stylus" scoped>
    .icons>>>.swiper-container
        width 100%
        height 50vw
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
            color $darkTextColor
            text-align center
            line-height .44rem
            ellipsis()
</style>
