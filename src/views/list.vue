<template>
  <div id="list-boss">
    <!-- 窗口下拉显示头像 -->
    <div class="list-headslogo" v-show="this.flag">
      <img src="../assets/logo.png" alt />
    </div>
    <!-- 轮播图 -->
    <swiper :options="swiperOption" class="list-lb-swiper">
      <swiper-slide v-for="(v,i) in lbarr">
        <img :src="v.picUrl" alt />
      </swiper-slide>

      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>

     

    <!-- 轮播图下的4个选项 -->
    <div id="list-menu-box">
      <div>
        <router-link to="/sigin" tag="p">
          <img src="../../static/cd1.png" alt />
          <span>签到</span>
        </router-link>
        <router-link to="/gift" tag="p">
          <img src="../../static/cd2.png" alt />
          <span>礼券</span>
        </router-link>
        <router-link :to="'/listcomponent/'+'bargin'" tag="p">
          <img src="../../static/cd3.png" alt />
          <span>砍价</span>
        </router-link>
        <router-link to="/special" tag="p">
          <img src="../../static/cd4.png" alt />
          <span>专栏</span>
        </router-link>
      </div>
    </div>
    <!-- 全民砍价 -->
    <div id="list-body-bargin">
      <p class="list-body-bargin-title">
        <router-link :to="'/listcomponent/'+'bargin'" tag="span">
          全民砍价&nbsp;&nbsp;
          <i class="el-icon-video-play"></i>
        </router-link>
      </p>
      <div v-for="(v,i) in barginlist" v-if="v.categoryId !== 15119" class="list-body-bargin-box">
        <router-link
          :to="'/commodity/'+v.id+'/'+'bargin'"
          tag="div"
          class="list-body-bargin-box_div"
        >
          <img :src="v.pic" alt />
          <div>
            <p class="bargin-box_til">{{v.name}}</p>
            <p class="bargin-box_til2">{{v.characteristic}}</p>

            <div>
              <p>
                <font color="red">{{v.pingtuanPrice}}</font>

                <br />现价
              </p>
              <p>
                {{v.originalPrice}}
                <br />原价
              </p>
              <p>
                {{v.minScore}}
                <br />限量
              </p>
            </div>
          </div>
        </router-link>
      </div>
    </div>

    <!-- 精选专题 -->
    <div id="list-body-moods">
      <p class="list-body-moods-title">
        <router-link to="/special" tag="span">
          精选专题&nbsp;&nbsp;
          <i class="el-icon-video-play"></i>
        </router-link>
      </p>
      <div class="moods_div">
        <div v-for="(v,i) in moods">
          <router-link :to="'/special/'+v.id" tag="span">
            <img :src="v.pic" alt />
            <p class="moods_p1" v-html="v.title"></p>
            <p class="moods_p2" v-html="v.descript"></p>
          </router-link>
        </div>
      </div>
    </div>
    <!-- 人气推荐 -->
    <div id="list-body-recommend">
      <p class="list-body-recommend-title">
        <router-link :to="'/listcomponent/'+'recommend'" tag="span">
          人气推荐&nbsp;&nbsp;
          <i class="el-icon-video-play"></i>
        </router-link>
      </p>
      <div class="recommend_div">
        <div v-for="(v,i) in recommendlist" v-if="v.id !== 99756 && v.id !== 99761">
          <router-link :to="'/commodity/'+v.id+'/'+'recommend'" tag="span">
            <img :src="v.pic" alt />
            <p class="recommend_p1">{{v.name}}</p>
            <!-- <p class="recommend_p2">{{v.characteristic}}</p> -->
            <p class="recommend_p3">￥{{v.pingtuanPrice}}</p>
          </router-link>
        </div>
      </div>
    </div>
    <Listfoot></Listfoot>
  </div>
</template>

<script>
import Product from "../axioss/services/list-service";
const _product = new Product();
import Listfoot from "../components/list-foot";
import Vue from "vue";
import { Swipe, SwipeItem } from "vant";

Vue.use(Swipe).use(SwipeItem);
export default {
  data() {
    return {
      // 监听滚动条显示头像---------------------
      scroll: "",
      flag: false,
      // 轮播图--------------------------------
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
      lbarr: [],
       images: [
        'https://tsplus.zhibocloud.cn/api/v2/files/7837',
        'https://tsplus.zhibocloud.cn/api/v2/files/7838',
        'https://tsplus.zhibocloud.cn/api/v2/files/19637'
      ],
      // 全民砍价---------------------------------
      barginlist: [],
      // 精选专题---------------------------------
      moods: [],
      // 人气推荐---------------------------------
      recommendlist: []
    };
  },
  components: {
    Listfoot
  },
  methods: {
    // 监听滚动条
    menu() {
      this.scroll =
        document.documentElement.scrollTop || document.body.scrollTop;
      //   console.log(this.scroll);
      if (this.scroll >= 400) {
        this.flag = true;
      } else {
        this.flag = false;
      }
      // console.log(this.flag)
    }
  },
  mounted() {
    window.addEventListener("scroll", this.menu);
  },
  created() {
    // 轮播图
    _product.listLBurl().then(res => {
      console.log(res.data.data);
      this.lbarr = res.data.data;
    });
    // 全民砍价
    _product.barginlist().then(res => {
      this.barginlist = res.data.data.goodsMap;
    });
    // 精选专题
    _product.moodslist().then(res => {
      this.moods = res.data.data;
    });
    // 人气推荐
    _product.listrecommendurl().then(res => {
      console.log(res.data.data);
      this.recommendlist = res.data.data;
    });
  }
};
</script>

