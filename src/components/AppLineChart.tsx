"use client";
import React from 'react'

import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "./ui/chart";

const chartData = [
  { month: "January", Online: 186, Offline: 80 },
  { month: "February", Online: 305, Offline: 200 },
  { month: "March", Online: 237, Offline: 120 },
  { month: "April", Online: 73, Offline: 190 },
  { month: "May", Online: 209, Offline: 130 },
  { month: "June", Online: 214, Offline: 140 },
];
const chartConfig = {
  Online: {
    label: "Online",
    color: "var(--chart-1)",
  },
  Offline: {
    label: "Offline",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;


const AppLineChart = () => {
  return (
     <ChartContainer config={chartConfig} className="mt-6">
      <LineChart
        accessibilityLayer
        data={chartData}
        margin={{
          left: 12,
          right: 12,
        }}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          tickMargin={8}
        />
        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
        <Line
          dataKey="Online"
          type="monotone"
          stroke="var(--color-Online)"
          strokeWidth={2}
          dot={false}
        />
        <Line
          dataKey="Offline"
          type="monotone"
          stroke="var(--color-Offline)"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ChartContainer>
  )
}

export default AppLineChart