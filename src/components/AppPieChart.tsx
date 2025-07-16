"use client";
import React from "react";

import { Label, Pie, PieChart } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "./ui/chart";
import { TrendingUp } from "lucide-react";

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  Grocery: {
    label: "Grocery",
    color: "var(--chart-1)",
  },
  Electronics: {
    label: "Electronics",
    color: "var(--chart-2)",
  },
  Cosmetics: {
    label: "Cosmetics",
    color: "var(--chart-3)",
  },
  Medicines: {
    label: "Medicines",
    color: "var(--chart-4)",
  },
  other: {
    label: "Other",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig;

const chartData = [
  { browser: "Grocery", visitors: 275, fill: "var(--color-Grocery)" },
  { browser: "Electronics", visitors: 200, fill: "var(--color-Electronics)" },
  { browser: "Cosmetics", visitors: 287, fill: "var(--color-Cosmetics)" },
  { browser: "Medicines", visitors: 173, fill: "var(--color-Medicines)" },
  { browser: "other", visitors: 190, fill: "var(--color-other)" },
];

const AppPieChart = () => {
  const totalVisitors = chartData.reduce((acc, curr) => acc + curr.visitors, 0);
  return (
    <div className="">
      <h1 className="text-lg font-medium mb-6">Client Stats</h1>
      <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square max-h-[250px]"
      >
        <PieChart>
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Pie
            data={chartData}
            dataKey="visitors"
            nameKey="browser"
            innerRadius={60}
            strokeWidth={5}
          >
            <Label
              content={({ viewBox }) => {
                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                  return (
                    <text
                      x={viewBox.cx}
                      y={viewBox.cy}
                      textAnchor="middle"
                      dominantBaseline="middle"
                    >
                      <tspan
                        x={viewBox.cx}
                        y={viewBox.cy}
                        className="fill-foreground text-3xl font-bold"
                      >
                        {totalVisitors.toLocaleString()}
                      </tspan>
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) + 24}
                        className="fill-muted-foreground"
                      >
                        Clients
                      </tspan>
                    </text>
                  );
                }
              }}
            />
          </Pie>
        </PieChart>
      </ChartContainer>
      <div className="mt-4 flex flex-col gap-2 items-center">
        <div className="flex items-center gap-2 font-medium leading-none">
          Increased up by 5.2% this month{" "}
          <TrendingUp className="h-4 w-4 text-green-500" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total clients for the last 6 months
        </div>
      </div>
    </div>
  );
};

export default AppPieChart;
