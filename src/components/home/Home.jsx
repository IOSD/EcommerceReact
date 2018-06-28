import React, {Component} from 'react' ;
import { Link } from 'react-router-dom';
import { Layout, Icon, Menu, Input, Row, Col } from 'antd';
import Router from '../Router';
import Slideshow from './Slideshow';
import ProductSection from './ProductSection';

const {Search} = Input;
const {Header, Content, Sider, Footer} = Layout;

class Home extends Component {

    state = {
        collapsed: true,
    };
    
    toggle = () => {
        this.setState(prevState => ({collapsed: !prevState.collapsed}));
    }

    handleSearch = (value) => {
        console.log(value);
    }

    render() {
        return (
            <Layout>
                <Sider
                    trigger={null}
                    breakpoint={{
                        xs: '480px',
                        sm: '576px',
                        md: '768px',
                        lg: '992px',
                        xl: '1200px',
                        xxl: '1600px',
                    }}
                    theme="light"
                    collapsible
                    collapsedWidth={0}
                    collapsed={this.state.collapsed}
                >
                    <Menu theme="light" mode="inline">
                        <Menu.Item key="1">
                        <Icon type="user" />
                        <span>nav 1</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                        <Icon type="video-camera" />
                        <span>nav 2</span>
                        </Menu.Item>
                        <Menu.Item key="3">
                        <Icon type="upload" />
                        <span>nav 3</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout style={{ background: '#fff'}}>
                    <Header style={{ background: '#fff', padding: '0' }}>
                        <Row>
                            <Col span={24}>
                                <Row>
                                    <Col span={4}>
                                        <div style={{ position: 'relative', display: 'inline-block'}} >
                                            <span style={{fontSize: '1.8rem', padding: '0 1.2rem'}}>THE LOGO</span>
                                            <Icon
                                                className="trigger"
                                                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                                onClick={this.toggle}
                                                style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)'}}
                                            />
                                        </div>
                                    </Col>
                                    <div style={{display: 'flex', justifyContent: 'flex-end'}} >
                                        <Col span={20}>
                                            <Row>
                                                <Col span={16} offset={2}>
                                                    <Search
                                                        placeholder="input search text"
                                                        enterButton="Search"
                                                        size="large"
                                                        onSearch={value => this.handleSearch}
                                                    />
                                                    </Col>
                                                <Col span={6}>
                                                    <Link to='/auth/register' className="btn btn-lg btn-link">Register</Link>    
                                                    <Link to='/auth/signin' className="btn btn-lg btn-outline-primary">Sign in</Link>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </div>
                                </Row>
                            </Col>                        
                        </Row>
                        <hr style={{marginTop: '0'}}/>
                    </Header>
                    <div className="container content">
                        <Content style={{ minHeight: 280 }}>
                            <Slideshow />
                            <ProductSection title="Recently viewed and more"/>
                            <hr />
                            <ProductSection title="Shop for gifts"/>
                            <Router/>
                        </Content>
                    </div>
                    <Footer style={{ backgroundColor: '#222', color:'#fff', textAlign: 'center' }}>
                        IOSD ©2018 Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>
        );
    };
};

export default Home;