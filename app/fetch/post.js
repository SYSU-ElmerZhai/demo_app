/**
 * Created by Haodong on 2017/7/26.
 */
import 'whatwg-fetch'
import 'es6-promise'

//将对象拼接成key=val&key=val&key=val 的字符串形式
function objparams(obj) {
    var result="";
    var item;
    for(item in obj) {
        result+='&'+item+'='+encodeURIComponent(obj[item]);
    }
    if(result){
        result=result.slice(1);
    }
    return result
}

//发送post请求
export function post(url,paramsObj) {
    var result=fetch(url,{
        method:'post',
        credentials:'include',
        headers:{
            'Accept':'application/json,text/plain,*/*',
            'Content-Type':'application/x-www-form-urlencoded'
        },
        body:objparams(paramsObj)
    });
    return result;
}