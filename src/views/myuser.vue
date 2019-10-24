<template>
  <div>
    <div class="user-box">
      <span class="user-box-sp">
        <i class="el-icon-user-solid"></i>
      </span>
      <router-link to="/userDL" tag="p" v-show="this.$store.state.list == ''">点击登录</router-link>
      <p v-show="this.$store.state.list !== ''">{{this.$store.state.list.uid}}</p>
      
    </div>

    <p class="user-news">
      <i class="el-icon-chat-line-round">新上线更稳定的付款快递查询接口</i>
    </p>

    <hr />

    <div class="user-cart">
      <p style="border-bottom:1px solid #999999;width:100%;height:1rem;line-height:1rem;">
        <i class="el-icon-notebook-2" style="margin:0 20px;">&nbsp;&nbsp;我的订单</i>
        <span style="margin-left:4rem;">&gt;</span>
      </p>
      <div class="user-btn">
        <p>
          <i class="el-icon-wallet"></i>
          <span>待付款</span>
        </p>
        <p>
          <i class="el-icon-box"></i>
          <span>待发货</span>
        </p>
        <p>
          <i class="el-icon-s-promotion"></i>
          <span>待收货</span>
        </p>
        <p>
          <i class="el-icon-chat-line-square"></i>
          <span>待评价</span>
        </p>
      </div>
    </div>

    <hr />

    <div class="user-btn2">
      <div>
        <i class="el-icon-coin"></i>
        <span>我的余额</span>
      </div>
      <div>
        <i class="el-icon-discount"></i>
        <span>我的砍价</span>
      </div>
      <div>
        <i class="el-icon-s-ticket"></i>
        <span>我的礼券</span>
      </div>
      <div>
        <i class="el-icon-star-off"></i>
        <span>我的收藏</span>
      </div>
      <div>
        <i class="el-icon-location-information"></i>
        <span>我的地址</span>
      </div>
      <div>
        <i class="el-icon-headset"></i>
        <span>联系客服</span>
      </div>
    </div>
    <Listfoot></Listfoot>
  </div>
</template>

<script>
import Listfoot from "../components/list-foot";
export default {
  components: {
    Listfoot
  }
};
</script>

<style lang="scss">
.user-box {
  width: 100%;
  height: 4rem;
  background: url('../assets/userNmae.jpg') no-repeat;
  background-size: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 2.8rem 0 1rem;
  .user-box-sp {
    width: 1.5rem;
    height: 1.5rem;
    display: inline-block;
    background: white;
    line-height: 1.5rem;
    text-align: center;
    border-radius: 100%;
    font-size: 0.6rem;
  }
  p {
    font-size: 0.4rem;
    font-weight: 550;
  }
}
.user-news {
  width: 100%;
  height: 1rem;
  font-size: 0.32rem;
  line-height: 1rem;
  padding: 0 14px;
  box-sizing: border-box;
  color: rgb(119, 0, 0);
}

hr {
  width: 100%;
  height: 0.25rem;
  background: rgb(224, 224, 224);
  border: none;
}
.user-cart {
  font-size: 16px;
  .user-btn {
    width: 100%;
    height: 1.5rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #8f8f8f;
    p {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      i {
        font-size: 0.5rem;
        margin: 10px 0;
      }
      span {
        font-size: 0.2rem;
      }
    }
  }
}
.user-btn2 {
  width: 100%;
  height: 3rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  div {
    width: 33%;
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    i {
      font-size: 0.5rem;
      margin: 10px 0;
    }
    span {
      font-size: 0.2rem;
    }
  }
}
</style>