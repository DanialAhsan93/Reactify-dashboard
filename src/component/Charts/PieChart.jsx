import React from 'react';
import {
  AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective,
  Inject, AccumulationLegend, AccumulationTooltip
} from '@syncfusion/ej2-react-charts';
import { pieChartData } from '../../data/dummy';

import { useStateContext } from '../../contexts/ContextProvider';

function PieChart() {
  const { currentMode } = useStateContext()
  const legendSettings = { visible: true };
  return (
    <AccumulationChartComponent
      id='pie-chart'
      height='420px'
      legendSettings={legendSettings}
      tooltip={{ enable: true }}
      background={currentMode === 'Dark' ? '#33373E' : '#fff'}
    >

      <Inject services={[AccumulationLegend, AccumulationTooltip]} />

      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective dataSource={pieChartData} xName='x' yName='y' radius='90%' />
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>

  )
}

export default PieChart