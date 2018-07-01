import React, {Component} from 'react' ;
import { Carousel } from 'antd';

class Slideshow extends Component {
    render() {
        return (
            <div style={{margin: '10px 0px 30px 0px'}}>
                <Carousel autoplay>
                    <div className="img-container"><img src="https://www.acurax.com/wp-content/themes/acuraxsite/images/inner_page_bnr.jpg?x21789" alt="banner"/></div>
                    <div className="img-container"><img src="https://www.publicdomainpictures.net/pictures/150000/velka/banner-header-tapete-145002399028x.jpg" alt="banner"/></div>
                    <div className="img-container"><img src="https://www.acurax.com/wp-content/themes/acuraxsite/images/inner_page_bnr.jpg?x21789" alt="banner"/></div>
                    <div className="img-container"><img src="https://www.publicdomainpictures.net/pictures/150000/velka/banner-header-tapete-145002399028x.jpg" alt="banner"/></div>
                </Carousel>
            </div>
        );
    };
};

export default Slideshow;