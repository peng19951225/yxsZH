<template>
  <div class="nbnbnb">
       <router-link to="/" tag="p" class="returnzj">
            &lt;
        </router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.nbnbnb{
    position: fixed;
    top: 10px;
    left: 20px; 
    font-size: 0.35rem;
    z-index: 1999;
    border: 1px solid white;
    border-radius: 100%;
    padding: 10px;
    text-align: center;
}
    .returnzj{
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 100%;
        background: white;
    }
</style>