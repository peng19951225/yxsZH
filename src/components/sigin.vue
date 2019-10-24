<template>
  <div class="siginbox">
    <Returnzj></Returnzj>
    <div class="sigin-div1">
      <p>您的可用积分为</p>
      <h3>999</h3>
      <div></div>
    </div>
    <button>签到</button>
    <div class="sigin-div2">
      <div class="sigin-div2_div" style="background:#F3EAE1">
        <img src="../../static/jj.jpg" alt />
      </div>
      <div class="sigin-div2_div" style="background:#EDE6D4">
        <img src="../../static/gw.jpg" alt />
      </div>
    </div>
  </div>
</template>

<script>
import Returnzj from "./returnzj";
export default {
  components: {
    Returnzj
  }
};
</script>

<style lang="scss">
.siginbox{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.sigin-div1 {
  width: 100%;
  height: 6rem;
  background: #fdf9f0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 2rem 0 0 0;
  div {
    width: 100%;
    height: 1rem;
    background: #e8e1cf;
  }
  p {
    font-size: 0.35rem;
    color: #999999;
  } 
  h3{
    color: #B3A078;
    font-size: 0.8rem;
  }
}
button{
  width: 80%;
  height: 0.8rem;
  box-sizing: border-box;
  border-radius: 22px;
  border:none;
  background: #B3A078;
  color: white;
  margin: 0.8rem auto;
}
.sigin-div2{
  width: 100%;
  height: 4.5rem;
  display: flex;
  flex-direction: column;
 
  .sigin-div2_div{
    width: 95%;
    height: 50%;
     box-sizing: border-box;
  padding: 10px;
  margin: 10px auto;
  border-radius: 12px;
    img{
      width: auto;
      height: 100%;
    }
  }
}
</style>