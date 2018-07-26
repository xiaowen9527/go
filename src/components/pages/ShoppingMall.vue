
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

          </div>
        </div>

    </div>
</template>

<script>
import axios from "axios";
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
      adbanner: []
    };
  },

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
  padding-top: .2rem;
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
</style>
