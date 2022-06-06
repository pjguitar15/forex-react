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
  const [heightValue, setHeightValue] = useState(0)
  // update height
  useEffect(() => {
    if (chartData.length >= 90) {
      setHeightValue(1500)
    } else if (chartData.length >= 70) {
      setHeightValue(1200)
    } else if (chartData.length >= 55) {
      setHeightValue(1000)
    } else if (chartData.length >= 44) {
      setHeightValue(800)
    } else if (chartData.length > 34) {
      setHeightValue(600)
    } else if (chartData.length > 24) {
      setHeightValue(400)
    } else if (chartData.length > 12 || chartData.length <= 12) {
      setHeightValue(335)
    }
  }, [chartData])
  return (
    <div className='bg-light py-3 rounded shadow m-0'>
      <ResponsiveContainer
        // key={`rc_${chartData.length}`}
        width='100%'
        height={heightValue}
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
            interval={0}
            // interval='preserveStartEnd'
            tickCount={chartData.length + 2}
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
