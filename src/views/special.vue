<template>
  <div>
    <Returnzj></Returnzj>
    <div class="bargainhead">
      <p>严选专栏</p>
    </div>
    <div class="moods_div">
      <div v-for="(v,i) in moods">
        <router-link :to="'/special/'+v.id">
        <img :src="v.pic" alt />
        <div class="moods_div-txt">
          <p class="moods_p1" v-html="v.title"></p>
          <p class="moods_p2" v-html="v.descript"></p>
          <router-link :to="'/special/'+v.id" tag="div" class="moods_rout">查看详细</router-link>
        </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Product from "../axioss/services/list-service";
import Returnzj from "../components/returnzj";
const _product = new Product();

export default {
  components: {
    Returnzj
  },
  data() {
    return {
      moods: []
    };
  },
  created() {
    // this.$axios.get("https://api.it120.cc/small4/cms/news/list").then(res => {
    //   console.log(res.data.data);
    //   this.moods = res.data.data;
    // });
    _product.moodslist().then(res => {
      this.moods = res.data.data;
    });
  }
};
</script>

<style lang="scss">
.moods_div {
  box-sizing: border-box;
  > div {
    position: relative;
    img {
      width: 100%;
      height: auto;
    }
    .moods_div-txt {
      width: 100%;
      height: 95%;
      position: absolute;
      top: 0;
      color: white;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: rgba($color: #000000, $alpha: 0.5);
      .moods_p1 {
        font-size: 20px;
        margin: 10px 0;
      }
      .moods_p2 {
        width: 80%;
        font-size: 15px;
        margin: 10px 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      div {
        font-size: 20px;
      }
    }
  }
}
.moods_rout {
  width: 2.5rem;
  height: 0.7rem;
  border: 1px solid white;
  line-height: 0.7rem;
  text-align: center;
  border-radius: 20px;
}
.bargainhead {
  width: 100%;
  height: 1.2rem;
  border-bottom: 1px solid #999999;
  font-size: 0.4rem;
  line-height: 1.2rem;
  text-align: center;
}
</style>