/**
 * Created by wangzhongchun on 6/16/2016.
 */
import App from '../../app/app.init';
let appDiv = document.getElementById('app'),
    state = {
        user:{
            userName:"Zac",
            email:"15527370515@qq.com"
        },
        cart:{
            title:"My Cart Items",
            items:[
                {
                    title:"thinkPad e450",
                    price:8500,
                    description:'Color:coffee gold.'
                },
                {
                    title:"hp eliteBook 850",
                    price:4500,
                    description:'Color:silver.'
                },
                {
                    title:"dell vostro 3453",
                    price:6850,
                    description:'Color:black.'
                },
                {
                    title:"iphone 6s",
                    price:9850,
                    description:'Color:white,black.'
                }
            ]
        }
    };
let app = new App({
    state:state
});
app.renderToDOM(appDiv);

