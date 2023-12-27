import React from 'react';
import './diningout.css';
import Collection from '../common/Collection';
import Filters from '../common/filters';
import { dining } from '../../data/dining';
import ExploreSection from '../common/exploreSection';
const CollectionList=[
  {
    id:1,
    title:"New Year Restaurent",
    cover:"https://b.zmtcdn.com/data/collections/19f14cd659f66c545da13169c20ff4f7_1702291697.png",
    places:"16 Places"
  },
  {
    id:2,
    title:"Unique Dining Experiences",
    cover:"https://b.zmtcdn.com/data/collections/2deab8e9f06ff125e80f5cc09f11e4d7_1674569132.jpg",
    places:"10 Places"
  },
  {
    id:3,
    title:"Best In Delhi",
    cover:"https://b.zmtcdn.com/data/collections/0b97917002ceffba13fb01f0f61ed9c3_1702557048.jpg",
    places:"19 Places"
  },
  {
    id:4,
    title:"Best Insta-Worthy Places",
    cover:"https://b.zmtcdn.com/data/collections/ae71f4c72fda8a608a3650b15a994fdb_1696838475.jpg",
    places:"21 Places"
  },
  {
    id:5,
    title:"Newly Opened Restaurent",
    cover:"https://b.zmtcdn.com/data/collections/8868e7345d624a79d5900711eb5f8d00_1696923139.png",
    places:"17 Places"
  },
  {
    id:6,
    title:"Winter Special Menus",
    cover:"https://b.zmtcdn.com/data/collections/1fbced97ffd71219924a7c96df83a473_1701751306.jpg",
    places:"8 Places"
  },
  {
    id:7,
    title:"Finest Microbrewaries",
    cover:"https://b.zmtcdn.com/data/collections/c303690883c0b1c0c841a62c3f5942b6_1695623114.png",
    places:"21 Places"
  },
  {
    id:8,
    title:"Breathe-easy & Clean-Dining",
    cover:"https://b.zmtcdn.com/data/collections/13186097b0eb050ef4c9daaff9f35836_1701076190.jpg",
    places:"44 Places"
  }
]
const filters=[
  {
    id:1,
    filterName:"filter",
    icon:<i className="fa-solid fa-filter absolute-center "></i>
  },
  {
     id:2,
     filterName:"Gold",
     icon:<i class="fa-solid fa-crown absolute-center golden"></i>
  },
  {
    id:3,
    filterName:"Rating: 4.0+"
  },
  {
    id:4,
    filterName:"OutDoor Seatings"
  },
  {
    id:5,
    filterName:"Serves Alcohol"
  },
  {
    id:6,
    filterName:"Open Now"
  }
];
const dinintList=dining;
function DiningOut() {
  return (
    <div>
      <Collection list={CollectionList} />
      <Filters FilterList={filters} />
      <ExploreSection list={dinintList} collectionName="Best Food in Delhi NCR"/>
    </div>
  );
}

export default DiningOut