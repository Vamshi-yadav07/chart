import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from 'recharts'

const data = [
  {
    group_name: 'Group A',
    boys: 200,
    girls: 400,
    others: 150,
  },
  {
    group_name: 'Group B',
    boys: 3000,
    girls: 500,
    others: 950,
  },
  {
    group_name: 'Group C',
    boys: 1000,
    girls: 1500,
    others: 750,
  },
  {
    group_name: 'Group D',
    boys: 700,
    girls: 1200,
    others: 450,
  },
]

const VideoPlayer = () => {
  const DataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }

  return (
    <ResponsiveContainer width="100%" height={500}>
      <BarChart
        data={data}
        margin={{
          top: 5,
        }}
      >
        <XAxis
          dataKey="group_name"
          tick={{
            stroke: 'gray',
            strokeWidth: 1,
          }}
        />
        <YAxis
          tickFormatter={DataFormatter}
          tick={{
            stroke: 'gray',
            strokeWidth: 0,
          }}
        />
        <Legend
          wrapperStyle={{
            padding: 40,
          }}
        />
        <Bar dataKey="boys" name="Boys" fill="#99182c" barSize="20%" />
        <Bar dataKey="girls" name="Girls" fill="#d447d6" barSize="20%" />
        <Bar dataKey="others" name="others" fill="#42f5b9" barSize="20%" />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default VideoPlayer
