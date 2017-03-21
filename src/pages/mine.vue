<template>
    <div class="mine-page">
        <div class="page-mine">
            <headerBar>个人中心</headerBar>
        </div>
        <userCard></userCard>
    </div>
    
</template>

<script>
import headerBar from '../components/header/header.vue';
import userCard from '../components/user-card/user-card.vue';
 export default {
        name: 'mine',
        components:{
            headerBar,
            userCard
        },
        data(){
           return {};
        },
        methods: {
        }
    }

</script>

<style lang='scss' scope>
</style>
