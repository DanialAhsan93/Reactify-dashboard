import React from 'react';
import {
  ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
  Category, Tooltip, Zoom, Crosshair, CandleSeries
} from '@syncfusion/ej2-react-charts';


import { Header } from '../../component';
import { financialChartData } from '../../data/dummy';
import { FinancialPrimaryXAxis } from '../../data/dummy';
import { FinancialPrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';

function Financial() {
  const { currentMode } = useStateContext()


  return (
    <div className='m-4 md:m-7 mt-24 p-10  bg-white dark:bg-secondary-dark-bg rounded-3xl overflow-hidden'>
      <Header category="Financial" title="Financial Report" />

      {financialChartData.length > 0 ?
        (
          <>
            <ChartComponent
              id='financial-chart'
              height='420px'
              primaryXAxis={FinancialPrimaryXAxis}
              primaryYAxis={FinancialPrimaryYAxis}
              chartArea={{ border: { width: 0 } }}
              tooltip={{ enable: true }}
              background={currentMode === 'Dark' ? '#33373E' : '#fff'}
            >

              <Inject services={[CandleSeries, Tooltip, Category, Crosshair, Zoom]} />

              <SeriesCollectionDirective>
                {financialChartData.map((item, index) => <SeriesDirective key={index} {...item} />)}

                <SeriesDirective dataSource={financialChartData}
                  xName='x' yName='low'
                  type='Candle' 
                  low='low'
                  high='high' 
                  open='open'
                  close='close'
                  bearFillColor='#e56590'
                  bullFillColor='#f8b883'>
                </SeriesDirective>

              </SeriesCollectionDirective>
            </ChartComponent>


          </>
        )
        : "No Data Available"}


    </div>

  )
}

export default Financial;