"use client"

import styles from './chart.module.css'
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: "Sun",
    donation: 4000,
    contacts: 5,
  },
  {
    name: "Mon",
    donation: 3000,
    contacts: 2,
  },
  {
    name: "Tue",
    donation: 2000,
    contacts: 3,
  },
  {
    name: "Wed",
    donation: 2780,
    contacts: 1,
  },
  {
    name: "Thu",
    donation: 1890,
    contacts: 6,
  },
  {
    name: "Fri",
    donation: 2390,
    contacts: 4,
  },
  {
    name: "Sat",
    donation: 3490,
    contacts: 8,
  },
];

const Chart = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Weekly Recap</h2>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip contentStyle={{background:"#151c2c", border:"none"}}/>
          <Legend />
          <Line type="monotone" dataKey="donation" stroke="#8884d8" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="contacts" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart