<template>
    <div class='index-page' v-if='true'>
        <mt-swipe  class='swipe' v-if='true'>
            <mt-swipe-item v-for="swiper in data.headPic">
                <img  :src="swiper"/>
            </mt-swipe-item>
        </mt-swipe>
        <div class='list' v-for="pageData in data.pageData" v-if='true'>
            <p class='title'>{{pageData.title}}<span class='releasePre'>{{pageData.releasePre}}天前</span></p>
            <p class='detailInformation'>{{pageData.detailInformation}}</p>
            <div class='img-box'>
                <img v-for='img in pageData.images.split(",")'  :src="img" alt="" class='pro-imgs'>
            </div>
            <div class='pro-support' v-if='pageData.supportCnt > 0'>
                <div class='suppor-logo-box'>
                    <img v-for='img in pageData.subscribeHeaders' :src="img" alt="" class='support-logo'>
                </div>
                <span class='support-num'>已有<em>{{pageData.supportCnt}}</em>人支持</span>
            </div>
            <mt-progress :value="progress" :bar-height="2">
                <div slot="end" class='progress-right'>{{(100*pageData.raiseAmount/pageData.collectGoalAmount).toFixed(2)}}%</div>
            </mt-progress>
            <div class='details'>
                <span>目标<em>{{pageData.collectGoalAmount | dealMoney}}</em>元</span>
                <span>已筹<em>{{pageData.raiseAmount | dealMoney}}</em>元</span>
                <span>剩余<em>{{(pageData.collectGoalAmount-pageData.raiseAmount) | dealMoney}}</em>元</span>
            </div>
        </div>
    </div>
</template>
<script>
    import request from 'superagent';
    export default {
        name: 'index',
        data(){
            return {
                data:{}
            }
        },
        components:{
        },
        created: function () {
            var self = this;
            request
                .get('{{getIndexApi}}')
                .query({
                    page: 1,
                    pageSize: 10
                })
                .end(function(err, res){
                    self.data = res.body.data;
                });
        },
        filters:{
            dealMoney:function(money){
                return (money/1000);
            }
        },
        computed:{
            progress: function(){
                return 20
            }
        }
    }
</script>
<style lang='scss'>
    .index-page{
        .swipe{
            height: 180px;
            img{
                display: inline-block;
                height: 100%;
                width:100%;
            }
        }
        .list{
            padding:12px 5px 12px 12px;
            background: white;
            margin-top:10px;
            overflow: hidden;
            text-align: left;
            .title{
                font-size: 15px;
                color:#333333;
                font-weight: 600;
                margin-bottom: 10px;
                .releasePre{
                    font-size: 14px;
                    color:#aaa;
                    margin-left:5px;
                    font-weight: 100;
                }
            }
            .detailInformation{
                font-size: 15px;
                color: #333333;
                min-height: 15px;
                max-height: 72px;
                display: inline-block;
                word-break: break-all;
                overflow: hidden;
                line-height: 25px;
                margin: 0 12px 0 0;
            }
            .img-box{
                padding:10px 0;
                height: 125px;
                width: 200%;
                overflow: hidden;
                .pro-imgs{
                    height: 125px;
                    width:125px;
                    float: left;
                    margin-right: 6px;
                }
            }
            .pro-support{
                margin: 5px 0 10px 0;
                .suppor-logo-box{
                    display: inline-block;
                    width:200px;
                    overflow: hidden;
                    height: 23px;
                    img.support-logo{
                        width: 20px;
                        height: 20px;
                        border-radius: 50%;
                        margin-left: 5px;
                    }
                }
                .support-num{
                    color:#aaa;
                    font-size: 14px;
                    display: inline-block;
                    height: 20px;
                    line-height: 22px;
                    float: right;
                    margin-right: 12px;
                    em{
                        color:#333;
                    }
                }
            }
            .mt-progress-progress{
                background-color:orange;
            }
            .progress-right{
                margin-left:10px;
            }
            .details{
                margin:10px 12px 5px 0;
                span{
                    font-size: 14px;
                    color: #aaa;
                    display: inline-block;
                    width: 32%;
                    text-align: center;
                    border-right: 1px solid #eeeeee;
                    &:last-child{
                        border-right:none;
                    }
                    em{
                        color:#333;
                    }
                }
            }
        }
    }
</style>