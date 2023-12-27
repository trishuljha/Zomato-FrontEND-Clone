import React from 'react'
import ExploreCard from './ExploreCard'
import './exploreSection.css'

const ExploreSection = ({list,collectionName}) => {
  return (
    <div className='max-width explore-section'> 
    <div className='collection-title'>{collectionName}</div><div className="explore-grid">
        {list.map((rest)=>{
            return <ExploreCard rest={rest}/>
        })}
        </div>
        </div>
  )
}

export default ExploreSection