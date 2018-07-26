
<template>
    <div>
        <!--search bar layout-->
        <div class="search-bar">
            <van-row>
                <van-col span="3"><img :src="locationIcon" width="50%" class="location-icon" /></van-col>
                <van-col span="16">
                <input type="text" class="search-input"/>
                </van-col>
                <van-col span="5"><van-button size="mini">查找</van-button></van-col>
            
            </van-row>
        </div>

        <!--swipwer area-->
        <div class="swiper-area">
            <van-swipe :autoplay="1000">
                <van-swipe-item v-for="(banner,index) in bannerPicArray" :key="index">
                    <img :src="banner.imageUrl" width="100%"/>
                </van-swipe-item>
            </van-swipe>
        </div>

        <div class="type-bar">
            <div  v-for="(cate,index) in category" :key="index" >
                <img v-lazy="cate.image" width="90%" />
                <span>{{cate.mallCategoryName}}</span> 
            </div>
        </div> 

        <div class="ad-banner">
          <img v-lazy="adbanner.PICTURE_ADDRESS" width="100%">
        </div>

        <div class="recommend-areaa">
          <div class="recommend-title">
            推荐商品            
          </div>
          <div class="recommend-body">
            <swiper :options="swiperOption">
              <swiper-slide v-for="(item,index) in recommendGoods" :key="index">
                <div class="recommend-item">
                  <img :src="item.image" width="80%">
                  <div>{{item.goodsName}}</div>
                  <div>{{item.price}}{{item.mallPrice}}</div>
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </div>

<!--floor one area-->
<div class="floor">
 
    <div class="floor-anomaly">
        <div class="floor-one"><img :src="floor1_0.image" width="100%" /></div>
        <div>
            <div class="floor-two"><img :src="floor1_2.image" width="100%" /></div>
            <div><img :src="floor1_3.image" width="100%" /></div>
        </div>
    </div>
 
</div>

<div class="floor-rule">
    <div v-for="(item ,index) in floor1.slice(3)" :key="index">
        <img :src="item.image" width="100%"/>
    </div>
</div>
        
        <!-- <swiperDefault></swiperDefault> -->
    </div>
</template>

<script>
import axios from "axios";
import swiperDefault from "../swiper/swiperDefault";
export default {
  data() {
    return {
      locationIcon: require("../../assets/images/location.png"),
      bannerPicArray: [
        {
          imageUrl:
            "http://7xjyw1.com1.z0.glb.clouddn.com/simleVueDemoPic001.jpg"
        },
        {
          imageUrl:
            "http://7xjyw1.com1.z0.glb.clouddn.com/simleVueDemoPic002.jpg"
        },
        {
          imageUrl:
            "http://7xjyw1.com1.z0.glb.clouddn.com/simleVueDemoPic003.jpg"
        }
      ],
      category: [],
      adbanner: [],
      recommendGoods: [],
      floor1: [],
    };
  },
  components: { swiperDefault },
  created() {
    axios({
      url:
        "https://www.easy-mock.com/mock/5ae2eeb23fbbf24d8cd7f0b6/SmileVue/index",
      method: "get"
    })
      .then(response => {
        console.log(response);
        if (response.status == 200) {
          this.category = response.data.data.category;
          this.adbanner = response.data.data.advertesPicture;
          this.recommendGoods = response.data.data.recommend;

          this.floor1 = response.data.data.floor1;
          //楼层1数据
          this.floor1_0 = this.floor1[0];
          this.floor1_2 = this.floor1[1];
          this.floor1_3 = this.floor1[2];
        }
      })
      .catch(error => {});
  }
};
</script>

<style scoped>
.search-bar {
  height: 2.2rem;
  background-color: #e5017d;
  line-height: 2.2rem;
}
.search-input {
  width: 100%;
  height: 1.3rem;
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
  border-bottom: 1px solid 1px !important ;
  background-color: #e5017d;
  color: #fff;
}
.location-icon {
  padding-top: 0.3rem;
  height: 100%;
  display: block;
  padding-left: 0.3rem;
}

.swiper-area {
  width: 100%;
  clear: both;
}
.type-bar {
  background-color: #fff;
  margin: 0 0.3rem 0.3rem 0.3rem;
  border-radius: 0.3rem;
  font-size: 14px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
.type-bar div {
  padding: 0.3rem;
  width: 20%;
  font-size: 12px;
  text-align: center;
}
.recommend-areaa {
  background-color: #fff;
  margin-top: 0.3rem;
}
.recommend-title {
  border-bottom: 1px solid red;
  padding: 0.2rem;
  font-size: 14px;
  color: #e5017d;
}
.recommend-body {
  border-bottom: 1px solid #eee;
}

.recommend-item {
  width: 99%;
  border-right: 1px solid #eee;
  font-size: 12px;
  text-align: center;
}
 .floor-anomaly{
      display: flex;
      flex-direction:row;
      background-color: #fff;
      border-bottom:1px solid #ddd;
  }
  .floor-anomaly div{
     width:10rem;
 
     box-sizing: border-box;
     -webkit-box-sizing: border-box;
  }
  .floor-one{
      border-right:1px solid #ddd;
 
  }
  .floor-two{
      border-bottom:1px solid #ddd;
  }
  .floor-rule{
      display: flex;
      flex-direction: row;
      flex-wrap:wrap;
      background-color: #fff;

  }
  .floor-rule div{
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width:10rem;
      border-bottom:1px solid #ddd;
  }
  .floor-rule div:nth-child(odd){
      border-right: 1px solid #ddd;
  }
</style>
