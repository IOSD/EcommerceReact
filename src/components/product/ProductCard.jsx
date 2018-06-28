import React, {Component} from 'react' ;
import { Card, Icon } from 'antd';

class ProductCard extends Component {
    render() {
        return (
            <div className="product-card">
                <Card
                    hoverable
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" width="50%"/>}
                    actions={[<Icon type="heart-o" />, <Icon type="message" />, <Icon type="shopping-cart" />]}
                    >
                </Card>
            </div>
        );
    };
};

export default ProductCard;
