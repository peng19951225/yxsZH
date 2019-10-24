<template>
  <div class="classify_boss">
    <div class="classify_title">
      <input type="text" placeholder="搜索商品" />
    </div>
    <div class="class_boss">
      <ul>
        <li @click="addtype()">所有分类</li>
        <li v-for="(v,i) in list" v-if="v.level === 1" @click="addtype(v.type)">{{v.name}}</li>
      </ul>
    </div>
    <div class="class_list">
      <div v-for="(v,i) in lists" >
        <img :src="v.icon" alt />
      </div>
    </div>
    <Listfoot></Listfoot>
  </div>
</template>

<script>
import Listfoot from "../components/list-foot";
import Product from "../axioss/services/list-service";
const _product = new Product();
export default {
  components: {
    Listfoot
  },
  data() {
    return {
      list: [],
      lists:[]
    };
  },
  methods: {
    addtype(data) {
      console.log(data)
      this.lists = this.list.filter(v => {
        if (data == "jujia") {
          return v.type == "jujia2";
        }else if(data == "dianqi"){
          return v.type == 'dianqi2'
        }else if(data == "fuzhuang"){
          return v.type == 'fuzhuang2'
        }else if(data == "peishi"){
          return v.type == 'peishi2'
        }else if(data == undefined){
          return v
        }
      });
    }
  },

  created() {
    console.log();
    _product.classifyUrl().then(res => {
      console.log(res.data.data);
      this.list = res.data.data;
      this.lists = res.data.data;
    });
  }
};
</script>

<style lang="scss">
.classify_boss {
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  .classify_title {
    width: 100%;
    height: 1rem;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 0 20px;
    input {
      border-radius: 16px;
      border: 1px solid #999999;
      padding: 5px 15px;
      background: #e2e2e2;
    }
  }
  .class_boss {
    width: 24%;
    height: auto;
    font-size: 16px;
    padding: 10px;
    box-sizing: border-box;
    li {
      margin: 10px 0;
    }
  }
  .class_list {
    width: 74%;
    height: auto;
    max-height: 11rem;
    display: flex;
    flex-wrap: wrap;
    overflow: auto;
    div {
      width: 1.8rem;
      height: 1.8rem;
    }
    img {
      width: 1.6rem;
      height: 1.6rem;
    }
  }
}
</style>