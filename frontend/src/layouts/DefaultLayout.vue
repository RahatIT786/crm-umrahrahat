
<template>

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
            <router-view />
            <FooterBottom />
        </div>
        
    </div>

</main>
</template>

<script>
import Sidebar from '../components/layout/Sidebar.vue';
import HeaderLogo from '../components/ui/HeaderLogo.vue'
import Navbar from '../components/layout/Navbar.vue';
import FooterBottom from '../components/layout/FooterBottom.vue';


export default {
  components: {
    Sidebar,
    HeaderLogo,
    Navbar,
    FooterBottom
  }
}
</script>
