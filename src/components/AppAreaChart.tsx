"use client";
import React from 'react'
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts";

const chartConfig = {
  Online: {
    label: "Online",
    color: "var(--chart-2)",
  },
  Offline: {
    label: "Offline",
    color: "var(--chart-1)",
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

const AppAreaChart = () => {
  return (
    <div className="">
      <h1 className="text-lg font-medium mb-6">Total Sale</h1>
      <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
        <AreaChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <YAxis tickLine={false} tickMargin={10} axisLine={false} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
          <defs>
            <linearGradient id="fillOnline" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor="var(--color-Online)"
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor="var(--color-Online)"
                stopOpacity={0.1}
              />
            </linearGradient>
            <linearGradient id="fillOffline" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor="var(--color-Offline)"
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor="var(--color-Offline)"
                stopOpacity={0.1}
              />
            </linearGradient>
          </defs>
          <Area
            dataKey="Offline"
            type="natural"
            fill="url(#fillOffline)"
            fillOpacity={0.4}
            stroke="var(--color-Offline)"
            stackId="a"
          />
          <Area
            dataKey="Online"
            type="natural"
            fill="url(#fillOnline)"
            fillOpacity={0.4}
            stroke="var(--color-Online)"
            stackId="a"
          />
        </AreaChart>
      </ChartContainer>
    </div>
  )
}

export default AppAreaChart