<template>
  <div>
    <div>
      <Returnzj></Returnzj>
      <div class="bargainhead">
        <p>{{typeTitle}}</p>
      </div>
    </div>
    <div v-for="(v,i) in list" class="list-body-bargin-box" style="border-bottom:1px solid #dfdfdf">
      <div class="list-body-bargin-box_div">
        <router-link :to="'/commodity/'+v.id+'/'+typegn" class="list-body-bargin-box_div" tag="span">
         
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
  </div>
</template>

<script>
import Product from "../axioss/services/list-service";
import Returnzj from "./returnzj";
const _product = new Product();
export default {
  data() {
    return {
      list: [],
      typeTitle: "",
      typegn:''
    };
  },
  components: {
    Returnzj
  },
  created() {
    console.log();
    if (this.$route.params.type == "bargin") {
      this.typeTitle = "砍价列表";
      this.typegn = "bargin"
      _product.barginlist().then(res => {
        this.list = res.data.data.goodsMap;
      });
    } else if (this.$route.params.type == "recommend") {
      this.typeTitle = "人气推荐";
      this.typegn = "recommend"
       _product.listrecommendurl().then(res => {
        this.list = res.data.data;
      });
    }
  }
};
</script>

<style lang="scss">
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
    > img {
      width: 2rem;
      height: 2.2rem;
      border-radius: 5px;
      margin-left: 20px;
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

.bargainhead {
  width: 100%;
  height: 1.2rem;
  border-bottom: 1px solid #999999;
  font-size: 0.4rem;
  line-height: 1.2rem;
  text-align: center;
}
</style>