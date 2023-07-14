"use client"
import {
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  Bar,
  Tooltip,
} from "recharts"

import { useReviewsContext } from "@/context/feedback.context"
import transformReviewsForChart from "@/lib/helpers/transformReviewsForChart"

const Chart = () => {
  const { state } = useReviewsContext()
  const result = transformReviewsForChart(state)

  return (
    <div className="border rounded-md py-6 my-6 max-w-3xl">
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={result}>
          <XAxis
            dataKey="name"
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(name) =>
              `${name} ${name === "1" ? "star" : "stars"}`
            }
          />
          <Tooltip />
          <YAxis
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => value}
          />
          <Bar dataKey="total" fill="#fde047" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart
