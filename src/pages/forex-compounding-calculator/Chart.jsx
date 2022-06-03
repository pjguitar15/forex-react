import React, { useState, useEffect } from 'react'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

const Chart = ({ chartData, lastTotalValue }) => {
  useEffect(() => {
    console.log('Value sent to Chart: ' + lastTotalValue)
  }, [lastTotalValue])
  return (
    <div className='bg-light py-3 rounded shadow m-0'>
      <ResponsiveContainer
        // key={`rc_${chartData.length}`}
        width='100%'
        height={335}
      >
        <AreaChart
          // key={`lc_${chartData.length}`}
          data={chartData}
          syncId='anyId'
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray='3 2' />
          <XAxis dataKey='name' />
          <YAxis
            width={80}
            dataKey={'total'}
            type='number'
            domain={[0, lastTotalValue]}
            allowDataOverflow={true}
          />
          <Tooltip />
          <Area
            // key={`l_${chartData.length}`}
            type='monotone'
            dataKey='total'
            stroke='#0C8ACA'
            fill='#5598BA'
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart
