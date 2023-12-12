import React from 'react';
import Linechart from '../../component/Charts/LineChart';
import { Header } from '../../component';
const Line = () => {
  return (
    <div className='m-4 md:m-7 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl '>
      <Header category="Charts" title="Inflation Rates"/>
      <div className='w-full'>
        <Linechart />

      </div>
      
    </div>
  )
}

export default Line