<template>
  <div>
    <Returnzj></Returnzj>
    <div class="sphead">
        <p>专栏详情</p>
      </div>
    <h6 style="font-size:0.5rem;margin:10px 0;text-align:center">{{this.moodslist.title}}</h6>
    <hr style="width:1.5rem;margin:10px auto" />
    <img :src="this.moodslist.pic" alt class="special-img"/>
    <div v-html="this.moodslist.content" class="moodscontent"></div>
  </div>
</template>

<script>
import Product from "../axioss/services/list-service";
import Returnzj from "../components/returnzj";
const _product = new Product();
export default {
  data() {
    return {
      moodslist: [],
      
    };
  },
  components: {
    Returnzj
  },
  created() {
    console.log(this.$route.params.id);
    _product.moodsUrl(this.$route.params.id).then(res => {
      console.log(res);
      this.moodslist = res.data.data;
    });
  }
};
</script>

<style lang="scss">
.moodscontent {
  font-size: 0.3rem;
  padding: 14px;
}
.special-img {
  width: 95%;
  height: auto;
  margin: 0.2rem;
}
.sphead {
  width: 100%;
  height: 1.8rem;
  border: none;
  font-size: 0.35rem;
  line-height: 1.2rem;
  text-align: center;
}
</style>