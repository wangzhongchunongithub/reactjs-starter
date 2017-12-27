/**
 * Created by wangzhongchun on 7/13/2016.
 */
import $ from 'jquery';
class User {
    constructor(params) {

    }

    getUsers() {
        let dfd = $.Deferred();
        let promise = $.ajax({
            url: 'http://..../users/findAll',
            method: 'get',
            dataType: 'JSON',
            headers: {
                "accept": "application/JSON"
            },
            success(data){
                dfd.resolve(data);
            },
            error(){
                dfd.resolve([]);
            }
        });
        return promise;
    }
}
export default User;
