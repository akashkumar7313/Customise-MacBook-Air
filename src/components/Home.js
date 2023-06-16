import React from 'react'
import LeftSection from './LeftSection'
import RightSection from './RightSection'

export default function Home() {
  return (
    <div className='flex flex-col md:flex-row justify-center'  >
      <LeftSection/>
      <RightSection/>
    </div>
  )
}
