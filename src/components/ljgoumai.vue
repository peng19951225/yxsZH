<template>
  <div>
    <div class="ljgm-bottom">
      <router-link to="/" tag="p">
        <i class="el-icon-headset"></i>
      </router-link>
      <router-link to="/" tag="p">
        <i class="el-icon-shopping-cart-full"></i>
      </router-link>
      <router-link to="/" tag="p">
        <i class="el-icon-star-off"></i>
      </router-link>
      <div class="gm" @click="gm()">立即购买</div>
      <div class="gwc" @click="gwc()">加入购物车</div>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
      gm(){
          alert(12)
      },
      gwc(){
          alert(23123)
      }
  }

};
</script>

<style lang="scss">
.ljgm-bottom {
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: 1rem;
  color: white;
  background: white;
  text-align: center;
  line-height: 1rem;
  font-size: 16px;
  display: flex;
  border: 1px solid rgb(214, 214, 214);
  p {
    width: 14%;
    border: 1px solid rgb(214, 214, 214);
    color: gray;
    font-size: 0.5rem;
  }
  .gm {
    width: 26%;
    border: 1px solid rgb(214, 214, 214);
    color: gray;
  }
  .gwc {
    width: 30%;
    background: #b7282e;
  }
}
</style>