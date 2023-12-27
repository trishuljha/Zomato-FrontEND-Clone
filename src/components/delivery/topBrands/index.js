import React from 'react';
import './topbrand.css';
import NextArrow from '../../common/courosel/nextarrow';
import PrevArrow from '../../common/courosel/prevarrow';
import Slider from 'react-slick';
const topBrandList=[
    {
        id:1,
        time:"35 min",
        title:"McDonald's",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/bb30587d1148b6ab628a61945f64bf88_1625164768.png?output-format=webp"
    },
    {
        id:2,
        time:"24 min",
        title:"Burger King",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187857.png?output-format=webp"
    },
    {
        id:3,
        time:"21 min",
        title:"KFC",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/466f8fc74274145f3b21795c3d21816d_1589433692.png?output-format=webp"
    },
    {
        id:4,
        time:"41 min",
        title:"Haldiram's",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/22529ff52d41a4aa3b36ac1e7e0c0db3_1605099406.png?output-format=webp"
    },
    {
        id:5,
        time:"22 min",
        title:"Subway",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/9302c59eca94abbee01aec9acf9305f6_1676471786.png?output-format=webp"
    },
    {
        id:6,
        time:"25 min",
        title:"Pizza Hut",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/d46560ce3d7b84605cab233c5abc65f3_1625165852.png?output-format=webp"
    },
    {
        id:7,
        time:"25 min",
        title:"Biryani Blues",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/7fdbbe0f4f0aff0bb3775f3ac819ecb0_1638424082.png?output-format=webp"
    },
    {
        id:8,
        time:"23 min",
        title:"La Pino'z Pizza",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/05142cf68ce04384bb185659e1bfe450_1625160307.png?output-format=webp"
    },
    {
        id:9,
        time:"24 min",
        title:"RollsKing",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/a175a6938688350fb3da3018da6293db_1625244343.png?output-format=webp"
    },
    {
        id:10,
        time:"21 min",
        title:"Burger Singh - Big Punjabi Burgers",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/1cbe03ee1c6933e8fb2021cd835e889d_1624021602.png?output-format=webp"
    },
]
const settings = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
const TopBrands = () => {
  return (
    <div className='top-brands max-width'>
        <div className='collection-title'>Top Brands For You</div>
        <Slider {...settings}>
            {topBrandList.map((brand)=>{
                return(
                    <div className='top-brands-cover'>
                        <img
                        src={brand.cover}
                        className='top-brands-image'
                        alt={brand.title}></img>
                        <div className='title'>{brand.title}</div>
                        <div className='top-brands-time'>{brand.time}</div>
                    </div>
                    
                );
            })}
        </Slider>
    </div>
  )
}

export default TopBrands