<style lang="scss">
// 头部显示隐藏头像
#list-boss {
  width: 100%;
  height: 100%;
  position: relative;
  .list-headslogo {
    position: fixed;
    background: white;
    top: 0;
    width: 100%;
    height: 1rem;
    z-index: 1999;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: auto;
      height: 70%;
    }
  }
}
// 轮播图
.list-lb-swiper {
  width: 100%;
  height: auto;
  img {
    width: 100%;
    height: auto;
  }
}
// 轮播图下的四个选项卡
#list-menu-box {
  width: 100%;
  height: 1.5rem;
  position: relative;
  border-bottom: 16px solid #f5f5f5;
  div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 30px 30px 0 0;
    position: absolute;
    background: white;
    top: -40px;
    z-index: 999;
    align-items: center;
    p {
      width: 25%;
      height: 100%;
      font-size: 16px;
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      align-items: center;
      padding-top: 50px;
      img {
        width: 1rem;
        height: 1rem;
        height: auto;
      }
    }
  }
}
// 全民砍价
#list-body-bargin {
  width: 100%;
  height: 9.5rem;
  padding: 0 10px;
  box-sizing: border-box;
  border-bottom: 16px solid #f5f5f5;
  .list-body-bargin-title {
    height: 0.9rem;
    font-size: 0.35rem;
    line-height: 0.9rem;
    text-align: center;
    border-bottom: 1px solid #dfdfdf;
    margin-bottom: 10px;
  }
  .list-body-bargin-box {
    width: 100%;
    height: 2.5rem;

    .list-body-bargin-box_div {
      width: 100%;
      height: 90%;
      display: flex;
      font-size: 12px;
      align-items: center;
      padding: 4px 0;
      border-bottom: 1px solid #dfdfdf;
      > img {
        width: 2.2rem;
        height: auto;
        border-radius: 5px;
      }
      > div {
        width: 80%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        padding: 10px;
        .bargin-box_til {
          font-size: 0.3rem;
        }
        .bargin-box_til2 {
          font-size: 0.25rem;
          color: rgb(187, 187, 187);
        }
        > div {
          display: flex;
          justify-content: space-around;
          > p {
            text-align: center;
          }
        }
      }
    }
  }
}
// 精选专题
#list-body-moods {
  width: 100%;
  height: 8rem;
  padding: 0 10px;
  box-sizing: border-box;
  border-bottom: 16px solid #f5f5f5;
  box-sizing: border-box;
  .list-body-moods-title {
    height: 0.9rem;
    font-size: 0.35rem;
    line-height: 0.9rem;
    text-align: center;
    border-bottom: 1px solid #dfdfdf;
    margin-bottom: 10px;
  }
  .moods_div {
    display: flex;
    overflow: auto;
    > div {
      padding: 10px;
      img {
        width: 6rem;
        height: 4rem;
      }
    }
    .moods_p1 {
      font-size: 14px;
      margin: 10px 0;
    }
    .moods_p2 {
      font-size: 10px;
      color: #afaeae;
    }
  }
}
// 人气推荐
#list-body-recommend {
  width: 100%;
  height: auto;
  padding: 0 10px;
  box-sizing: border-box;
  border-bottom: 16px solid #f5f5f5;
  box-sizing: border-box;
  margin-bottom: 1rem;
  .list-body-recommend-title {
    width: 100;
    height: 0.9rem;
    font-size: 0.35rem;
    line-height: 0.9rem;
    text-align: center;
    border-bottom: 1px solid #dfdfdf;
    margin-bottom: 10px;
  }
  .recommend_div {
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    div {
      width: 49%;
      height: auto;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      box-sizing: border-box;
      padding: 10px;
      img {
        width: 98%;
        height: 75%;
      }
      .recommend_p1 {
        font-size: 14px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .recommend_p2 {
        font-size: 12px;
      }
      .recommend_p3 {
        font-size: 13px;
        color: red;
        font-weight: 600;
        padding: 10px 0;
      }
    }
  }
}
</style>