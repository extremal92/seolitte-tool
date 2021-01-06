import React from 'react';
import Slider from 'react-slick';
import { useSelector, useDispatch } from 'react-redux'
import { fetchBlog } from '../redux/actions/blog';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



function Blog() {

    const dispatch = useDispatch();
    const items = useSelector(({ blog }) => blog.items);
    const isLoaded = useSelector(({ blog }) => blog.isLoaded);

    React.useEffect(() => {
      dispatch(fetchBlog());
    }, [dispatch]);

    const settings = {
        dots: true,
        autoplay: false,
        speed: 1000,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
            breakpoint: 991,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                }
            },
            {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            }
            }
        ]
    };
    return (
        <div className='container'>
          <div className='page-title-center'>
            <h3>Blogs</h3>
          </div>
          <div className="blog">
            {isLoaded ?  
              <Slider {...settings}>
                {items && items.map((item, key) => 
                  <div key={key}>
                    <div className='blog-item'>
                      <div className='blog-item-title'>
                        <h3>{item.title}</h3>
                      </div>
                      <a href="/">
                        <div className='blog-item-image'>
                          <img src={item.img}  alt={item.title} className="blog-item-image-img"/>
                        </div>
                        <div className='blog-item-info'>
                          <span>{item.desc}</span>
                          <span className='blog-item-info-link'>{item.btn}</span>
                        </div>
                      </a>
                    </div>
                  </div>
                  ) }
              </Slider>
            : null }
          </div>
        </div>
    )
}

export default Blog
