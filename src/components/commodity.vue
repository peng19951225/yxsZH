<template>
  <div class="barginxqy-boss">
    <Returnzj></Returnzj>

    <swiper :options="swiperOption" class="list-lb-swiper">
      <swiper-slide v-for="(v,i) in list.pics">
        <img :src="v.pic" alt />
      </swiper-slide>

      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>

    <div class="barginxqy-type">
      <span>商品介绍</span>
      <span>商品评价</span>
    </div>
    <div>
      <div class="barginxqy-html" v-html="this.list.content"></div>
    </div>

    <Ljkanjia v-if="bottontype == 'bargin'"></Ljkanjia>
    <Ljgoumai v-if="bottontype == 'recommend'"></Ljgoumai>
  </div>
</template>

<script>
import Product from "../axioss/services/list-service";
import Returnzj from "./returnzj";
const _product = new Product();

import Ljkanjia from "../components/ljkanjia";
import Ljgoumai from "../components/ljgoumai";

export default {
  components: {
    Returnzj,
    Ljgoumai,
    Ljkanjia
  },
  data() {
    return {
      list: [],
      imglet: 0,
      timer: "",
      indexs: 0,
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true // 允许点击小圆点跳转
        },
        autoplay: {
          delay: 2000,
          disableOnInteraction: false // 手动切换之后继续自动轮播
        },
        loop: true
        // navigation: {
        //   nextEl: ".swiper-button-next",
        //   prevEl: ".swiper-button-prev"
        // }
      },
      bottontype: ""
    };
  },
  methods: {},

  created() {
    _product.recommendurl(this.$route.params.id).then(res => {
      this.list = res.data.data;
      console.log(this.list);
    });
    console.log(this.$route.params.type);
    let Mtype = this.$route.params.type;
    if (Mtype == "recommend") {
      this.bottontype = "recommend";
    } else if (Mtype == "bargin") {
      this.bottontype = "bargin";
    }
  }
};
</script>

<style lang="scss">
.barginxqy-boss {
  height: auto;
  font-size: 20px;
  margin-bottom: 1rem;
  .barginxqy-lb-boss {
    width: 100%;
    height: 7.8rem;
    overflow: hidden;
    display: flex;
    position: relative;
    .barginxqy-lb {
      width: 100%;
      height: 100%;
      display: flex;
      list-style: none;
      position: absolute;
    }
  }

  .barginxqy-type {
    width: 100%;
    height: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      width: 50%;
      display: inline-block;
      text-align: center;
    }
  }
  .barginxqy-html {
    p {
      width: 100% !important;
      height: auto;
      padding: 10px;
      box-sizing: border-box;
    }
    span {
      color: #999999;
      font-size: 13px;
    }
    img {
      width: 100% !important;
      height: 80% !important;
    }
  }
}
</style>