import React from 'react';
// import Slider from 'react-slick';



function Price() {
    const renderSlides = () =>
    [1, 2, 3, 4, 5, 6, 7, 8].map((num, key) => (
      <div className='slickslider-item' key={key}>
        <h3>Slide {num}</h3>
      </div>
    ));

  return (
    <div className="price">
      price
      {/* <Slider dots={true}>{renderSlides()}</Slider> */}
    </div>
  );
}

export default Price;
