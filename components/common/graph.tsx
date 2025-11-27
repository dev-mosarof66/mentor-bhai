"use client";

import {
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  YAxis,
  BarChart,
  Bar,
} from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { day: "Sun", xp: 120 },
  { day: "Mon", xp: 200 },
  { day: "Tue", xp: 260 },
  { day: "Wed", xp: 320 },
  { day: "Thu", xp: 410 },
  { day: "Fri", xp: 540 },
  { day: "Sat", xp: 600 },
];

const chartConfig = {
  xp: {
    label: "XP Gained",
    color: "#ae00cdff",
  },
} satisfies ChartConfig;

export function LearningGrowthChart() {
  return (
    <Card className="border-2 border-secondary/20 bg-transparent rounded-xl">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">
          Learning Growth (Weekly)
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          XP earned during this week
        </p>
      </CardHeader>

      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            data={chartData}
            margin={{
              top: 10,
              bottom: 10,
              left: 10,
              right: 10,
            }}
          >
            <CartesianGrid vertical={false} strokeDasharray="3 3" />

            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
              tickMargin={10}
              tickFormatter={(value) => value.slice(0, 3)}
            />

            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={10}
              width={35}
            />

            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />

            <Line
              dataKey="xp"
              type="monotone"
              stroke="var(--color-xp)"
              strokeWidth={3}
              dot={{ r: 4, fill: "var(--color-xp)" }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

const monthlyChartData = [
  {
    month: "Jan",
    vocab: 120,
    reading: 8,
    writing: 4,
    speaking: 3,
    listening: 5,
  },
  {
    month: "Feb",
    vocab: 150,
    reading: 10,
    writing: 5,
    speaking: 4,
    listening: 6,
  },
  {
    month: "Mar",
    vocab: 180,
    reading: 12,
    writing: 6,
    speaking: 4,
    listening: 6,
  },
  {
    month: "Apr",
    vocab: 200,
    reading: 11,
    writing: 7,
    speaking: 5,
    listening: 7,
  },
  {
    month: "May",
    vocab: 230,
    reading: 14,
    writing: 6,
    speaking: 6,
    listening: 8,
  },
  {
    month: "Jun",
    vocab: 260,
    reading: 16,
    writing: 8,
    speaking: 7,
    listening: 9,
  },
];

const monthlyChartConfig = {
  vocab: {
    label: "Vocabulary",
    color: "var(--chart-1)",
  },
  reading: {
    label: "Reading",
    color: "var(--chart-2)",
  },
  writing: {
    label: "Writing",
    color: "var(--chart-3)",
  },
  speaking: {
    label: "Speaking",
    color: "var(--chart-4)",
  },
  listening: {
    label: "Listening",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig;

export function MonthlyLearningChart() {
  return (
    <Card className="border-2 border-secondary/20 bg-transparent rounded-xl">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">
          Learning Overview (Monthly)
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Track your monthly progress
        </p>
      </CardHeader>

      <CardContent>
        <ChartContainer config={monthlyChartConfig}>
          <BarChart
            data={monthlyChartData}
            margin={{
              top: 10,
              bottom: 10,
              left: 10,
              right: 10,
            }}
          >
            <CartesianGrid vertical={false} strokeDasharray="3 3" />

            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={10}
            />

            <YAxis tickLine={false} axisLine={false} tickMargin={10} />

            <ChartTooltip content={<ChartTooltipContent />} />

            {/* Bars */}
            <Bar dataKey="vocab" fill="var(--color-vocab)" radius={4} />
            <Bar dataKey="reading" fill="var(--color-reading)" radius={4} />
            <Bar dataKey="writing" fill="var(--color-writing)" radius={4} />
            <Bar dataKey="speaking" fill="var(--color-speaking)" radius={4} />
            <Bar dataKey="listening" fill="var(--color-listening)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
