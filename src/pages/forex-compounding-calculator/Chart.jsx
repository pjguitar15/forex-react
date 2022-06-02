import React from 'react'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

const Chart = ({ chartData }) => {
  return (
    <div style={{ width: '100%' }} className='bg-light py-3 rounded shadow m-0'>
      <ResponsiveContainer width='100%' height={200}>
        <AreaChart
          width={500}
          height={200}
          data={chartData}
          syncId='anyId'
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray='2 2' />
          <XAxis dataKey='name' />
          <YAxis dataKey='total' type='name' domain={['dataMin', 'dataMax']} />
          <Tooltip />
          <Area
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
