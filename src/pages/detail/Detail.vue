<template>
    <div>
        <detail-banner :sightName="sightName" :bannerImg="bannerImg" :bannerImgs="gallaryImgs"></detail-banner>
        <detail-header></detail-header>
        
        <div class="container">
            <detail-list :list = 'list'></detail-list>
        </div>
    </div>
</template>

<script>
import DetailBanner from "./components/Banner";
import DetailHeader from "./components/Header";
import DetailList from "./components/List";
import axios from "axios";
export default {
  name: "Deatil",
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data() {
    return {
      sightName:'',
      bannerImg:'',
      gallaryImgs:[],
      list: [],
      infoId:''
    };
  },
  methods: {
    getDetailInfo() {
      // axios.get('/api/detail.json?id='+this.$route.params.id)
      axios
        .get("https://www.easy-mock.com/mock/5b6af6b5a40bfb27425bbb3b/go/detail", {
          params: {
            id: this.$route.params.id
          }
        })
        .then(this.handleGetDataSucc);
    },
    handleGetDataSucc(res) {
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.list = data.categoryList
        this.infoId = this.$route.params.id
        // alert(this.infoId)
      }
    }
  },
  mounted() {
    //this.getDetailInfo();
  },
  activated () {
    if(this.infoId!==this.$route.params.id){
      this.getDetailInfo();
    }
  }
};
</script>

<style scoped lang="stylus">
.container
  height 50rem
</style>