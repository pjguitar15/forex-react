import React, { useEffect, useState } from 'react'
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
  const data = [
    {
      name: '1',
      uv: 2.25,
    },
    {
      name: '2',
      uv: 2.19,
    },
    {
      name: '3',
      uv: 2.12,
    },
    {
      name: '4',
      uv: 2.06,
    },
  ]

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
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='name' />
          <YAxis />
          <Tooltip />
          <Area type='monotone' dataKey='uv' stroke='#0C8ACA' fill='#5598BA' />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart
