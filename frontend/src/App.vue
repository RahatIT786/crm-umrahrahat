<script setup>


import Sidebar from './components/layout/Sidebar.vue';
import HeaderLogo from './components/ui/HeaderLogo.vue';
import Navbar from './components/layout/Navbar.vue';
import FooterBottom from './components/layout/FooterBottom.vue';



</script>

<template>

    <!-- <router-view /> -->
     <!-- <DefaultLayout /> -->
     <main > 

<div class="wrapper">
    <Sidebar />
    <div class="main-panel">
        <div class="main-header">
            <div class="main-header-logo">
               <!-- <HeaderLogo /> -->
            </div>
            <Navbar />
        </div>
        <div class="container">
          <div class="page-inner">
            <router-view />
          </div>
        </div>
       
        <FooterBottom />
    </div>
    
</div>

</main>
   
</template>

