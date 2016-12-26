/**
 * Created by wangzhongchun on 6/16/2016.
 */
import React from 'react';
import UserInfo from '../user-info/userInfo';
import Cart from '../cart/cart';
import Contact from '../contact/contact';
import UserModel from '../../models/user';
class AppRoot extends React.Component{
    shouldComponentUpdate () {
        return React.addons.PureRenderMixin.shouldComponentUpdate.apply(this, arguments);
    }
    render(){
        let userModel = new UserModel(),
            user = this.props.state.user;
        return (
            <div className='appRoot'>
                <UserInfo user={this.props.state.user} />
                <Contact user={this.props.state.user} contactPromise={userModel.getUsers()} />
                <Cart cart={this.props.state.cart} />
            </div>
        );
    }
}
AppRoot.propTypes = {
    state: React.PropTypes.object.isRequired
};

export default AppRoot;