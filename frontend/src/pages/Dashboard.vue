<template>
<CountLabel :count="1294" />
</template>
<script>
import CountLabel from '../components/ui/CountLabel.vue';


export default{
    components:{CountLabel},
    data(){
        return{
            Visitors:1294,
        }
    }
}
</script>