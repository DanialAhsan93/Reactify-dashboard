import React from 'react';
import { Header } from '../../component';
import PieChart from '../../component/Charts/PieChart';

function Pie() {
  return (
    <div className='m-4 md:m-7 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl '>
      <Header category="Pie" title="Inflation Rate in PieChart" />
      <div className='w-full'>
        <PieChart />
      </div>
    </div>

  )
}

export default Pie;