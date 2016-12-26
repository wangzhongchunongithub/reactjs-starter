/**
 * Created by wangzhongchun on 6/16/2016.
 */
import React from 'react';
import Item from '../cart-item/item';
class Cart extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            cart: this.props.cart
        };
    };

    shouldComponentUpdate() {
        return React.addons.PureRenderMixin.shouldComponentUpdate.apply(this, arguments);
    };

    componentDidMount() {
    };

    render() {
        return (
            <div className='cart col-lg-12 row'>
                <div className="col-lg-4">
                    <h2>{this.props.cart.title}</h2>
                    <hr />
                    <table className="col-lg-7 table table-bordered table-cart table-responsive">
                        <thead>
                        <tr>
                            <th>
                                Item
                            </th>
                            <th>
                                Price
                            </th>
                            <th>
                                Description
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.props.cart.items.map(function (item, key) {
                                return (<Item key={key} item={item}/>);
                            })
                        }
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