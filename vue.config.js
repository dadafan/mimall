module.exports = {
    devServer:{
        host:'localhost',
        port:8083,
        proxy:{//代理
            '/api':{//拦截/api 到下面去
                targer:'https://www.imooc.com',
                changeOrigin:false
            }
        }
    }
}