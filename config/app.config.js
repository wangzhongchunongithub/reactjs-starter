/**
 * Created by wangzhongchun on 6/16/2016.
 */
var config = {};
config.app.config = {
    appName: "myReactApp",
    version: 0.1,
    env: {
        dev:{
            url:"http:127.0.0.1:3000",
            api:{
                dataServer:""
            }
        },
        staging:{
            url:"http:127.0.0.1:3000",
            api:{
                dataServer:""
            }
        },
        prod:{
            url:"http:127.0.0.1:3000",
            api:{
                dataServer:""
            }
        }
    }
};
module.exports.config = config;