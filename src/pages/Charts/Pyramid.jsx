import React from 'react';
import {
  AccumulationChartComponent, AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective, Inject, AccumulationLegend, PyramidSeries,
  AccumulationTooltip, AccumulationDataLabel
} from '@syncfusion/ej2-react-charts';


import { Header } from '../../component';
import { PyramidData } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';

function Pyramid() {
  const { currentMode } = useStateContext()
  return (
    <div className='m-4 md:m-7 mt-24 p-10  bg-white dark:bg-secondary-dark-bg rounded-3xl overflow-hidden'>
      <Header category="Pyramid" title="Inflation Rate in percentage" />

      {PyramidData.length > 0 ?
        (
          <>
            <AccumulationChartComponent
              id='pyramid-chart'
              height='420px'
              // primaryXAxis={areaPrimaryXAxis}
              // primaryYAxis={areaPrimaryYAxis}
              // chartArea={{ border: { width: 0 } }}
              //  tooltip={{enable : true}}
              background={currentMode === 'Dark' ? '#33373E' : '#fff'}
            >

              <Inject services={[AccumulationLegend, PyramidSeries, AccumulationTooltip, AccumulationDataLabel]} />

              <AccumulationSeriesCollectionDirective>
                {PyramidData.map((item, index) =>
                  <AccumulationSeriesDirective
                    key={index}
                    {...item}
                    dataSource={PyramidData}
                    xName='x'
                    yName='y'
                    type='Pyramid'
                    explode={true}
                    explodeOffset='10'
                    explodeAll={false}
                    explodeIndex={3}>
                  </AccumulationSeriesDirective>

                )}
              </AccumulationSeriesCollectionDirective>
            </AccumulationChartComponent>

          </>
        ) :

        "No Data Available"

      }



    </div>

  )
}

export default Pyramid;