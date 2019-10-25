<template>
  <div>
    <div class="cartV">
      <p class="carttitle">购物车</p>
      <div v-show="!this.$store.state.cart.length" class="cartnull">
        <img src="../assets/cart_empty.4bfdfab3.png" alt="">
      </div>
      <div v-show="this.$store.state.cart.length" class="cartnows"></div>
    </div>

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
export default {
  data() {
    return {
      recommendlist: []
    };
  },
  components: {
    Listfoot
  },
  created() {
    _product.listrecommendurl().then(res => {
      console.log(res.data.data);
      this.recommendlist = res.data.data;
    });
  }
};
</script>

<style lang="scss">
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
.cartV{
  width: 100%;
  height: auto;
  min-height: 5rem;
  .carttitle{
    width: 100%;
    height: 1rem;
    font-size: 0.4rem;
    line-height: 1rem;
    text-align: center;
  }
  .cartnull{
    width: 100%;
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #F5F5F5;
    img{
      width: 30%;
      height: auto;
    }
  }
}
</style>