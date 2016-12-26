/**
 * Created by wangzhongchun on 6/16/2016.
 */
import React from 'react';
class Cart extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            user: this.props.user,
            contacts: []
        };
    };

    shouldComponentUpdate() {
        return React.addons.PureRenderMixin.shouldComponentUpdate.apply(this, arguments);
    };

    componentDidMount() {
        this.props.contactPromise.then(function (data) {
            if (data instanceof Array) {
                this.setState({user:this.state.user,contacts: data});
            }
        }.bind(this));
    };

    render() {
        let contacts = this.state.contacts;
        let usersList = contacts.map(function (item) {
            return (<tr key={item._id} data-reactid={ "cart-item-" + item._id }>
                <td key={'cart-item-' + item._id}>{item.id}</td>
                <td><a href={item.email}><strong>{item.name}</strong></a></td>
                <td>{item.phone}</td>
                <td>{item.email}</td>
            </tr>);
        });
        return (
            <div className='contact col-lg-12 row'>
                <div className="col-lg-4">
                    <h2>Contacts.</h2><hr />
                    <table className="col-lg-5 table-users table table-bordered table-responsive">
                        <thead>
                        <tr>
                            <th>
                                User ID
                            </th>
                            <th>
                                Name
                            </th>
                            <th>
                                Phone
                            </th>
                            <th>
                                Email
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {usersList}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
Cart.propTypes = {
    cart: React.PropTypes.object.isRequired
};
export default Cart;