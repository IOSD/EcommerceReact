import React, {Component} from 'react' ;
import {Link} from 'react-router-dom';
import {Layout, Icon, Menu, Input, Row, Col, Divider} from 'antd';
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
            <Layout style={{background: '#fff'}}>
                <Header style={{background: '#fff', padding: '0'}}>
                    <div className="container-fluid">
                        <Link to={'/'}>
                            <div className="logo">
                                The Logo
                            </div>
                        </Link>
                        <div style={{float: 'left'}}>
                            <Menu
                                theme="light"
                                mode="horizontal"
                                style={{lineHeight:'64px'}}
                            >
                                <Menu.Item key="1">Category 1</Menu.Item>
                                <Menu.Item key="2">Category 2</Menu.Item>
                                <Menu.Item key="3">Category 3</Menu.Item>
                                <Menu.Item key="4">Category 4</Menu.Item>
                                <Menu.Item key="5">Category 5</Menu.Item>
                            </Menu>
                        </div>
                        <div style={{float: 'right'}}>
                            <Menu
                                theme="light"
                                mode="horizontal"
                                style={{lineHeight:'64px'}}
                            >
                                <Menu.Item key="3">
                                    <Search
                                        placeholder="input search text"
                                        onSearch={value => console.log(value)}
                                        style={{ width: 200 }}
                                    />
                                </Menu.Item>
                                <Menu.Item key="1">Register</Menu.Item>
                                <Menu.Item key="2">Sign In</Menu.Item>
                            </Menu>
                        </div>
                    </div>
                </Header>
                <div className="content">
                    <Content style={{minHeight: 280}}>
                        <Slideshow/>
                        <div style={{padding : '0px 50px'}}>
                            <ProductSection/>
                            {/*<hr/>*/}
                            <Divider/>
                            <Router/>
                        </div>

                    </Content>
                </div>`
                <Footer style={{backgroundColor: '#222', color: '#fff', textAlign: 'center'}}>
                    IOSD ©2018 Created by Ant UED
                </Footer>
            </Layout>

        );
    };
};

export default Home;