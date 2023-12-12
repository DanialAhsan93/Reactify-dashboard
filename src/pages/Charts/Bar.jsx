import React from 'react';
import {
  ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
  Legend, Category, Tooltip, BarSeries, DataLabel,
} from '@syncfusion/ej2-react-charts';


import { Header } from '../../component';
import { barPrimaryXAxis, barPrimaryYAxis } from '../../data/dummy';
import { barCustomSeries, barChartData } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';

function Bar() {
  const { currentMode } = useStateContext()

  return (

    <div className='m-4 md:m-7 mt-24 p-10  bg-white dark:bg-secondary-dark-bg rounded-3xl overflow-hidden'>
      <Header category="Bar" title="Cammodities percentage" />


      {barCustomSeries.length > 0 ?
        (
          <>
            <ChartComponent
              id='charts'
              height='420px'
              style={{ textAlign: 'center' }}
              primaryXAxis={barPrimaryXAxis}
              primaryYAxis={barPrimaryYAxis}
              chartArea={{ border: { width: 0 } }}
              tooltip={{ enable: true }}
              background={currentMode === 'Dark' ? '#33373E' : '#fff'}
            >

              <Inject services={[BarSeries, Legend, Tooltip, Category, DataLabel]} />

              <SeriesCollectionDirective>

                {barCustomSeries.map((item, index) => {
                  console.log(barCustomSeries)
                  return (
                    <SeriesDirective key={index} {...item} />)
                }
                )}
                <SeriesDirective dataSource={barChartData} xName="x" yName="y" name=" Gold" type="Bar" marker={{
                  dataLabel: {
                    visible: true,
                    position: 'Top',
                    font: { fontWeight: '600', color: '#ffffff' },
                  },
                }} />
              </SeriesCollectionDirective>

            </ChartComponent>

          </>
        )
        :
        "No Data"}





    </div>


  )
}

export default Bar;