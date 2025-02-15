<template>
<div class="row">
    <CountLabel :count="Visitors" />
<CountLabel :count="Visitors" />
<CountLabel :count="Visitors" />
</div>
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