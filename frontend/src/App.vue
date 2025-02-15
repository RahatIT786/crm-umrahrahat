<script setup>
// import HelloWorld from './components/HelloWorld.vue';
// import Test from './components/Test.vue';
import MyPackage from './components/MyPackage.vue';
import Dashboard from './pages/Dashboard.vue';

</script>

<template>
  
  
    <router-view />
   

</template>

<style scoped>
.logo {
  height: 40vw;
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
