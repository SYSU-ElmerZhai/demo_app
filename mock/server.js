/**
 * Created by Haodong on 2017/7/26.
 */
var app = require('koa')();
var router=require('koa-router')();
var koaBody=require('koa-body')();

router.get('/',function *(next){
    this.body='hello koa!'
});
router.get('/api',function *(next){
    this.body='text data'
});
router.get('/api/1',function *(next){
    this.body='text data 1'
});
router.get('/api/2',function *(next){
    this.body='text data 2'
});
router.get('/api/post',koaBody,function *(next){
    console.log(this.request.body)
    this.body = JSON.stringify(this.request.body)
});


app.use(router.routes())
    .use(router.allowedMethods());

app.listen(3000);
