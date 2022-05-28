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

const Chart = () => {
  const data = [
    {
      name: '1',
      uv: 2.25,
      pv: 2400,
      amt: 2400,
    },
    {
      name: '2',
      uv: 2.19,
      pv: 1398,
      amt: 2210,
    },
    {
      name: '3',
      uv: 2.12,
      pv: 9800,
      amt: 2290,
    },
    {
      name: '4',
      uv: 2.06,
      pv: 3908,
      amt: 2000,
    },
  ]
  return (
    <div style={{ width: '100%' }} className='bg-light py-3 rounded shadow m-0'>
      <ResponsiveContainer width='100%' height={200}>
        <AreaChart
          width={500}
          height={200}
          data={data}
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
