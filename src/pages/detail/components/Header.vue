<template>
    <div>
        <router-link v-show="showAbs" tag="div" to="/" class="header-abs">
            <div class="iconfont header-abs-back">&#xe624;</div>
        </router-link>
        <div class="header-flexd" :style="opacityStyle" v-show="!showAbs">
            景点详情
            <router-link to="/">
            <div class="iconfont header-flexd-back">&#xe624;</div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
  name: "DetailHeader",
  data() {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    };
  },

  methods: {
    handleScroll() {
      const top = document.documentElement.scrollTop;
      if (top > 60) {
        let opacity = top / 140;
        opacity > 1 ? 1 : opacity;
        this.opacityStyle = {
          // opacity:opacity
          opacity
        };
        this.showAbs = false;
      } else {
        this.showAbs = true;
      }
    }
  },
  activated() {
    window.addEventListener("scroll", this.handleScroll);
  },
  deactivated() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header-abs
  position absolute
  left 0.2rem
  top 0.2rem
  width 0.8rem
  text-align center
  line-height 0.8rem
  height 0.8rem
  border-radius 0.4rem
  background rgba(0, 0, 0, 0.8)
  .header-abs-back
    color #ffffff
    font-size 0.4rem
.header-flexd
  position fixed
  height $headerHeight
  line-height $headerHeight
  text-align center
  color #fff
  top 0
  left 0
  z-index 999
  right 0
  background $bgColor
  font-size 0.32rem
  .header-flexd-back
    position absolute
    top 0
    left 0
    width 0.64rem
    text-align center
    font-size 0.4rem
    color #fff
</style>
