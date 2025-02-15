<script setup>
// import HelloWorld from './components/HelloWorld.vue';
// import Test from './components/Test.vue';
import MyPackage from './components/MyPackage.vue';

</script>

<template>
  <div>
    <a  target="_blank">
      <img src="/src/assets/images/siteMaintanance.jpg" class="logo" alt="Vite logo" />
    </a>
    <!-- <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a> -->
    <h5 class="title">SITE UNDER MAINTANANCE</h5>
  </div>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
  <!-- <Test/> -->
   <!-- <MyPackage /> -->
   

</template>

<style scoped>
.logo {
  height: 60vw;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.title{
  color: white;
  font-size: 24px;
  letter-spacing: 2px;
}
</style>
