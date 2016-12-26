/**
 * Created by wangzhongchun on 6/16/2016.
 */
import React from 'react';
class UserInfo extends React.Component{
    shouldComponentUpdate(){
        return React.addons.PureRenderMixin.shouldComponentUpdate.apply(this, arguments);
    }
    render(){
        return (
            <span className='user help-block text-warning bg-warning col-lg-4 row'>
                {this.props.user.userName}&nbsp;&nbsp;{this.props.user.email}
            </span>
        );
    }
}
UserInfo.propTypes = {
    user:React.PropTypes.object.isRequired
};
export default UserInfo;