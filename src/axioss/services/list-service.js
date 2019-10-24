import HTTP from '../utils/https'
const _http = new HTTP()

class Product {
    //轮播图
    listLBurl() {
        return _http.request({
            url: "https://api.it120.cc/small4/banner/list"
        })
    }
    //人气推荐接口
    listrecommendurl() {
        return _http.request({
            url: "https://api.it120.cc/small4/shop/goods/list"
        })
    }
    //精选专题
    moodslist() {
        return _http.request({
            url: "https://api.it120.cc/small4/cms/news/list"
        })
    }
    //全民砍价
    barginlist() {
        return _http.request({
            url: "https://api.it120.cc/small4/shop/goods/kanjia/list"
        })
    }



    //砍价商品详情页
    barginUrl(id) {
        return _http.request({
            url: "https://api.it120.cc/small4/shop/goods/kanjia/list",
        })
    }
    //非砍价商品详情页
    recommendurl(id) {
        return _http.request({
            type: "post",
            url: "https://api.it120.cc/small4/shop/goods/detail",
            data: {
                id: id
            }
        })
    }
    


    
    //文章详情页
    moodsUrl(id) {
        return _http.request({
            type: "post",
            url: "https://api.it120.cc/small4/cms/news/detail",
            data: {
                id: id
            }
        })
    }
    //分类
    classifyUrl() {
        return _http.request({
            type: "post",
            url: "https://api.it120.cc/small4/shop/goods/category/all",

        })
    }
    //登录
    dlUrl(data) {
        return _http.request({
            type: "post",
            url: "https://api.it120.cc/small4/user/m/login?deviceId=007&deviceName=monkey",
            data: {
                mobile: data.tel,
                pwd: data.pass
            }
        })
    }
    
    //验证图形验证码并发送短息验证码
    photocodeUrl(data) {
        return _http.request({
            type: "post",
            url: `https://api.it120.cc/small4/verification/sms/get?mobile=${data.tel}&key=${data.sjnum}&picCode=${data.imgcode}`,
            // data:{
            //     mobile:data.tel,
            //     key:data.sjnum,
            //     picCode:data.imgcode
            // }
        })
    }
    //验证手机短信码
    WCphotocodeUrl(data) {
        return _http.request({
            type: "post",
            url: "https://api.it120.cc/small4/verification/sms/check",
            data:{
                mobile:data.tel,
                code:data.smscode
                // 15652632979
            }
        })
    }
    ZCCGphotocodeUrl(data) {
        return _http.request({
            type: "post",
            url: "https://api.it120.cc/small4/user/m/register",
            data:{
                mobile:data.tel,
                pwd:data.pass,
                code:data.smscode
                // 15652632979
            }
        })
    }
}

export default Product