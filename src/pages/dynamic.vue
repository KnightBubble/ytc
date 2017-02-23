<template>
    <div class='dynamic-page' title='一同筹'>
        <div class='pro-dynamic'>众筹动态<em>{{data.totalCount}}</em></div>
        <div class='dynamic-list' v-for='list in data.pageData' v-if='data.pageData'>
            <div v-if='list.progressType == 0' class='dynamic-item'>0000</div>
            <div v-if='list.progressType == 1' class='dynamic-item'>
                <img :src="list.portraitImgUrl" alt="">
                <div class='item-center'>
                    <p><span>{{list.nickname}}</span><span>发起筹款</span></p>
                    <p>{{list.progressPre}}</p>
                    <p v-for='(value, key) in list.instruction'>
                    <span>{{key}}</span>
                    <span>{{value}}</span>
                    </p>
                </div>     
            </div>
            <div v-if='list.progressType == 2' class='dynamic-item'>2222</div>
            <div v-if='list.progressType == 3' class='dynamic-item'>3333</div>
            <div v-if='list.progressType == 4' class='dynamic-item'>4444</div>
        </div>
    </div>
</template>
<script>
    import request from 'superagent';
    import { Cell } from 'mint-ui';
    export default  {
        name:'dynamic',
        data () {
            return {
                data:{}
            }
        },
        mounted () {
            var self = this;
            document.title = "一同筹";
            request
                .get('{{getDynamicApi}}')
                .end(function(err, res){
                    self.data = res.body.data;
                    console.log(self.data)
                });
        },
        components: {
            Cell
        },
        watch: {
            data:function(){
                var data = this.data.pageData;
                for(var j=0; j<data.length;j++){
                    var item = data[j]
                    var arrayInfo = item.instruction.split('||');
                    var json = {};
                    for(var i=0;i<arrayInfo.length;i++){
                        if(i%2 == 0){
                            if(i==0){
                                arrayInfo[i+1] = arrayInfo[i+1].split('元')[0]
                            }
                            json[arrayInfo[i]] = arrayInfo[i+1]
                        }
                    }
                    data[j].instruction = json;
                }
                console.log(data);
                return data;
            }
        }
    }
</script>
<style lang='scss'>
.dynamic-page{
    text-align:left;
    .pro-dynamic{
        padding:5px 15px;
        font-weight: 500;
        height: 30px;
        line-height: 30px;
        font-size: 18px;
        em{
            height: 18px;
            width: 25px;
            display: inline-block;
            text-align: center;
            line-height: 20px;
            font-size: 14px;
            color: orange;
            background: #ededed;
            border-radius: 5px;
            margin-left:10px;
            position: relative;
            top: -2px;
        }
    }
    p{
        margin:0;
        padding:0;
    }
    .dynamic-list{
        font-size:14px;
        .dynamic-item{
            overflow:hidden;
            border-top:1px solid #ededed;
            padding:10px 15px;
            img{
                display:inline-block;
                width:40px;
                height:40px;
                float:left;
                border-radius:50px;
                background: red;
                float: left;
            }
            .item-center{
                width:80%;
                float:left;
                margin-left: 10px;
                word-break: break-all;
            }
            .item-right{
                
            }
        }
    }
}
</style>