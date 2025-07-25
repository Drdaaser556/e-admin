"use client";
import React from 'react'

import { ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

const chartConfig = {
  Online: {
    label: "Online",
    color: "var(--chart-1)",
  },
  Offline: {
    label: "Offline",
    color: "var(--chart-4)",
  },
} satisfies ChartConfig;

const chartData = [
  { month: "January", Online: 186, Offline: 80 },
  { month: "February", Online: 305, Offline: 200 },
  { month: "March", Online: 237, Offline: 120 },
  { month: "April", Online: 73, Offline: 190 },
  { month: "May", Online: 209, Offline: 130 },
  { month: "June", Online: 214, Offline: 140 },
];

const AppBarChart = () => {
  return (
    <div className="">
      <h1 className="text-lg font-medium mb-6">Total Clients</h1>
      <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <YAxis
            tickLine={false}
            tickMargin={10}
            axisLine={false}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
          <Bar dataKey="Online" fill="var(--color-Online)" radius={4} />
          <Bar dataKey="Offline" fill="var(--color-Offline)" radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  )
}

export default AppBarChart