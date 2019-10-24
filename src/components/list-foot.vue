<template>
  <div id="list-foot">
    <div>
      <router-link to="/" tag="p">
        <i class="el-icon-house"></i>
        <span>首页</span>
      </router-link>
      <router-link to="/classify"  tag="p">
        <i class="el-icon-data-board"></i>
        <span>分类</span>
      </router-link>
      <router-link to="/cart" tag="p">
        <i class="el-icon-shopping-cart-1"></i>
        <span>购物车</span>
      </router-link>
      <router-link to="/myuser" tag="p">
        <i class="el-icon-user"></i>
        <span>用户</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
    #list-foot{
        width: 100%;
        height: 1.3rem;
        position: fixed;
        bottom: 0;
        font-size: 0.3rem;
        background: white;
        div{
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: space-around;
        }
        p{
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            i{
              font-size: 26px;
            }
        }
    }
</style>