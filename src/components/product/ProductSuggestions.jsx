import React, { Component } from 'react';
import { Card } from 'antd';
class ProductSuggestions extends Component {
    render() {
        return (
            <div  className="container">
                <h3>More From This Seller</h3>
                <div className="suggestions-panel">
                    <div className="mx-2 suggestions-card">
                        <Card hoverable cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>} ></Card>
                    </div>
                    <div className="mx-2 suggestions-card">
                        <Card hoverable cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>} ></Card>
                    </div>
                    <div className="mx-2 suggestions-card">
                        <Card hoverable cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>} ></Card>
                    </div>
                    <div className="mx-2 suggestions-card">
                        <Card hoverable cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>} ></Card>
                    </div>
                    <div className="mx-2 suggestions-card">
                        <Card hoverable cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>} ></Card>
                    </div>
                    <div className="mx-2 suggestions-card">
                        <Card hoverable cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>} ></Card>
                    </div>
                    <div className="mx-2 suggestions-card">
                        <Card hoverable cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>} ></Card>
                    </div>
                    <div className="mx-2 suggestions-card">
                        <Card hoverable cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>} ></Card>
                    </div>
                </div>
            </div>
        );
    };
};

export default ProductSuggestions;
