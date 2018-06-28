import React, {Component} from 'react' ;
import { Link } from 'react-router-dom';
import { Row, Col, Card } from 'antd';

class ProductSection extends Component {
    render() {
        return (
            <div>
                <h2 className="section-heading">{this.props.title}</h2>
                    <Row gutter={24}>
                        <Col xs={24} sm={16} md={16} lg={8} xl={4}>
                            <div className="product-display-card">
                                <Link to="/product">
                                    <Card bordered={false} cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>} >
                                        <p className="title-text">Black Jacket</p>
                                        <p className="seller-text">Urban Outfitters</p>
                                        <p className="price-text"><strong>US $20</strong></p>  
                                    </Card>
                                </Link>
                            </div>
                        </Col>
                        <Col xs={24} sm={16} md={16} lg={8} xl={4}>
                            <div className="product-display-card">
                                <Link to="/product">
                                    <Card bordered={false} cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>} >
                                        <p className="title-text">Black Jacket</p>
                                        <p className="seller-text">Urban Outfitters</p>
                                        <p className="price-text"><strong>US $20</strong></p>  
                                    </Card>
                                </Link>
                            </div>
                        </Col>
                        <Col xs={24} sm={16} md={16} lg={8} xl={4}>
                            <div className="product-display-card">
                                <Link to="/product">
                                    <Card bordered={false} cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>} >
                                        <p className="title-text">Black Jacket</p>
                                        <p className="seller-text">Urban Outfitters</p>
                                        <p className="price-text"><strong>US $20</strong></p>  
                                    </Card>
                                </Link>
                            </div>
                        </Col>
                        <Col xs={24} sm={16} md={16} lg={8} xl={4}>
                            <div className="product-display-card">
                                <Link to="/product">
                                    <Card bordered={false} cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>} >
                                        <p className="title-text">Black Jacket</p>
                                        <p className="seller-text">Urban Outfitters</p>
                                        <p className="price-text"><strong>US $20</strong></p>  
                                    </Card>
                                </Link>
                            </div>
                        </Col>
                        <Col xs={24} sm={16} md={16} lg={8} xl={4}>
                            <div className="product-display-card">
                                <Link to="/product">
                                    <Card bordered={false} cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>} >
                                        <p className="title-text">Black Jacket</p>
                                        <p className="seller-text">Urban Outfitters</p>
                                        <p className="price-text"><strong>US $20</strong></p>  
                                    </Card>
                                </Link>
                            </div>
                        </Col>
                        <Col xs={24} sm={16} md={16} lg={8} xl={4}>
                            <div className="product-display-card">
                                <Link to="/product">
                                    <Card bordered={false} cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>} >
                                        <p className="title-text">Black Jacket</p>
                                        <p className="seller-text">Urban Outfitters</p>
                                        <p className="price-text"><strong>US $20</strong></p>  
                                    </Card>
                                </Link>
                            </div>
                        </Col>
                    </Row>
            </div>
        );
    };
};

export default ProductSection;