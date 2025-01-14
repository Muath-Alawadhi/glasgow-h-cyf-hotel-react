import React from 'react'
import GlasgowCards from './GlasgowCards-TouristInfoCards'
import ManchesterCards from './ManchesterCards-TouristInfoCards'
import LondonCards from './LondonCard-TouristInfoCards'

const TouristInfoCards = () => {
  return (
    <div className="cards-container">
      <GlasgowCards />
      <ManchesterCards />
      <LondonCards />
    </div>
  )
}

export default TouristInfoCards
