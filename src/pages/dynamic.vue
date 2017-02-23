<template>
    <div class='dynamic-page' title='一同筹'>
        <div class='pro-dynamic'>众筹动态<em>{{data.totalCount}}</em></div>
        <div class='dynamic-list' v-for='list in data.pageData' v-if='data.pageData'>
            <div class='dynamic-item'>
                <img :src="list.portraitImgUrl" class='portrait-img'>
                <div class='item-center'>
                    <p class='user-info'>
                        <span class='nick-name'>{{list.nickname}}</span>
                        <span class='title' v-if='list.progressType == 0'>发布更新</span>
                        <span class='title' v-if='list.progressType == 1'>发起筹款</span>
                        <span class='title' v-if='list.progressType == 2'>修改目标金额</span>
                        <span class='title' v-if='list.progressType == 3'>修改结束时间</span>
                    </p>
                    <p class='pro-date'>{{list.progressPre}}</p>
                    <p v-if='list.progressType == 0' class='pro-info'>
                        {{list.instruction}}
                        <img src="../assets/comment.png" @click='comment(list.projectId)'>
                    </p>
                    <p v-if='list.progressType == 1' class='pro-info'>
                        <span>{{list.instruction.split("||")[0]}}</span>
                        <span class='money'>{{list.instruction.split("||")[1].split('元')[0]}}</span>
                        <em>元</em>
                        <img src="../assets/comment.png" @click='comment(list.projectId)'>
                    </p>
                    <p v-if='list.progressType == 1' class='pro-info'>
                        <span>{{list.instruction.split("||")[2]}}</span>
                        <span>{{list.instruction.split("||")[3]}}</span>
                    </p>
                    <p v-if='list.progressType == 2' class='pro-info'>
                        <span class='money'>{{list.instruction.split("||")[1].split("元改为")[0]}}</span>
                        <span>元改为</span>
                        <span class='money'>{{list.instruction.split("||")[1].split("元改为")[1].split('元')[0]}}</span> 元
                        <img src="../assets/comment.png" @click='comment(list.projectId) '>
                    </p>
                    <p v-if='list.progressType == 2' class='pro-info'>
                        <span>修改金额原因：</span>
                        <span>{{list.instruction.split("||")[3]}}</span>
                    </p>
                    <p v-if='list.progressType == 3' class='pro-info'>
                        <span>{{list.instruction.split("||")[1].split("改为")[0]}}</span>
                        <span>改为</span>
                        <span>{{list.instruction.split("||")[1].split("改为")[1]}}</span>
                        <img src="../assets/comment.png" v-if='index==0' @click='comment(list.projectId)'>
                    </p>
                </div>
            </div>
        </div>
        <p class='next-page ' @click='next() ' v-if='offset <= data.totalCount'>
            ︾
        </p>
    </div>
</template>
<script>
    import request from 'superagent';
    export default {
        name: 'dynamic',
        data() {
            return {
                data: {
                    pageData: []
                },
                offset: 1,
                limit: 5

            }
        },
        mounted() {
            document.title = "一同筹";
            this.getData(true);
            var self = this;
            setTimeout(function () {
                console.log(self.data)
            }, 2000);
        },
        computed: {
        },
        methods: {
            comment: function (projectId) {
                alert('跳转到评论页面' + projectId);
            },
            next: function () {
                this.getData(false);
            },
            getData: function (first) {
                var self = this;
                request
                    .post('{{getDynamicApi}}')
                    .query({
                        offset: self.offset,
                        limit: self.limit
                    })
                    .end(function (err, res) {
                        var pageData = self.data.pageData.concat(res.body.data.pageData);
                        self.data = res.body.data;
                        self.data.pageData = pageData;
                        self.offset += self.limit;
                        console.log(self.data)
                    });
            }
        }
    }
</script>
<style lang='scss'>
.dynamic-page{
    font-family: "微软雅黑";    
    text-align:left;
    .pro-dynamic{
        background:#fff;
        border-bottom: 1px solid #f4f4f4;
        padding:0 15px;
        font-weight: 400;
        height: 43px;
        line-height: 43px;
        font-size: 18px;
        color: black;
        em{
            height: 18px;
            width: 25px;
            display: inline-block;
            text-align: center;
            line-height: 20px;
            font-size: 14px;
            color: #fe7927;;
            background: #f4f4f4;
            border-radius: 5px;
            margin-left:10px;
        }
    }
    p{
        margin:0;
        padding:0;
    }
    .dynamic-list{
        background:#fff;
        font-size:14px;
        .dynamic-item{
            font-size:14px;
            font-weight:500;
            overflow:hidden;
            border-bottom: 1px solid #f4f4f4;
            padding:12px;
            .portrait-img{
                display:inline-block;
                width:48px;
                height:48px;
                float:left;
                border-radius:50px;
                float: left;
            }
            .item-center{
                width:80%;
                float:left;
                margin-left: 10px;
                word-break: break-all;
                .user-info{
                    height:24px;
                    .nick-name{
                        font-size:18px;
                        color: #333;
                    }
                    .title{
                        margin-left:20px;
                        color: #666;
                    }
                }
                .pro-date{
                    color: #999;
                    height:24px;
                    line-height:24px;
                    font-weight: 500;
                }
                .pro-info{
                    color: #999;
                    font-weight:500;
                    .money{
                        color:#fe7927;
                    }
                    img{
                        display: inline-block;
                        width: 18px;
                        height: 18px;
                        vertical-align: middle;
                        float: right;
                    }
                }
            }
            .item-right{
                
            }
        }
    }
    .next-page{
        height: 30px;
        line-height: 35px;
        text-align: center;
    }
}
</style>