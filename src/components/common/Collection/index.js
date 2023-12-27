import React from 'react';
import './Collection.css'
import Slider from 'react-slick';
import NextArrow from '../courosel/nextarrow';
import PrevArrow from '../courosel/prevarrow';
const Collection = ({list}) => {
    const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow />,
      };
  return (
    <div className='Collection-wrapper'>
        <div className='max-width collection'>
            <div className='Collection-title'>
                Collections
            </div>
            <div className='Collection-subtitle-row'>
            <div className='Collection-subtitle-text'>Explore curated lists of top restaurants, cafes, pubs, and bars in Delhi NCR, based on trends</div>
            <div className='collection-location'>
                <div>All Collections In Delhi NCR</div>
                <i class="fa-solid fa-caret-right absolute-center ab"></i>
            </div>
            </div>
            <Slider {...settings}>
  {list.map((item, index) => (
    <div key={index} className='collection-cover'>
      <img 
        src={item.cover}
        alt={item.title}
        className='collection-image'
      />
      <div className='gradient-bg'></div>
      <div className='collection-card-title'>{item.title}</div>
      <div className='collection-card-subtitle'>{item.places}</div>
      <i className="fa-solid fa-caret-right absolute-center"></i>
    </div>
  ))}
</Slider>
            </div>
             </div>
  )
}

export default Collection