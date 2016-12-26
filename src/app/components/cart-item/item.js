/**
 * Created by wangzhongchun on 6/16/2016.
 */
import React from 'react';
import Utilities from '../../utils/appUtility';
class Item extends React.Component{
    shouldComponentUpdate(){
        return React.addons.PureRenderMixin.shouldComponentUpdate.apply(this, arguments);
    }
    render(){
        //let title = Utilities.trimString(this.props.item.title)
        let title = this.props.item.title,
            price = this.props.item.price,
            description = this.props.item.description;
        
        return (
            <tr className='item'>
               <td>
                   <a href={'item/' + title } className="item-link">{title}</a>
               </td>
                <td>
                    ${price}&nbsp;
                    {
                        do{
                        if(price > 0 && price < 5000){
                        <span>**</span>
                    }else if(price >= 500 && price < 7000){
                        <span>***</span>
                    }else if(price >= 7000 && price < 9000){
                        <span>****</span>
                    }else{
                        <span>*****</span>
                    }
                    }
                    }
                </td>
                <td>
                    <strong>{description}</strong>
                </td>
            </tr>
        );
    }
}
Item.propTypes = {
    item:React.PropTypes.object.isRequired
};
export default Item;