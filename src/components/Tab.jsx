import React from 'react';
import {LightSpeed} from 'react-reveal';
import { useSelector, useDispatch } from 'react-redux'
import { fetchPromo } from '../redux/actions/promo';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Tab() {

  const dispatch = useDispatch();
  const items = useSelector(({ promo }) => promo.items);
  const isLoaded = useSelector(({ promo }) => promo.isLoaded);

  React.useEffect(() => {
    dispatch(fetchPromo());
  }, [dispatch]);
  
  const [visibleTab, setVisibleTab] = React.useState('1')
  const listTitles = items.map((item, key) => 
    <div key={key}>
      <li onClick={() => setVisibleTab(item.id)} 
          className={visibleTab === item.id ? "tab-title tab-title--active" : "tab-title"}>
            <div className="tab-title-img">
              <img src={item.tabTitleImg}  alt="SEO" className=""/>
            </div>
            <span>{item.tabTitle}</span>
      </li>
    </div>
  ) 
  const listContent = items.map((item, key) => 
    <LightSpeed key={key}>
      <div className="offers-item__inner" style={visibleTab === item.id ? {} : {display: 'none'}}>
        <div className="offers-item__left">
          <h3 className="offers-item__title">{item.tabContentTitle}</h3>
          <ul className="offers-item__text" dangerouslySetInnerHTML={{__html: item.tabContent}}></ul>
        </div>
        <div className="offers-item__img-wrap">
            <img src={item.tabContentImg}  alt="SEO" className="offers-item__img"/>
        </div>
      </div>
    </LightSpeed>
  )
  const setting = {
      dots: false,
      autoplay: false,
      speed: 1000,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      responsive: [
          {
          breakpoint: 991,
              settings: {
                className: "center",
                focusOnSelect: true,
                centerMode: true,
                infinite: true,
                centerPadding: "60px",
                slidesToShow: 3,
                speed: 500
              }
          },
          {
          breakpoint: 767,
              settings: {
                className: "center",
                focusOnSelect: true,
                centerMode: true,
                infinite: true,
                centerPadding: "150px",
                slidesToShow: 1,
                speed: 500
              }
          },
          {
          breakpoint: 550,
              settings: {
                className: "center",
                focusOnSelect: true,
                centerMode: true,
                infinite: true,
                centerPadding: "30%",
                slidesToShow: 1,
                speed: 500
              }
          },
          {
          breakpoint: 400,
              settings: {
                focusOnSelect: true,
                className: "center",
                centerMode: true,
                infinite: true,
                centerPadding: "25%",
                slidesToShow: 1,
                speed: 500
              }
          }
      ]
  };

  return (
      <div className='container offers'>
        <div className='page-title-center'>
          <h3>See what's inside</h3>
        </div>
        <div className="tabs">
          <ul className="tabs-titles">
          {isLoaded ?  
            <Slider {...setting}>
              {listTitles}
            </Slider>
          : null }
          </ul>
          <div className="tab-content tab-pane">
            {listContent}
          </div>
        </div>
      </div>
  )
}

export default Tab;
