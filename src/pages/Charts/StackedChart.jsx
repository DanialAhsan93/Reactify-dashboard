import React from 'react'
import { Header, Stacked } from '../../component'

const StackedChart = () => {
  return (
    <div className='m-4 md:m-6 mt-24 p-10  bg-white dark:bg-secondary-dark-bg rounded-3xl overflow-hidden'>
      <Header category="Area" title="Inflation Rate in percentage" />
      <Stacked />

    </div>
  )
}

export default StackedChart