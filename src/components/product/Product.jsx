import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import { Modal, Icon, Row, Col } from 'antd';
import ProductCard from './ProductCard';
import ProductSuggestions from './ProductSuggestions';

class Product extends Component {

    state = {
        visible: true
    }

    handleOk = (e) => {
        this.setState({
            visible: false
        });
    }
  
    handleCancel = (e) => {
        this.setState({
            visible: false
        });
    }
    
    render() {
        if(!this.state.visible) {
            return <Redirect to="/"/>
        }        
        return (
            <Modal
                visible={this.state.visible}
                footer={null}
                onCancel={this.handleCancel}
                width="auto"
                style={{margin: '0 10% 0 10%'}}
            >
                <Row >
                    <Col span={10}>

                        <ProductCard />

                    </Col>
                    <Col span={12} offset={1}>
                        <div className="product-modal-text">
                            <h3 id="rating">123<Icon type="star"/></h3>
                            <h2 id="title">Jacket</h2>
                            <h3 id="seller">From Urban Outfitters</h3>
                            <hr style={{ margin: '5% 0 5% 0'}}/>
                            <h3 id="description-title">Description</h3>
                            <p id="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <hr style={{ margin: '5% 0 5% 0'}}/>
                            <span>20$</span>
                            <span className="btn btn-success btn-lg buy">Buy</span>
                        </div>
                    </Col>
                </Row>

                <hr style={{ margin: '5% 0 5% 0'}}/>
                
                <ProductSuggestions />
            
            </Modal>
            
        );
    };
};

export default Product;
