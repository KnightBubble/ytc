<template>
    <mt-tabbar v-model="selected" fixed class='app-footer'>
        <mt-tab-item id="公益" @click.native='selectTab(0)'>
            <img slot="icon" src="">
            公益
        </mt-tab-item>
        <mt-tab-item id="动态" @click.native='selectTab(1)'>
            <img slot="icon" src="">
            动态
        </mt-tab-item>
        <mt-tab-item id="互助" @click.native='selectTab(2)'>
            <img slot="icon" src="">
            互助
        </mt-tab-item>
        <mt-tab-item id="发起" @click.native='selectTab(3)'>
            <img slot="icon" src="">
            发起
        </mt-tab-item>
        <mt-tab-item id="我" @click.native='selectTab(4)'>
            <img slot="icon" src="">
            我
        </mt-tab-item>
    </mt-tabbar>
</template>

<script>
import router from '../router/index.js';
var tabLink = [{
    path:'/index',
    selected:'公益'
},{
    path:'/dynamic',
    selected:'动态'
},{
    path:'/huzhu',
    selected:'互助'
},{
    path:'/faqi',
    selected:'发起'
},{
    path:'/my',
    selected:'我'
}]
export default  {
    name:'footer',
    data () {
        return {
            selected:"公益"
        }
    },
    methods: {
        selectTab: function (index) {
            if(tabLink[index]){
                this.selected = tabLink[index].selected;
                router.push(tabLink[index].path);
            };
        }
    },
    watch: {
        '$route': function(r) {
            if(r.path === '/index'){
                this.selected = "公益"; 
            }
            if(r.path === '/dynamic'){
                this.selected = "动态"; 
            }
        }
    },
    mounted () {
        this.$on('id-selected', function (id) {
            alert(id)
        })
    }
}
</script>
<style lang='scss'>
    .app-footer.mint-tabbar{
        background:white;
        .mint-tab-item.is-selected {
            color: orange!important;
            background-color: white;
        }
    }
</style>