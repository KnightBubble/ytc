<template>
    <div class='dynamic-page'>
        <div>2222222222</div>
    </div>
</template>
<script>
    import request from 'superagent';
    export default  {
        name:'dynamic',
        data () {
            return {}
        },
        mounted () {
            return;
            var self = this;
            request
                .post('{{getDynamicApi}}')
                .query({
                    page: 1,
                    pageSize: 10
                })
                .end(function(err, res){
                    debugger;
                    self.data = res.body.data;
                    console.log(self.data)
                });
        }
    }
</script>
<style lang='scss'>
</style>