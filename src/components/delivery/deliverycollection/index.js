import React from 'react';
import './deliverycollection.css';
import NextArrow from '../../common/courosel/nextarrow';
import PrevArrow from '../../common/courosel/prevarrow';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import DeliveryItem from './deliveryitem';
const deliveryItems=[
{
 id:1,
 title:"Pizza",
 cover:"https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
},
{
    id:2,
    title:"Burger",
    cover:"https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png",
   },
   {
    id:3,
    title:"Cake",
    cover:"https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png",
   },
   {
    id:4,
    title:"Roll",
    cover:"https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png",
   },
   {
    id:5,
    title:"Biryani",
    cover:"https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png",
   },
   {
    id:6,
    title:"Chicken",
    cover:"https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png"
   },
   {
    id:7,
    title:"Momos",
    cover:"https://b.zmtcdn.com/data/o2_assets/5dbdb72a48cf3192830232f6853735301632716604.png"
   },
   {
    id:8,
    title:"North Indian",
    cover:"https://b.zmtcdn.com/data/o2_assets/019409fe8f838312214d9211be010ef31678798444.jpeg"
   },
   {
    id:9,
    title:"Thali",
    cover:"	https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png"
   },
   
];
const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
const DelieveryCollection = () => {
  return (
    <div className='delivery-collection'> <div className='max-width'>
        <div className="collection-title">Inspiration for your first order</div>
        <Slider {...settings}>
            {
                deliveryItems.map((item)=>{
                    return <DeliveryItem item={item} key={item.id}/>
                })
            }
        </Slider>
        </div>
        </div>
  )
}

export default DelieveryCollection;