import React from 'react' ;
import {Route} from 'react-router-dom' ;

import Product from './product/Product' ;

const RouterComponent = () => {
    return (
        <div>
            <Route exact path='/product' component={Product}/>
        </div>
    );
};

export default RouterComponent;